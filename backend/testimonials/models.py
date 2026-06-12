from django.db import models

class Testimonial(models.Model):
    MEDIA_TYPE_CHOICES = [
        ('image', 'Image Quote'),
        ('video', 'YouTube Video'),
    ]

    patient_name = models.CharField(max_length=150)
    department = models.CharField(max_length=100, help_text="e.g., Cardiology, Oncology")
    testimonial_type = models.CharField(max_length=10, choices=MEDIA_TYPE_CHOICES, default='image')
    review_text = models.TextField(blank=True, null=True, help_text="Written review content")
    
    # 👇 Dual-Field Strategy
    image_file = models.ImageField(upload_to='testimonials/', blank=True, null=True, help_text="Upload a photo if type is Image Quote")
    video_url = models.URLField(max_length=500, blank=True, null=True, help_text="Paste YouTube link if type is YouTube Video")
    
    display_order = models.IntegerField(default=100)
    is_visible = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', '-created_at']

    def __str__(self):
        return f"{self.patient_name} - {self.department}"