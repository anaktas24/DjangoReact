# Description: This file contains the URL patterns for the API app.

from django.urls import path
from . import views


urlpatterns = [
    path("user/register/", views.CreateUserView.as_view(), name="register"),
    path('profile/<int:pk>/', views.ProfileDetailView.as_view(), name='profile'),
]
