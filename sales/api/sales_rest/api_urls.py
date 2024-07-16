from django.urls import path
from .api_views import (
    api_list_salespeople,
    api_detail_salesperson,
    api_list_customers,
    api_detail_customer,
)


urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path(
        "salespeople/<int:id>/", api_detail_salesperson, name="api_detail_salesperson"
    ),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:id>/", api_detail_customer, name="api_detail_customer"),
]
