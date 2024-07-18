from django.db import models
from django.contrib.auth.models import AbstractUser


print("Loading User model...")

class User(AbstractUser):
    username = models.CharField(max_length=200)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
