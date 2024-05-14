from .models import Task
from .serializers import TaskSerializer, TaskDetailSerializer
from .filters import StatusAndTaskFilter
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from accounts.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class CreateTaskView(generics.CreateAPIView):
    serializer_class = TaskSerializer


class TaskListView(ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDetailView(RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskDetailSerializer
    lookup_field = 'id'


class TaskListAPIView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filterset_class = StatusAndTaskFilter
    filter_backends = (DjangoFilterBackend,)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        connection_completed_count = queryset.filter(task_type='connection', status='completed').count()
        problem_completed_count = queryset.filter(task_type='problem', status='completed').count()
        completed_count = queryset.filter(status='completed').count()

        context = {
            'connection_completed_count': connection_completed_count,
            'problem_completed_count': problem_completed_count,
            'completed_count' : completed_count
        }

        serializer = self.get_serializer(queryset, many=True)
        response_data = serializer.data
        response_data.append(context)

        return Response(response_data, status=status.HTTP_200_OK)
    

class UserTaskListView(ListAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(user=user)