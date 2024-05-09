from django.contrib import admin
from .models import User, Technician, Plumber, Office_Manager, Tech_Manager

admin.site.register(User)
admin.site.register(Technician)
admin.site.register(Plumber)
admin.site.register(Office_Manager)
admin.site.register(Tech_Manager)