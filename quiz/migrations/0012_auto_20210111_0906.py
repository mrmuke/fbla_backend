# Generated by Django 3.1.5 on 2021-01-11 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0011_auto_20210110_2301'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usersanswer',
            name='answer',
        ),
        migrations.AddField(
            model_name='usersanswer',
            name='answer',
            field=models.ManyToManyField(null=True, to='quiz.Answer'),
        ),
    ]