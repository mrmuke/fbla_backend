from quiz.models import Answer, Question, Quiz, QuizTaker, UsersAnswer
from quiz.serializers import MyQuizListSerializer, QuizDetailSerializer, QuizListSerializer, QuizResultSerializer, UsersAnswerSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, status
from rest_framework.response import Response
# Create your views here.
import logging
import re
from tika import parser  
from django.core.files.storage import default_storage
# Get an instance of a logger
logger = logging.getLogger(__name__)
class MyQuizListAPI(generics.ListAPIView):
	permission_classes = [
		permissions.IsAuthenticated
	]
	serializer_class = MyQuizListSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Quiz.objects.filter(quiztaker__user=self.request.user)
		query = self.request.GET.get("q")

		if query:
			queryset = queryset.filter(
				Q(name__icontains=query) |
				Q(description__icontains=query)
			).distinct()

		return queryset


class QuizListAPI(generics.ListAPIView):
	serializer_class = QuizListSerializer
	permission_classes = [
		permissions.IsAuthenticated
	]

	def get_queryset(self, *args, **kwargs):
		queryset = Quiz.objects.exclude(quiztaker__user=self.request.user)
		query = self.request.GET.get("q")

		if query:
			queryset = queryset.filter(
				Q(name__icontains=query) |
				Q(description__icontains=query)
			).distinct()

		return queryset


class QuizDetailAPI(generics.RetrieveAPIView):
	serializer_class = QuizDetailSerializer
	permission_classes = [
		permissions.IsAuthenticated
	]

	def get(self, *args, **kwargs):
		id = self.kwargs["id"]
		quiz = get_object_or_404(Quiz, id=id)
		last_question = None
		obj, created = QuizTaker.objects.get_or_create(user=self.request.user, quiz=quiz)
		if created:
			for question in Question.objects.filter(quiz=quiz):
				UsersAnswer.objects.create(quiz_taker=obj, question=question)
		else:
			last_question = UsersAnswer.objects.filter(quiz_taker=obj, answer__isnull=False)
			if last_question.count() > 0:
				last_question = last_question.last().question.id
			else:
				last_question = None

		return Response({'quiz': self.get_serializer(quiz, context={'request': self.request}).data, 'last_question_id': last_question})


class SaveUsersAnswer(generics.UpdateAPIView):
	serializer_class = UsersAnswerSerializer
	permission_classes = [
		permissions.IsAuthenticated
	]

	def patch(self, request, *args, **kwargs):

		quiztaker_id = request.data['quiztaker']
		question_id = request.data['question']
		answer_id = request.data['answer']
		
		quiztaker = get_object_or_404(QuizTaker, id=quiztaker_id)
		question = get_object_or_404(Question, id=question_id)
		answer = get_object_or_404(Answer, id=answer_id)

		if quiztaker.completed:
			return Response({
				"message": "This quiz is already complete. you can't answer any more questions"},
				status=status.HTTP_412_PRECONDITION_FAILED
			)
		obj=UsersAnswer(quiz_taker=quiztaker,question=question,answer=answer)

		obj.save()

		return Response(self.get_serializer(obj).data)
class SubmitQuizAPI(generics.GenericAPIView):
	serializer_class = QuizResultSerializer
	permission_classes = [
		permissions.IsAuthenticated
	]

	def post(self, request, *args, **kwargs):
		quiztaker_id = request.data['quiztaker']
		question_id = request.data['question']
		answer_id = request.data['answer']
		
		quiztaker = get_object_or_404(QuizTaker, id=quiztaker_id)
		question = get_object_or_404(Question, id=question_id)

		quiz = Quiz.objects.get(id=self.kwargs['id'])

		if quiztaker.completed:
			return Response({
				"message": "This quiz is already complete. You can't submit again"},
				status=status.HTTP_412_PRECONDITION_FAILED
			)

		if answer_id is not None:
			answer = get_object_or_404(Answer, id=answer_id)
			obj=UsersAnswer(quiz_taker=quiztaker,question=question,answer=answer)
			obj.save()

		quiztaker.completed = True
		correct_answers = 0

		for users_answer in UsersAnswer.objects.filter(quiz_taker=quiztaker):
			try:
				answer = Answer.objects.get(question=users_answer.question, is_correct=True)
				if users_answer.answer == answer:
					correct_answers += 1
			except Answer.DoesNotExist:
				logger.error(users_answer.question)

		quiztaker.score = int(correct_answers / quiztaker.quiz.question_set.count() * 100)
		quiztaker.save()

		return Response(self.get_serializer(quiz).data)

class UploadQuiz(generics.GenericAPIView):
	permission_classes = [
		permissions.IsAuthenticated
	]

	def post(self, request, *args, **kwargs):
		file = request.data['myFile']
		file_name = default_storage.save(file.name, file)
		parsed_pdf = parser.from_file(file_name) 
		data=re.sub('[^a-zA-Z0-9-_*. ?:()!]', '', parsed_pdf['content'])
		
		quiz = Quiz.objects.create(name=data[:data.index("1")])
		answers=re.findall('\d{1,2}\)\s[A-Z]', data)
		logger.error(answers)
		questions=re.findall('\d{1,2}\)\s[^)]+',data)
	
		questions=[x[:-1]for x in questions]
		a = re.findall('A\)[^\)]+',data)
		a = [x[:-1] for x in a]
		b=re.findall('B\)[^\)]+',data)
		b = [x[:-1] for x in b]
		c=re.findall('C\)[^\)]+',data)
		c = [x[:-1] for x in c]
		d=re.findall('D\)[^\)]+',data)
		d = [x[:-1][:x.find("ANSWER")] for x in d]

		logger.error(d)

		for index,question in enumerate(questions):
			q=Question.objects.create(label=question,quiz=quiz,order=int(re.sub('[^0-9]','',question)))
			logger.error(answers[index])
			Answer.objects.create(question=q,label=a[index],is_correct=answers[index].find("A")>-1)
			Answer.objects.create(question=q,label=b[index],is_correct=answers[index].find("B")>-1)
			Answer.objects.create(question=q,label=c[index],is_correct=answers[index].find("C")>-1)
			Answer.objects.create(question=q,label=d[index],is_correct=answers[index].find("D")>-1)

		default_storage.delete(file_name)
		return Response({"text":data})
  
