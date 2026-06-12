from django.db import models
from django.utils.text import slugify

class Department(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=120, unique=True, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=150, unique=True, blank=True, null=True)
    degrees = models.CharField(max_length=200, blank=True, help_text="e.g., MBBS, MD - Obstetrics")
    experience_years = models.IntegerField(null=True, blank=True)
    mmc_registration = models.CharField(max_length=50, blank=True)
    photo = models.ImageField(upload_to='doctors/')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    available_days = models.CharField(max_length=100)
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    active = models.BooleanField(default=True)
    
    # ✅ NEW FIELD: Lower numbers appear first (1, 2, 3). Default is 100 so unprioritized doctors sit at the bottom.
    display_order = models.IntegerField(default=100, help_text="Priority sorting: lower numbers come first.")

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = f"{self.name}-{self.department.name}"
            self.slug = slugify(base_slug)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Confirmed', 'Confirmed'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ]

    patient_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT)
    date = models.DateField()
    time = models.TimeField()
    reason = models.TextField(blank=True)
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES, 
        default='Pending'
    )

    def __str__(self):
        return f"{self.patient_name} - {self.status}"





















# from django.db import models

# class Department(models.Model):
#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name

# class Doctor(models.Model):
#     name = models.CharField(max_length=100)
#     photo = models.ImageField(upload_to='doctors/')
#     department = models.ForeignKey(Department, on_delete=models.CASCADE)
#     description = models.TextField(blank=True)
#     available_days = models.CharField(max_length=100)  # Example: "Mon,Wed,Fri"
#     start_time = models.TimeField(null=True, blank=True)
#     end_time = models.TimeField(null=True, blank=True)
#     active = models.BooleanField(default=True)

#     def __str__(self):
#         return self.name

# class Appointment(models.Model):
#     patient_name = models.CharField(max_length=100)
#     phone = models.CharField(max_length=15)
#     department = models.ForeignKey(Department, on_delete=models.PROTECT)
#     doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT)
#     date = models.DateField()
#     time = models.TimeField()
#     reason = models.TextField(blank=True)