from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import validate_email


class CustomUserManager(BaseUserManager):

   def email_validator(self, email):
       try:
           validate_email(email)
       except ValidationError:
           raise ValidationError(_("Invalid email address"))

   def create_user(self, first_name,last_name,email,password, **extra_fields):
        if not first_name:
            raise ValueError(_("The first name field must be set"))
        if not last_name:
            raise ValueError(_("The last name field must be set"))

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("The email field must be set"))


        user = self.model(
            first_name=first_name,
            last_name=last_name,
            email=email,
            **extra_fields
            )

        user.set_password(password)
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        user.save()
        return user

   def create_superuser(self, first_name,last_name,email,password, **extra_fields):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))

        if not password:
            raise ValueError(_("Superuser must have a password."))

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("Admin : The email field must be set"))

        user = self.create_user(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password,
            **extra_fields
        )

        user.save()

        return user
