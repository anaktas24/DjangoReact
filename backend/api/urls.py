# Description: This file contains the URL patterns for the API app.

from django.urls import path
from . import views




urlpatterns = [
    path("taskcreate/", views.TaskCreate.as_view(), name="task-list"),
    path("profile/", views.ProfileView.as_view(), name="profile"),
]
