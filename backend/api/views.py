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


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ProfileDetailView(generics.RetrieveAPIView):
    #permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            profile = Profile.objects.get(user=request.user)
            serializer= ProfileSerializer(profile)
            return Response(serializer.data)
        except Profile.DoesNotExist:
            return Response({"error": "Profile does not exist"}, status=status.HTTP_404_NOT_FOUND)

class CountryView(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [IsAuthenticated]

class TaskView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
