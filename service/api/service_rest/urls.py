from django.urls import path
from .views import api_technician_list

urlpatterns = [
    path("technicians/", api_technician_list, name="api_technician_list"),
]
