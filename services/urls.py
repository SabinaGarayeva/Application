from django.urls import path
from . import views

urlpatterns = [
    path('create_task/', views.CreateTaskView.as_view(), name='create-task'),
    path('tasks/', views.TaskListView.as_view(), name='tasks'),
    path('task/<int:id>/', views.TaskDetailView.as_view(), name='task-detail'),
    path('status/', views.TaskListAPIView.as_view(), name='filtered_tasks'),
]
