# Generated by Django 5.0.6 on 2024-05-15 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0004_task_description_az_task_description_en_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='task_type_az',
        ),
        migrations.RemoveField(
            model_name='task',
            name='task_type_en',
        ),
        migrations.AlterField(
            model_name='task',
            name='task_type',
            field=models.CharField(choices=[('en', [('connection', 'Connection'), ('problem', 'Problem')]), ('az', [('connection', 'Qoşulma'), ('problem', 'Problem')])], max_length=100),
        ),
    ]
