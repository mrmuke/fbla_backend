# Generated by Django 3.1.7 on 2021-03-23 02:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0012_auto_20210111_0906'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersanswer',
            name='answer',
            field=models.ManyToManyField(to='quiz.Answer'),
        ),
    ]
