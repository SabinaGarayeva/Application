from rest_framework import serializers
from .models import Task, Internet, Voice, TV

class InternetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internet
        fields = '__all__'

class TVSerializer(serializers.ModelSerializer):
    class Meta:
        model = TV
        fields = '__all__'

class VoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voice
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'registration_number', 'note', 'date', 'status', 'contact_number']

class TaskDetailSerializer(serializers.ModelSerializer):
    tv = TVSerializer()
    internet = InternetSerializer()
    voice = VoiceSerializer()

    services = serializers.SerializerMethodField()

    class Meta:
        model = Task
        fields = ['id', 'user', 'task_type', 'description', 'registration_number', 'contact_number', 'photo_ID', 'location', 'note', 'date', 'status', 'services', 'tv', 'voice', 'internet']

    def get_services(self, obj):
        services = []
        if hasattr(obj, 'internet'):
            services.append('Internet')
        if hasattr(obj, 'tv'):
            services.append('TV')
        if hasattr(obj, 'voice'):
            services.append('Voice')
        return services