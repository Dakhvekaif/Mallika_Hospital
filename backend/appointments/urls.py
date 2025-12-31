from django.urls import path
# Import the NEW view classes we created
from .views import (
    DepartmentListCreateView, 
    DepartmentDetailView, 
    DoctorListView, 
    AppointmentCreateView, 
    AppointmentListView
)
from . import views

urlpatterns = [
    # --- Department URLs ---
    # 1. For GET (List) and POST (Add)
    path('departments/', DepartmentListCreateView.as_view(), name='department-list'),
    
    # 2. For PUT (Update) and DELETE (Remove) - THIS FIXES THE 405 ERROR
    # The <int:pk> allows the frontend to target a specific ID (e.g., /departments/5/)
    path('departments/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),

    # --- Doctor & Appointment URLs ---
    path('doctors/', DoctorListView.as_view()),
    path('appointments/', AppointmentCreateView.as_view()),
    
    # --- Stats URLs ---
    path('department-count/', views.department_count, name='department-count'),
    path('total-doctors/', views.total_doctors, name='total-doctors'),
    path('total-appointments/', views.total_appointments, name='total-appointments'),
    
    path('appointments-list/', AppointmentListView.as_view(), name='appointment-list'),
]