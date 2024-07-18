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
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }


# ==============================================

# API views:

# Salespeople:


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    try:
        salespeople = Salesperson.objects.all()
    except Salesperson.DoesNotExist:
        return JsonResponse(
            {"message": "Requested list of salespeople does not exist"},
            status=404,
        )

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
    try:
        salesperson = Salesperson.objects.get(id=id)
    except Salesperson.DoesNotExist:
        return JsonResponse(
            {"message": "Requested Salesperson does not exist"},
            status=404,
        )

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
    try:
        customers = Customer.objects.all()
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "Requested list of customers does not exist"},
            status=404,
        )

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


@require_http_methods(["GET", "PUT", "DELETE"])
def api_detail_customer(request, id):
    try:
        customer = Customer.objects.get(id=id)
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "Requested Customer does not exist"},
            status=404,
        )

    if request.method == "GET":
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        updated_content = json.loads(request.body)
        Customer.objects.filter(id=id).update(**updated_content)
        updated_customer = Customer.objects.get(id=id)
        return JsonResponse(
            updated_customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:  # DELETE
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


# ==============================

# Sales:


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else:  # POST
        content = json.loads(request.body)

        try:
            content["automobile"] = AutomobileVO.objects.get(vin=content["automobile"])
            content["salesperson"] = Salesperson.objects.get(id=content["salesperson"])
            content["customer"] = Customer.objects.get(id=content["customer"])
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"message": "Invalid VIN number"}, status=400)
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Invalid Salesperson ID"}, status=400)
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid Customer ID"}, status=400)

        new_sale = Sale.objects.create(**content)
        # return JsonResponse("created", safe=False)
        return JsonResponse(
            {"sale": new_sale},
            encoder=SaleEncoder,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_detail_sale(request, id):
    try:
        sale = Sale.objects.get(id=id)
    except Sale.DoesNotExist:
        return JsonResponse({"message": "Requested Sale does not exist"}, status=404)

    if request.method == "GET":
        sale = Sale.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        updated_content = json.loads(request.body)

        try:
            if "vin" in updated_content:
                updated_content["automobile"] = AutomobileVO.objects.get(
                    vin=updated_content["automobile"]
                )
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"message": "Invalid VIN number"}, status=400)

        Sale.objects.filter(id=id).update(**updated_content)
        updated_sale = Sale.objects.get(id=id)
        return JsonResponse(
            updated_sale,
            encoder=SaleEncoder,
            safe=False,
        )
    else:  # DELETE
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
