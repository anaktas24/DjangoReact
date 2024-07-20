from django.contrib import admin
from api.models import User, Profile

class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email"]

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ["bio"]
    list_display = ["user", "full_name","bio"]

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
