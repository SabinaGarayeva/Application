from django.db import models
from accounts.models import Office_Manager


TASK_TYPES = (
    ('connection', 'connection'),
    ('problem', 'problem'),
)


class Task(models.Model):
    Office_Manager = models.ForeignKey(Office_Manager, on_delete=models.CASCADE)
    task_type = models.CharField(max_length=100, choices=TASK_TYPES)
    description = models.TextField()
    registration_number = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=100)
    photo_ID = models.ImageField(upload_to='photo_id/')
    location = models.CharField(max_length=100)  

    def __str__(self):
        return self.description



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
    Office_Manager = models.ForeignKey(Office_Manager, on_delete= models.CASCADE)
    equipment = models.CharField(max_length=200)
    brand = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    count =  models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return self.equipment