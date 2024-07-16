# Description: This file contains the URL patterns for the API app.

from django.urls import path
from . import views
from rest_framework import permissions
from drf_yasg.views import get_schema_view

from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Django Sample Application API",
        default_version='v1',
        description="Welcome to the Django Sample Application API documentation",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path("user/register/", views.CreateUserView.as_view(), name="register"),
    path("user/login/", views.LoginUserView.as_view(), name="login"),
    path('profile/', views.ProfileDetailView.as_view(), name='profile'),
    path('countries/', views.CountryView.as_view(), name='countries'),
    path('profile/tasks/', views.TaskView.as_view(), name='tasks'),
   ]
