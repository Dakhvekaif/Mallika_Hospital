from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    # The columns displayed in the admin table list view
    list_display = ('patient_name', 'department', 'testimonial_type', 'display_order', 'is_visible', 'created_at')
    
    # Filter sidebar choices on the right
    list_filter = ('testimonial_type', 'is_visible', 'department')
    
    # Search bar parameters
    search_fields = ('patient_name', 'review_text', 'department')
    
    # Allows the admin to change order/visibility directly from the list view without clicking into the item!
    list_editable = ('display_order', 'is_visible')