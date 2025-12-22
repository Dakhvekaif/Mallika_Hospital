from django.urls import path
from .views import DepartmentListView, DoctorListView, AppointmentCreateView

urlpatterns = [
    path('departments/', DepartmentListView.as_view()),
    path('doctors/', DoctorListView.as_view()),
    path('appointments/', AppointmentCreateView.as_view()),
]
