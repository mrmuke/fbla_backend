# Generated by Django 3.1.5 on 2021-01-11 04:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0009_auto_20210110_2155'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='question_type',
            field=models.CharField(default='multiple', max_length=100),
        ),
    ]