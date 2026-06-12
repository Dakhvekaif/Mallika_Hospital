from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings    
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token
from appointments.views import db_check
from django.views.static import serve
from django.views.generic import TemplateView
from django.http import HttpResponsePermanentRedirect
from appointments.views import DynamicSitemapView

def redirect_numeric_doctor(request, pk):
    from appointments.models import Doctor  
    try:
        doctor = Doctor.objects.get(pk=pk)
        return HttpResponsePermanentRedirect(f'/doctor-profile/{doctor.slug}')
    except Doctor.DoesNotExist:
        return HttpResponsePermanentRedirect('/find-doctor')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sitemap.xml', DynamicSitemapView.as_view(), name='dynamic-sitemap'),
    path('api/', include('appointments.urls')),
    path('api/', include('testimonials.urls')),
    path('api/db-check/', db_check),

    # Redirect old numeric doctor URLs to slug-based ones
    re_path(r'^doctor-profile/(?P<pk>\d+)/?$', redirect_numeric_doctor),

    # This tells Django to serve doctor images directly
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),

    # helps serve favicon and other root files if WhiteNoise misses them
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),

    # Sends everything else to React
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]