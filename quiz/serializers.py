from quiz.models import Quiz, QuizTaker, Question, Answer, UsersAnswer, Goal
from rest_framework import serializers


class QuizListSerializer(serializers.ModelSerializer):
	questions_count = serializers.SerializerMethodField()
	class Meta:
		model = Quiz
		fields = ["id", "name", "description", "questions_count"]
		read_only_fields = ["questions_count"]

	def get_questions_count(self, obj):
		return obj.question_set.all().count()


class AnswerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Answer
		fields = ["id", "question", "label"]


class QuestionSerializer(serializers.ModelSerializer):
	answer_set = AnswerSerializer(many=True)

	class Meta:
		model = Question
		fields = "__all__"


class UsersAnswerSerializer(serializers.ModelSerializer):
	class Meta:
		model = UsersAnswer
		fields = "__all__"


class MyQuizListSerializer(serializers.ModelSerializer):
	completed = serializers.SerializerMethodField()
	progress = serializers.SerializerMethodField()
	questions_count = serializers.SerializerMethodField()
	score = serializers.SerializerMethodField()

	class Meta:
		model = Quiz
		fields = ["id", "name", "description", "questions_count", "completed", "score", "progress"]
		read_only_fields = ["questions_count", "completed", "progress"]

	def get_completed(self, obj):
		try:
			quiztaker = QuizTaker.objects.get(user=self.context['request'].user, quiz=obj)
			return quiztaker.completed
		except QuizTaker.DoesNotExist:
			return None

	def get_progress(self, obj):
		try:
			quiztaker = QuizTaker.objects.get(user=self.context['request'].user, quiz=obj)
			if quiztaker.completed == False:
				questions_answered = UsersAnswer.objects.filter(quiz_taker=quiztaker, answer__isnull=False).count()
				total_questions = obj.question_set.all().count()
				return int(100*questions_answered / total_questions)
			return None
		except QuizTaker.DoesNotExist:
			return None

	def get_questions_count(self, obj):
		return obj.question_set.all().count()

	def get_score(self, obj):
		try:
			quiztaker = QuizTaker.objects.get(user=self.context['request'].user, quiz=obj)
			if quiztaker.completed == True:
				return quiztaker.score
			return None
		except QuizTaker.DoesNotExist:
			return None

class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)

class QuizTakerSerializer(serializers.ModelSerializer):
	usersanswer_set = UsersAnswerSerializer(many=True)
	user=UserSerializer() 
	class Meta:
		model = QuizTaker
		fields = "__all__"


class QuizDetailSerializer(serializers.ModelSerializer):
	quiztakers_set = serializers.SerializerMethodField()
	all_quiz_takers = serializers.SerializerMethodField()

	question_set = QuestionSerializer(many=True)
	
	class Meta:
		model = Quiz
		fields = "__all__"
	def get_all_quiz_takers(self,obj):
		try:
			quiz_takers= QuizTaker.objects.filter(quiz=obj).order_by('-score')
			serializer = QuizTakerSerializer(quiz_takers,many=True)
			return serializer.data
		except QuizTaker.DoesNotExist:
			return None

	def get_quiztakers_set(self, obj):
		try:
			quiz_taker = QuizTaker.objects.get(user=self.context['request'].user, quiz=obj)
			serializer = QuizTakerSerializer(quiz_taker)
			return serializer.data
		except QuizTaker.DoesNotExist:
			return None

class BasicQuizSerializer(serializers.ModelSerializer):
	class Meta:
		model = Quiz
		fields="__all__"

class GoalSerializer(serializers.ModelSerializer):
	quiz=BasicQuizSerializer()
	class Meta:
		model=Goal
		fields = "__all__"