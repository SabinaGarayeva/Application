# Generated by Django 5.0.6 on 2024-05-15 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0013_remove_task_task_type_az_remove_task_task_type_en'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='task_type_az',
            field=models.CharField(choices=[('connection', 'connection'), ('problem', 'problem')], max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='task',
            name='task_type_en',
            field=models.CharField(choices=[('connection', 'connection'), ('problem', 'problem')], max_length=100, null=True),
        ),
    ]
