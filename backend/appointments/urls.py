from django.urls import path
from .views import (
    DepartmentListCreateView, 
    DepartmentDetailView, 
    DoctorListCreateView,
    DoctorDetailView,
    AppointmentListCreateView,
    AppointmentDetailView
)
from . import views
from rest_framework.authtoken.views import obtain_auth_token  # <-- Add this

urlpatterns = [
    # --- Department URLs ---
    path('departments/', DepartmentListCreateView.as_view(), name='department-list'),
    path('departments/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),

    # --- Doctor URLs ---
    path('doctors/', DoctorListCreateView.as_view(), name='doctor-list'),
    path('doctors/<int:pk>/', DoctorDetailView.as_view(), name='doctor-detail'),

    # --- Appointment URLs ---
    path('appointments/', AppointmentListCreateView.as_view(), name='appointment-list'),
    path('appointments/<int:pk>/', AppointmentDetailView.as_view(), name='appointment-detail'),

    # --- Stats URLs ---
    path('department-count/', views.department_count, name='department-count'),
    path('total-doctors/', views.total_doctors, name='total-doctors'),
    path('total-appointments/', views.total_appointments, name='total-appointments'),

    # ✅ Token Login
    path('login/', obtain_auth_token, name='api_token_auth'),  # <-- Add this line
]