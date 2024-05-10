from django.contrib import admin
from .models import Task, Internet, Voice, TV, PlumberTask, Status

admin.site.register(Task)
admin.site.register(Internet)
admin.site.register(Voice)
admin.site.register(TV)
admin.site.register(PlumberTask)
admin.site.register(Status)