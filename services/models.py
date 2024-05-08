from django.db import models

TASK_TYPES = (
    ('connection', 'connection'),
    ('problem', 'problem'),
)


class Task(models.Model):
    task_type = models.CharField(max_length=100, choices=TASK_TYPES)
    registration_number = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=100)
    photo_ID = models.ImageField(upload_to='photo_id/')
    location = models.CharField(max_length=100)  

    def __str__(self):
        return self.task_type



class Internet(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE, related_name='internet')
    photo_modem = models.ImageField(upload_to='internet/')
    modem_SN = models.CharField(max_length=100)
    optical_cable = models.CharField(max_length=100)
    fastconnector = models.CharField(max_length=100)
    siqnal = models.CharField(max_length=100)


class TV(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE, related_name='tv')
    photo_modem = models.ImageField(upload_to='tv/')
    modem_SN = models.CharField(max_length=100)
    rg6_cable = models.CharField(max_length=100)
    f_connector = models.CharField(max_length=100)
    splitter = models.CharField(max_length=100)


class Voice(models.Model):
    task = models.OneToOneField(Task, on_delete=models.CASCADE, related_name='voice')
    photo_modem = models.ImageField(upload_to='voice/')
    modem_SN = models.CharField(max_length=100)
    home_number = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

