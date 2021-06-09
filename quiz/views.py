from quiz.models import Answer, Question, Quiz, QuizTaker, UsersAnswer, Goal
from quiz.serializers import MyQuizListSerializer, QuizDetailSerializer, QuizListSerializer, UsersAnswerSerializer, GoalSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions, status
from rest_framework.response import Response
# Create your views here.
from datetime import datetime,date,timedelta
from django.forms.models import model_to_dict

import logging
import re
from tika import parser  
from django.core.files.storage import default_storage
import numpy as np

from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from time import sleep

index = never_cache(TemplateView.as_view(template_name='index.html'))


# Get an instance of a logger
logger = logging.getLogger(__name__)

def levenshtein(s, t):

    # Initialize matrix of zeros
    rows = len(s)+1
    cols = len(t)+1
    distance = np.zeros((rows,cols),dtype = int)

    # Populate matrix of zeros with the indeces of each character of both strings
    for i in range(1, rows):
        for k in range(1,cols):
            distance[i][0] = i
            distance[0][k] = k

    # Iterate over the matrix to compute the cost of deletions,insertions and/or substitutions    
    for col in range(1, cols):
        for row in range(1, rows):
            if s[row-1] == t[col-1]:
                cost = 0 # If the characters are the same in the two strings in a given position [i,j] then the cost is 0
            else:
                # In order to align the results with those of the Python Levenshtein package, if we choose to calculate the ratio
                # the cost of a substitution is 2. If we calculate just distance, then the cost of a substitution is 1.
                if ratio_calc == True:
                    cost = 2
                else:
                    cost = 1
            distance[row][col] = min(distance[row-1][col] + 1,      # Cost of deletions
                                 distance[row][col-1] + 1,          # Cost of insertions
                                 distance[row-1][col-1] + cost)     # Cost of substitutions
    # Computation of the Levenshtein Distance Ratio
    Ratio = ((len(s)+len(t)) - distance[row][col]) / (len(s)+len(t))
    return Ratio

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
		answer = None
		answer = Answer.objects.filter(id__in=answer_id)

		if quiztaker.completed:
			return Response({
				"message": "This quiz is already complete. you can't answer any more questions"},
				status=status.HTTP_412_PRECONDITION_FAILED
			)
		obj,created=UsersAnswer.objects.get_or_create(quiz_taker=quiztaker, question=question)
		obj.answer.set(answer)
		obj.save()

		return Response(self.get_serializer(obj).data)
class SubmitQuizAPI(generics.GenericAPIView):
	serializer_class = QuizDetailSerializer
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
			answer = Answer.objects.filter(id__in=answer_id)
			obj,created=UsersAnswer.objects.get_or_create(quiz_taker=quiztaker,question=question)
			obj.answer.set(answer)
			obj.save()

		quiztaker.completed = True
		correct_answers = 0
		
		for users_answer in UsersAnswer.objects.filter(quiz_taker=quiztaker):
			try:
				answer = Answer.objects.filter(question=users_answer.question, is_correct=True)

				if set(users_answer.answer.all()) == set(answer):
					correct_answers += 1
					users_answer.message='Correct. Your answer was "'+' '.join([str(x.label)+"," for x in answer])+'"' 
				else:
					if len(users_answer.answer.all())>0:
						users_answer.message='Incorrect. The correct answer was "'+' '.join([str(x.label)+"," for x in answer])+'" while you answered "'+' '.join([str(x.label)+"," for x in users_answer.answer.all()])+'"'
					else:
						users_answer.message='Unanswered'

				users_answer.save()
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
		logger.error(data)
		quiz = Quiz.objects.create(name=data[slicer(data,"docx"):data.index("1)")]+"- Sample")
		quiz.save()
		data=data[data.index("1)"):]

		blocks=re.split(r'[ ](?=[0-9]+\))', data)
		
		question_num = int(len(blocks)/2)
		for i,elem in enumerate(blocks[:question_num]):
			if("ANSWER KEY" in elem):
				elem=elem[:elem.index("ANSWER KEY")]
			question = elem[:elem.index("A)")]
			
			q=Question.objects.create(label=question,quiz=quiz,order=int(question[:question.index(")")]))
			q.save()
			letters = ["A","B","C","D"]
			for index,char in enumerate(letters):
				label=""
				if index==len(letters)-1:
					label=elem[elem.index(char+")"):]
				else:
					label=elem[elem.index(char+")"):elem.index(letters[index+1]+")")]
				Answer.objects.create(question=q,label=label,is_correct=blocks[question_num+i].find(char)>-1)

		return Response(QuizListSerializer(quiz).data)
def slicer(my_str,sub):
   index=my_str.find(sub)
   if index !=-1 :
         return index+len(sub)
   else :
         return 0
def getStepLength(num,length):
	if(length<num):
		return length
	else:
		return num
class CreatePlan(generics.CreateAPIView):
	permission_classes = [
		permissions.IsAuthenticated
	]

	def post(self, request, *args, **kwargs):
		quizzes = Quiz.objects.filter(name__contains=request.data['category']).order_by("?")
		date =  datetime.strptime(request.data['testDate'], '%Y-%m-%d').date()
		today = date.today()
		between = (date-today).days
		step = int(between/quizzes.count())
		milestones=[]
		for i,quiz in enumerate(quizzes):
			
			milestones.append(GoalSerializer(Goal.objects.create(date=today+timedelta(i*step), quiz=quiz, user=request.user)).data)
		return Response(milestones)

class GetPlan(generics.RetrieveAPIView):
	permission_classes = [
		permissions.IsAuthenticated
	]

	def get(self, request, *args, **kwargs):
		goals = Goal.objects.filter(user=request.user)
		serializer = GoalSerializer(goals, many=True)
		return Response(serializer.data)

class RetakeQuiz(generics.GenericAPIView):
	permission_classes = [
		permissions.IsAuthenticated
	]
	serializer_class = QuizDetailSerializer

	def post(self, request, *args, **kwargs):
		taker = QuizTaker.objects.get(user=request.user,quiz=kwargs['id'])
		UsersAnswer.objects.filter(quiz_taker=taker).delete()
		taker.completed=False
		taker.save()
		serializer = self.get_serializer(taker.quiz)
		return Response({'quiz': serializer.data})

