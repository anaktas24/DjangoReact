from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save


print("Loading User model...")

class User(AbstractUser):
    username = models.CharField(max_length=200)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.username


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    #image = models.ImageField(default = "default.jpg", upload_to="user_images")
    bio = models.TextField(max_length=300)


    def __str__(self):
        return self.user.full_name


def craete_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
