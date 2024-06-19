from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from django.contrib.auth import get_user_model
from .models import User, Profile
from .serializers import  UserSerializer, ProfileSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

User = get_user_model()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ProfileDetailView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
