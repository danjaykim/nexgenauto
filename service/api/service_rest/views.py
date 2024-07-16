from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import AutomobileVOEncoder, TechnicianEncoder, AppointmentEncoder
from .models import AutomobileVO, Technician, Appointment

# Create your views here.


@require_http_methods(["GET", "POST"])
def api_technician_list(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            tech = Technician.objects.create(**content)
            return JsonResponse(
                tech,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"message": "Could not create the Technician"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "DELETE"])
def api_technician_detail(request, pk):
    if request.method == "GET":
        tech = Technician.objects.get(id=pk)
        return JsonResponse(
            tech,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_appointment_list(request):
    if request.method == "GET":
        appoint = Appointment.objects.all()
        return JsonResponse(
            appoint,
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            tech = Technician.objects.get(employee_id=content["technician"])
            content["technician"] = tech
            appoint = Appointment.objects.create(**content)
            return JsonResponse(
                appoint,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Invalid Technician employee_id"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "DELETE"])
def api_appointment_detail(request, pk):
    if request.method == "GET":
        appoint = Appointment.objects.get(id=pk)
        return JsonResponse(
            appoint,
            AppointmentEncoder,
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
