from django.contrib import admin
from .models import ConnectionSurvey, Internet, Voice, TV


admin.site.register(ConnectionSurvey)
admin.site.register(Internet)
admin.site.register(Voice)
admin.site.register(TV)