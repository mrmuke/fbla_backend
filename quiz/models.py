from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save, pre_save
from django.db.models.signals import pre_save


class Quiz(models.Model):
	name = models.CharField(max_length=100, unique=True)
	description = models.CharField(max_length=70)

	def __str__(self):
		return self.name


class Question(models.Model):
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
	label = models.CharField(max_length=300)
	order = models.IntegerField(default=0)
	question_type = models.CharField(max_length=100,default="multiple")
	def __str__(self):
		return self.label


class Answer(models.Model):
	question = models.ForeignKey(Question, on_delete=models.CASCADE)
	label = models.CharField(max_length=100)
	is_correct = models.BooleanField(default=False)

	def __str__(self):
		return self.label


class QuizTaker(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
	score = models.IntegerField(default=0)
	completed = models.BooleanField(default=False)
	def __str__(self):
		return self.user.email

class Goal(models.Model):
	date=models.DateField()
	quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	

class UsersAnswer(models.Model):
	quiz_taker = models.ForeignKey(QuizTaker, on_delete=models.CASCADE)
	question = models.ForeignKey(Question, on_delete=models.CASCADE)
	answer = models.ManyToManyField(Answer)
	message = models.CharField(max_length=200, default="")
	def __str__(self):
		return self.question.label

