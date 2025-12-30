from rest_framework import generics
from .models import Department, Doctor, Appointment
from .serializers import DepartmentSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

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
