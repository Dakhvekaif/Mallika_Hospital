from django.urls import path
from .views import DepartmentListView, DoctorListView, AppointmentCreateView, AppointmentListView
from . import views

urlpatterns = [
    path('departments/', DepartmentListView.as_view()),
    path('doctors/', DoctorListView.as_view()),
    path('appointments/', AppointmentCreateView.as_view()),
    path('department-count/', views.department_count, name='department-count'),
    path('total-doctors/', views.total_doctors, name='total-doctors'),
    path('total-appointments/', views.total_appointments, name='total-appointments'),
    path('appointments-list/', AppointmentListView.as_view(), name='appointment-list'),
]
