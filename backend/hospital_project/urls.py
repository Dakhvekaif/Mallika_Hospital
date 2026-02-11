from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings    
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token
from appointments.views import db_check
from django.views.static import serve
from django.views.generic import TemplateView





urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('appointments.urls')),
    path('api/db-check/', db_check),

    # --- FIX FOR IMAGES (MEDIA) ---
    # This tells Django to serve doctor images directly
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),

    # --- FIX FOR STATIC FILES ---
    # This helps serve favicon and other root files if WhiteNoise misses them
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),

    # --- THE CATCH-ALL (MUST BE LAST) ---
    # Sends everything else to React
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]