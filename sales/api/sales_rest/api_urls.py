from django.urls import path
from .api_views import api_list_salespeople, api_detail_salesperson


urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path(
        "salespeople/<int:id>/", api_detail_salesperson, name="api_detail_salesperson"
    ),
]
