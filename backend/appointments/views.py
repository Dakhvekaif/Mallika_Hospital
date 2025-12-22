from rest_framework import generics
from .models import Department, Doctor, Appointment
from .serializers import DepartmentSerializer, DoctorSerializer, AppointmentSerializer

class DepartmentListView(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DoctorListView(generics.ListAPIView):
    serializer_class = DoctorSerializer

    def get_queryset(self):
        dept_id = self.request.query_params.get('department')
        queryset = Doctor.objects.filter(active=True)
        if dept_id:
            queryset = queryset.filter(department_id=dept_id)
        return queryset

class AppointmentCreateView(generics.CreateAPIView):
    serializer_class = AppointmentSerializer  
