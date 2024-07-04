from django.shortcuts import render
from django.shortcuts import render, redirect
#from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from rest_framework import generics, status
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from .models import User, Profile, Task, Country
from .serializers import  UserSerializer, ProfileSerializer, TaskSerializer, CountrySerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

User = get_user_model()

class UserRegisterView(generics.CreateAPIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ProfileDetailView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

class CountryView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [IsAuthenticated]

class TaskView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
#@login_required
def tasks_view(request):
    # Check if the user has a profile
    try:
        profile = request.user.profile
    except Profile.DoesNotExist:
        # Redirect to a page where they can create a profile
        return redirect('create-profile')

    # If they have a profile, retrieve their tasks
    tasks = Task.objects.filter(user=request.user)
    return render(request, 'tasks.html', {'tasks': tasks})
