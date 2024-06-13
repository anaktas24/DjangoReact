from django.contrib import admin
from api.models import User,Profile,Task

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_active', 'is_staff', 'is_superuser']
    list_filter = ['is_active', 'is_staff', 'is_superuser']

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'fullname']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
