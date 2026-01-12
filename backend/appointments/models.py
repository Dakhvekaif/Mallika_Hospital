from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='doctors/')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    available_days = models.CharField(max_length=100)  # Example: "Mon,Wed,Fri"
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    patient_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT)
    date = models.DateField()
    time = models.TimeField()
    reason = models.TextField(blank=True)