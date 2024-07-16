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
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
        "automobile",
        "salesperson",
        "customer",
    ]
    encoders = {
        "automobile": AutomobileVO(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }


# ==============================================

# API views:

# Salespeople:


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


@require_http_methods(["GET", "PUT", "DELETE"])
def api_detail_salesperson(request, id):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        updated_content = json.loads(request.body)
        Salesperson.objects.filter(id=id).update(**updated_content)
        updated_salesperson = Salesperson.objects.get(id=id)
        return JsonResponse(
            updated_salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )
    else:  # DELETE
        count, _ = Salesperson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


# ==============================

# Customers:


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:  # POST
        content = json.loads(request.body)
        new_customer = Customer.objects.create(**content)
        return JsonResponse(
            new_customer,
            encoder=CustomerEncoder,
            safe=False,
        )
