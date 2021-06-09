release: python manage.py migrate
web: $(gunicorn fbla_quiz_backend.wsgi --log-file -; java $JAVA_OPTS -jar tika-server/target/tika-server-1.13-SNAPSHOT.jar --host=0.0.0.0 --port=$PORT)