from rest_framework import generics
from .models import Department, Doctor, Appointment
from .serializers import DepartmentSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication


# --- Stats Views (PUBLIC) ---
@api_view(['GET'])
@permission_classes([AllowAny])  # <-- ADD THIS
def department_count(request):
    count = Department.objects.count()
    return Response({"total_departments": count})


@api_view(['GET'])
@permission_classes([AllowAny])  # <-- ADD THIS
def total_doctors(request):
    count = Doctor.objects.count()
    return Response({'total_doctors': count})


@api_view(['GET'])
@permission_classes([AllowAny])  # <-- ADD THIS
def total_appointments(request):
    count = Appointment.objects.count()
    return Response({'total_appointments': count})


# --- Department Views ---
class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        # ✅ FIXED: Return DEPARTMENTS, not Doctors!
        return Department.objects.all()

    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]  # Public GET access
        return [IsAuthenticated()]  # Auth required for POST


class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# --- Doctor Views ---
class DoctorListCreateView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        # ✅ FIXED: Use .filter() or .all(), not .all(active=True)
        queryset = Doctor.objects.all()
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
    permission_classes = [IsAuthenticated]


# --- Appointment Views ---
class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all().order_by('-date', '-time')
    serializer_class = AppointmentSerializer
    # authentication_classes = [TokenAuthentication]

    def get_permissions(self):
        if self.request.method in ["GET", "POST"]:
            return [AllowAny()]  # Anyone can view appointments
        return [IsAuthenticated()]  # Auth required to create


class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]  # Auth required to edit/delete