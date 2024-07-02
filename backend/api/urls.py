# Description: This file contains the URL patterns for the API app.

from django.urls import path
from django.conf.urls import url
from . import views
from rest_framework import permissions
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    path("user/register/", views.CreateUserView.as_view(), name="register"),
    path('profile/<int:pk>/', views.ProfileDetailView.as_view(), name='profile'),
    url(r'^$', schema_view)
   ]
