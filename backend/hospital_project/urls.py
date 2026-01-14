from django.contrib import admin
from django.urls import path, include
from django.conf import settings    
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token
from appointments.views import db_check

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('appointments.urls')),
    path('api/db-check/', db_check),
    # path('api-token-auth/', obtain_auth_token),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
