from rest_framework import generics
from .models import Department, Doctor, Appointment
from .serializers import DepartmentSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.http import JsonResponse
from django.conf import settings

# ✅ --- New Imports Added for Sitemap Functionality ---
from django.http import HttpResponse
from django.utils.xmlutils import SimplerXMLGenerator
from django.views import View

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