from django.urls import path
from .views import api_technician_list, api_technician_detail, api_appointment_list

urlpatterns = [
    path("technicians/", api_technician_list, name="api_technician_list"),
    path("technicians/<int:pk>/", api_technician_detail, name="api_technician_detail"),
    path("appointments/", api_appointment_list, name="api_appointment_list"),
]
