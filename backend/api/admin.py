from django.contrib import admin
from api.models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_active', 'is_staff', 'is_superuser']
    list_filter = ['is_active', 'is_staff', 'is_superuser']

admin.site.register(User, UserAdmin)
