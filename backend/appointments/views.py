from django.db.models import Q
import os
from typing import Optional
from rest_framework import generics
from .models import Department, Doctor, Appointment
from .serializers import DepartmentSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.http import JsonResponse
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import status
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from pydantic import BaseModel, Field
from django.core.cache import cache
from django.http import HttpResponse
from django.utils.xmlutils import SimplerXMLGenerator
from django.views import View



# ---------------------------------------------------------
# AI CHATBOT: STRUCTURED INTENT SCHEMA
# ---------------------------------------------------------
class ChatbotIntent(BaseModel):
    intent: str = Field(description="Must be exactly one of: 'find_doctor', 'list_specialities', 'contact_info', or 'invalid'")
    department: Optional[str] = Field(
        default="", 
        description="Extract the matching department name. Common department roles: PAEDIATRICIAN, DERMATOLOGIST, GASTROENTEROLOGIST, CHEST PHYSICIAN, ONCOLOGY, ENT, PLASTIC SURGEON, VASCULAR SURGEON, CARDIOLOGY, NEPHROLOGY, NEUROLOGY, ORTHOPEDIC, GENERAL SURGERY, OBSTETRICS & GYNECOLOGY, LAP. GYNAECOLOGY, PROCTOLOGY, INTENSIVIST. If no match, leave empty."
    )
    extracted_symptoms: Optional[str] = Field(default="", description="Brief summary of symptoms mentioned.")

# ---------------------------------------------------------
# AI CHATBOT: ORCHESTRATION VIEW
# ---------------------------------------------------------
class HospitalChatbotView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_message = request.data.get('message')
        history = request.data.get('history', [])

        if user_message == "LOCUST_MOCK_TEST":
            # Query the database to simulate real API workload
            doctors = Doctor.objects.filter(active=True)[:3] 
            serializer = DoctorSerializer(doctors, many=True, context={'request': request})
            
            return Response({
                "type": "doctor_list",
                "text": "This is a simulated response for load testing.",
                "doctors": serializer.data,
                "actions": []
            })

        if not user_message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            return Response({"error": "LLM configuration missing."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        history_text = "\n".join([f"{m.get('from', 'user')}: {m.get('text', '')}" for m in history if m.get('text')])

        llm = ChatGoogleGenerativeAI(model="gemini-3.1-flash-lite", temperature=0, api_key=api_key)
        structured_llm = llm.with_structured_output(ChatbotIntent)

        prompt = PromptTemplate.from_template("""
        You are the routing brain for Mallika Hospital's chatbot.
        Analyze the conversation history and the user's message to map it to an intent and department.

        Recent Conversation History:
        {history}

        Latest User Message: {message}

        EXAMPLES:
        - "I need a pediatrician for my child" -> intent: "find_doctor", department: "PAEDIATRICIAN"
        - "My skin has a rash" -> intent: "find_doctor", department: "DERMATOLOGIST"
        - "What specialities do you have?" -> intent: "list_specialities", department: ""

        Do not provide medical advice. Do not converse.
        """)

        def default_actions():
            return [
                {"label": "📞 Call Reception", "type": "call", "value": "+91 9082097421"},
                {"label": "🔍 View All Doctors", "type": "link", "value": "/find-doctor"},
                {"label": "📅 Book Appointment", "type": "link", "value": "/contact"}
            ]

        try:
            chain = prompt | structured_llm
            result = chain.invoke({"message": user_message, "history": history_text})

            # 1. Invalid
            if result.intent == "invalid":
                return Response({
                    "type": "text",
                    "text": "I am the Mallika Hospital virtual assistant. I can help you find specialists, check OPD timings, or book an appointment.",
                    "actions": default_actions()
                })
            
           # 2. List Specialities (Dynamic Department Chips)
            elif result.intent == "list_specialities":
                # Try to get departments from cache first
                departments = cache.get('all_departments')
                
                if not departments:
                    # If not in cache, hit the DB and cache it for 24 hours (86400 seconds)
                    departments = list(Department.objects.all().order_by('name'))
                    cache.set('all_departments', departments, 86400)
                
                # Turn each department into a clickable action chip
                dept_actions = [
                    {
                        "label": dept.name.title(), 
                        "type": "chat", 
                        "value": f"Show doctors for {dept.name}"
                    }
                    for dept in departments
                ]
                
                # Append a call option at the end
                dept_actions.append({"label": "📞 Call Reception", "type": "call", "value": "02226798585"})

                return Response({
                    "type": "text",
                    "text": "Here are all our medical specialities at Mallika Hospital. Tap any speciality below to view our consultants:",
                    "actions": dept_actions
                })

            # 3. Contact Info
            elif result.intent == "contact_info":
                return Response({
                    "type": "text",
                    "text": "You can reach Mallika Hospital 24/7 at +91 9082097421 or 022 26798585. We are located in Sharma Estate, Jogeshwari West, Mumbai.",
                    "actions": [
                        {"label": "📞 Call Now", "type": "call", "value": "+91 9082097421"},
                        {"label": "📅 Book Appointment", "type": "link", "value": "/contact"}
                    ]
                })

            # 4. Doctor Search (With Flexible Search & Reassuring Copy)
            elif result.intent == "find_doctor" and result.department:
                dept_search = result.department.strip()
                
                # Suffix fallback: if 'pediatr' is in query, match 'PAEDIATRICIAN'
                root_search = dept_search[:6] if len(dept_search) >= 6 else dept_search

                doctors = Doctor.objects.filter(
                    Q(active=True) & (
                        Q(department__name__icontains=dept_search) |
                        Q(department__name__icontains=root_search) |
                        Q(name__icontains=dept_search) |
                        Q(degrees__icontains=dept_search)
                    )
                ).select_related('department').order_by('display_order')

                if doctors.exists():
                    serializer = DoctorSerializer(doctors, many=True, context={'request': request})
                    doc_count = len(serializer.data)

                    # Dynamic messaging based on doctor count
                    if doc_count == 1:
                        heading = f"Here is our top specialist for this department. We also have additional experienced consultants on-call at Mallika Hospital."
                    else:
                        heading = f"Here are our leading specialists for this department. You can explore our full medical team below."

                    full_text = f"{heading}\n\n*Please note: Consultations require booking at least 2 days in advance.*"

                    return Response({
                        "type": "doctor_list",
                        "text": full_text,
                        "doctors": serializer.data,
                        "actions": [
                            {"label": "📅 Book Appointment", "type": "link", "value": "/contact"},
                            {"label": "🔍 View All Doctors", "type": "link", "value": "/find-doctor"}
                        ]
                    })
                else:
                    return Response({
                        "type": "text",
                        "text": f"We have specialists available for this department at Mallika Hospital! Please call our reception or browse our full directory to schedule your visit.",
                        "actions": default_actions()
                    })

            # 5. Fallback
            else:
                return Response({
                    "type": "text",
                    "text": "Could you please provide a few more details about the doctor or medical service you need?",
                    "actions": default_actions()
                })

        except Exception as e:
            print(f"LLM Error: {e}")
            return Response({
                "type": "text",
                "text": "I'm having trouble connecting right now. Please call us for immediate assistance.",
                "actions": [{"label": "📞 Call Reception", "type": "call", "value": "+91 9082097421"}]
            })

# --- Stats Views (PUBLIC) ---
@api_view(['GET'])
@permission_classes([AllowAny])
def department_count(request):
    count = Department.objects.count()
    return Response({"total_departments": count})

@api_view(['GET'])
@permission_classes([AllowAny])
def total_doctors(request):
    count = Doctor.objects.count()
    return Response({'total_doctors': count})

@api_view(['GET'])
@permission_classes([AllowAny])
def total_appointments(request):
    count = Appointment.objects.count()
    return Response({'total_appointments': count})

# --- Department Views ---
class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        return Department.objects.all()

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]
        return [IsAuthenticated()]

class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

# --- Doctor Views ---
class DoctorListCreateView(generics.ListCreateAPIView):
    serializer_class = DoctorSerializer
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        # ✅ Cleaned up: No more hardcoded case annotations. 
        # Sorts by department name (globally), then applies the target custom sort order within that department.
        queryset = Doctor.objects.select_related('department').order_by(
            'department__name',
            'display_order',
            'name'
        )

        dept_id = self.request.query_params.get('department')
        if dept_id:
            queryset = queryset.filter(department_id=dept_id)

        return queryset

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]
        return [IsAuthenticated()]

class DoctorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [TokenAuthentication]
    lookup_field = 'slug'

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

# --- Appointment Views ---
class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all().order_by('-date', '-time')
    serializer_class = AppointmentSerializer

    def get_permissions(self):
        if self.request.method in ["GET", "POST"]:
            return [AllowAny()]
        return [IsAuthenticated()]

class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

def db_check(request):
    return JsonResponse(settings.DATABASES)

# ✅ --- NEW: Dynamic Sitemap Generator (Zero-Touch SEO) ---
class DynamicSitemapView(View):
    """
    Generates a real-time sitemap.xml.
    When a doctor is added to the database, they instantly appear here.
    """
    def get(self, request, *args, **kwargs):
        # The base URL of your React Frontend on GoDaddy
        domain = "https://mallikahospital.co.in" 
        
        response = HttpResponse(content_type='application/xml')
        xml = SimplerXMLGenerator(response, encoding='utf-8')
        xml.startDocument()
        xml.startElement('urlset', {
            'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9'
        })
        
        # 1. Add Static Pages (manually defined main routes)
        static_pages = ['/', '/about-us', '/contact', '/testimonial', '/find-doctor']
        for page in static_pages:
            xml.startElement('url', {})
            xml.startElement('loc', {})
            xml.characters(f"{domain}{page}")
            xml.endElement('loc')
            xml.startElement('changefreq', {})
            xml.characters('daily')
            xml.endElement('changefreq')
            xml.startElement('priority', {})
            xml.characters('0.8')
            xml.endElement('priority')
            xml.endElement('url')
            
        # 2. AUTOMATICALLY Add Active Doctor Profile Pages
        # Fetches live data; immediate update on dashboard save
        doctors = Doctor.objects.filter(active=True)
        for doctor in doctors:
            xml.startElement('url', {})
            xml.startElement('loc', {})
            # Maps frontend URL structure to live doctor slug
            xml.characters(f"{domain}/doctor-profile/{doctor.slug}")
            xml.endElement('loc')
            xml.startElement('changefreq', {})
            xml.characters('weekly')
            xml.endElement('changefreq')
            xml.startElement('priority', {})
            xml.characters('0.9') # Priority hint for search engines
            xml.endElement('priority')
            xml.endElement('url')
            
        xml.endElement('urlset')
        xml.endDocument()
        return response