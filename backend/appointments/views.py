from rest_framework import generics
from .models import Department, Doctor, Appointment
from .serializers import DepartmentSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

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

# --- Department Views (UPDATED) ---

# 1. List and Create (Handles GET for all and POST for new)
class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

# 2. Detail, Update, and Delete (Handles PUT and DELETE for specific ID)
class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

# --- Doctor Views (Keep these) ---
class DoctorListView(generics.ListAPIView):
    serializer_class = DoctorSerializer

    def get_queryset(self):
        dept_id = self.request.query_params.get('department')
        queryset = Doctor.objects.filter(active=True)
        if dept_id:
            queryset = queryset.filter(department_id=dept_id)
        return queryset

# --- Appointment Views (Keep these) ---
class AppointmentCreateView(generics.CreateAPIView):
    serializer_class = AppointmentSerializer  

class AppointmentListView(generics.ListAPIView):
    queryset = Appointment.objects.all().order_by('-date', '-time')
    serializer_class = AppointmentSerializer