from django.urls import path
from .api_views import api_list_salespeople


urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
]
