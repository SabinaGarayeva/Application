from django.db import models

SERVICE_TYPES = (
    ('Internet', 'Internet'),
    ('TV', 'TV'),
    ('Voice', 'Voice'),
)

class ServiceType(models.Model):
    name = models.CharField(max_length=100, choices=SERVICE_TYPES)

    def __str__(self):
        return self.name

class ConnectionSurvey(models.Model):
    registration_number = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=100)
    photo_ID = models.ImageField(upload_to='documents/')
    location = models.CharField(max_length=100)
    service_type = models.ManyToManyField('ServiceType')

class Internet(models.Model):
    service_type = models.CharField(max_length=100, choices=SERVICE_TYPES)
    photo_modem = models.ImageField(upload_to='documents/')
    modem_SN = models.CharField(max_length=100)
    optical_cable = models.CharField(max_length=100)
    fastconnector = models.CharField(max_length=100)
    siqnal = models.CharField(max_length=100)

class TV(models.Model):
    service_type = models.CharField(max_length=100, choices=SERVICE_TYPES)
    photo_modem = models.ImageField(upload_to='documents/')
    modem_SN = models.CharField(max_length=100)
    rg6_cable = models.CharField(max_length=100)
    f_connector = models.CharField(max_length=100)
    splitter = models.CharField(max_length=100)

class Voice(models.Model):
    service_type = models.CharField(max_length=100, choices=SERVICE_TYPES)
    photo_modem = models.ImageField(upload_to='documents/')
    modem_SN = models.CharField(max_length=100)
    home_number = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
