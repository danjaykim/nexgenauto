from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

from .models import AutomobileVO, Salesperson, Customer, Sale
from common.json import ModelEncoder


# ==============================================

# Encoders:


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
    ]


# ==============================================

# API views:


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
        )
    else:  # POST
        content = json.loads(request.body)
        new_salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            new_salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )
