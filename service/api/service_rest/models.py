from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=100)
    status = models.CharField(max_length=100, default="in progress")
    vin = models.CharField(max_length=17)
    customer = models.CharField(max_length=200)

    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"{self.date_time} {self.customer}"
