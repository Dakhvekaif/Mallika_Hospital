from django.urls import path
from .views import (
    DepartmentListCreateView, 
    DepartmentDetailView, 
    DoctorListCreateView, # <-- ADD THIS (For List & Create)
    DoctorDetailView,     # <-- ADD THIS (For Update & Delete)
    AppointmentListCreateView, # <-- Update this
    AppointmentDetailView      # <-- Update this
)
from . import views

urlpatterns = [
    # --- Department URLs ---
    path('departments/', DepartmentListCreateView.as_view(), name='department-list'),
    path('departments/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),

    # --- Doctor URLs (UPDATED) ---
    # 1. List all doctors OR Add a new doctor (GET, POST)
    path('doctors/', DoctorListCreateView.as_view(), name='doctor-list'),
    
    # 2. Edit or Delete a specific doctor (PUT, DELETE)
    # The <int:pk> is required to find the specific ID
    path('doctors/<int:pk>/', DoctorDetailView.as_view(), name='doctor-detail'),

    # --- APPOINTMENTS (UPDATED) ---
    # 1. List & Create
    path('appointments/', AppointmentListCreateView.as_view(), name='appointment-list'),
    
    # 2. Detail, Update, Delete (Allows deleting by ID)
    path('appointments/<int:pk>/', AppointmentDetailView.as_view(), name='appointment-detail'),
    
    # --- Stats URLs ---
    path('department-count/', views.department_count, name='department-count'),
    path('total-doctors/', views.total_doctors, name='total-doctors'),
    path('total-appointments/', views.total_appointments, name='total-appointments'),
]