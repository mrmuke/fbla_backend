from django.urls import path
from .views import MyQuizListAPI, QuizListAPI, QuizDetailAPI, SaveUsersAnswer, SubmitQuizAPI, UploadQuiz


urlpatterns = [
	path("quizzes", QuizListAPI.as_view()),
	path("myQuizzes", MyQuizListAPI.as_view()),
	path("<int:id>", QuizDetailAPI.as_view()),
    path("saveAnswer", SaveUsersAnswer.as_view()),
    path("<int:id>/submit", SubmitQuizAPI.as_view()),
    path("upload", UploadQuiz.as_view()),


]