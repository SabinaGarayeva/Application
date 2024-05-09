from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import Group, Permission


USER_TYPE = (
    ("technician", "technician"),
    ("plumber", "plumber"),
    ("office_manager", "office_manager"),
    ("tech_manager", "tech_manager"),
)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    username = models.CharField(max_length=30, unique=True)
    phone = PhoneNumberField()
    user_type = models.CharField(max_length=20, choices=USER_TYPE)
    role = models.CharField(max_length=200)
    region = models.CharField(max_length=200)
    group = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        Group,
        verbose_name=('groups'),
        blank=True,
        related_name='accounts_users',  
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=('user permissions'),
        blank=True,
        related_name='accounts_users',
        related_query_name='user',
    )
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("username", "full_name", "phone", "user_type", "role", "region", "groups")

    def __str__(self):
        return self.full_name

    @property
    def is_technician(self):
        return self.user_type == "technician"

    @property
    def is_plumber(self):
        return self.user_type == "plumber"
    
    @property
    def is_office_manager(self):
        return self.user_type == "office_manager"

    @property
    def is_tech_manager(self):
        return self.user_type == "tech_manager"


class Technician(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='technician')

    def __str__(self):
        return self.user.full_name
    def save(self, *args, **kwargs):
        
        self.user.save()
        super(Technician, self).save(*args, **kwargs)



class Plumber(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='plumber')

    def __str__(self):
        return self.user.full_name
    def save(self, *args, **kwargs):
        
        self.user.save()
        super(Plumber, self).save(*args, **kwargs)

class Office_Manager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='office_manager')

    def __str__(self):
        return self.user.full_name
    def save(self, *args, **kwargs):
        
        self.user.save()
        super(Office_Manager, self).save(*args, **kwargs)

class Tech_Manager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='tech_manager')

    def __str__(self):
        return self.user.full_name
    def save(self, *args, **kwargs):
        
        self.user.save()
        super(Tech_Manager, self).save(*args, **kwargs)