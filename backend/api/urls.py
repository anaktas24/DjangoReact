from django.urls import path
from . import views




urlpatterns = [
    path("taskcreate/", views.Tasks.as_view(), name="task-list"),
    path("profile/", views.ProfileView.as_view(), name="profile"),
]
