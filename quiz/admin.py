from django.contrib import admin
from .models import Quiz, Question, Answer, QuizTaker, UsersAnswer,Goal

admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(UsersAnswer)
admin.site.register(QuizTaker)
admin.site.register(Goal)