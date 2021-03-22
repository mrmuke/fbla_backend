import requests
from bs4 import BeautifulSoup
from quiz.models import Quiz,Question,Answer
import random
urls = {'Advertising':'https://quizlet.com/245868991/fbla-advertising-flash-cards/','Securities and Investments':"https://quizlet.com/105790048/fbla-securities-and-investments-flash-cards/","Journalism":"https://quizlet.com/201174187/fbla-journalism-flash-cards/"}
def split(a, n):
    k, m = divmod(len(a), n)
    return (a[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(n))

chunks = 3
for key in urls:
    headers = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0'}
    soup = BeautifulSoup(requests.get(urls[key], headers=headers).content, 'html.parser')
    terms=list(split(soup.select('a.SetPageTerm-wordText'),chunks))
    defs=list(split(soup.select('a.SetPageTerm-definitionText'),chunks))
    
    for index in range(chunks):
    
        quiz = Quiz.objects.create(name=key+" - Vocab " + str(index+1))
        
        for i, (answer,question) in enumerate(zip(terms[index],defs[index] ), 1):
            q=Question.objects.create(label=question.get_text(strip=True, separator='\n'),quiz=quiz,order=i)
            Answer.objects.create(question=q,label=answer.get_text(strip=True, separator='\n'),is_correct=True)
            for j in range(3):
                Answer.objects.create(question=q,label=random.sample(soup.select('a.SetPageTerm-wordText'),1)[0].get_text(strip=True,separator='\n'),is_correct=False)

