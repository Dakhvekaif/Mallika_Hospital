from rest_framework import generics
from .models import Department, Doctor, Appointment
from .serializers import DepartmentSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication


# --- Stats Views (Keep these) ---
@api_view(['GET'])
def department_count(request):
    count = Department.objects.count()
    return Response({"total_departments": count})




@api_view(['GET'])
def total_doctors(request):
    count = Doctor.objects.count()
    return Response({'total_doctors': count})

@api_view(['GET'])
def total_appointments(request):
    count = Appointment.objects.count()
    return Response({'total_appointments': count})

# --- Department Views (Keep these) ---
class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    def get_queryset(self):
        queryset = Doctor.objects.filter(active=True)
        dept_id = self.request.query_params.get('department')
        if dept_id:
            queryset = queryset.filter(department_id=dept_id)
        return queryset

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]  # Public GET access
        return [IsAuthenticated()]  # Auth required for POST

class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]  # or IsAdminUser if only admins should manage


# --- Doctor Views (UPDATED) ---

# 1. List and Create (Handles GET for list, POST for adding)
class DoctorListCreateView(generics.ListCreateAPIView):
    serializer_class = DoctorSerializer
    authentication_classes = [TokenAuthentication]

    # Optional: Keep your filter logic if you want to filter by department in the URL
    def get_queryset(self):
        queryset = Doctor.objects.all(active=True)
        dept_id = self.request.query_params.get('department')
        if dept_id:
            queryset = queryset.filter(department_id=dept_id)
        return queryset

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]
        return [IsAuthenticated()]

# 2. Detail, Update, Delete (Handles PUT and DELETE for specific ID)
class DoctorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

# --- APPOINTMENT VIEWS (UPDATED) ---

# 1. List all and Create new (GET, POST)
class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all().order_by('-date', '-time')
    serializer_class = AppointmentSerializer

# 2. Retrieve, Update, Delete specific ID (GET, PUT, DELETE)
class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer