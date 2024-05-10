from django.db import models
from accounts.models import User
# from django.contrib.gis.db import models


TASK_TYPES = (
    ('connection', 'connection'),
    ('problem', 'problem'),
)

status_task = (
    ("inprogress", "inprogress"),
    ("started", "started"),
    ("completed", "completed"),
)

class Status(models.Model):
    status = models.CharField(max_length=100, choices=status_task)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.status


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    task_type = models.CharField(max_length=100, choices=TASK_TYPES)
    description = models.TextField()
    registration_number = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=100)
    photo_ID = models.ImageField(upload_to='photo_id/')
    location = models.CharField(max_length=100)  
    status = models.ForeignKey(Status, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.description
    
    def is_service(self):
        return hasattr(self, 'internet') and hasattr(self, 'tv') and hasattr(self, 'voice')

    def get_service(self):
        services = []
        if hasattr(self, 'internet'):
            services.append('Internet')
        if hasattr(self, 'tv'):
            services.append('TV')
        if hasattr(self, 'voice'):
            services.append('Voice')
        return services
    


class Internet(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE, related_name='internet')
    photo_modem = models.ImageField(upload_to='internet/')
    modem_SN = models.CharField(max_length=100)
    optical_cable = models.CharField(max_length=100)
    fastconnector = models.CharField(max_length=100)
    siqnal = models.CharField(max_length=100)

    def __str__(self):
        return self.task


class TV(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE, related_name='tv')
    photo_modem = models.ImageField(upload_to='tv/')
    modem_SN = models.CharField(max_length=100)
    rg6_cable = models.CharField(max_length=100)
    f_connector = models.CharField(max_length=100)
    splitter = models.CharField(max_length=100)

    def __str__(self):
        return self.task

class Voice(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE, related_name='voice')
    photo_modem = models.ImageField(upload_to='voice/')
    modem_SN = models.CharField(max_length=100)
    home_number = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.task


# plumber tasks

class PlumberTask(models.Model):
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    equipment = models.CharField(max_length=200)
    brand = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    count =  models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return self.equipment
    

# class TaskDetails(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     status = models.CharField(max_length=100, choices=status_task)
    # map = models.PointField(help_text="Use map widget for point the house location")