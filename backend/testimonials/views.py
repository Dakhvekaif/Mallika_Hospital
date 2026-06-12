from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer  # 👈 Fixed the typo here!

    def get_permissions(self):
        """
        Allows public access for viewing, but requires login for modifications.
        """
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_queryset(self):
        """
        Filters out invisible entries for public users, but shows everything to admins.
        """
        if self.request.user and self.request.user.is_authenticated:
            return Testimonial.objects.all()
        return Testimonial.objects.filter(is_visible=True)