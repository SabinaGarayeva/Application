from django.contrib import admin
from .models import Task, Internet, Voice, TV

admin.site.register(Task)
admin.site.register(Internet)
admin.site.register(Voice)
admin.site.register(TV)