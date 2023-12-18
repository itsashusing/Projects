import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','crmproject.settings')
import django
django.setup()
from crmapp.models import Record
from faker import Faker
from random import *
fake=Faker()

state=['Uttar Pradesh','Madhay Pradesh','Himanchal','Telangana','Tamil','Andhra Pradesh','Goa','West Bangal']
city=['Unnao','Abu','Romaniya','Pune','Agra','Ayodhya','Goraghpur','Bhopal','Banglor']
def phonenumbergen():
    d1=randint(6,9)
    num=''+ str(d1)
    for i in range(9):
        num += str(randint(0,9))
    return int(num)

def fakegen(n):
    for i in range(n):
        ffname=fake.name()
        flname=fake.name()
        femail = fake.email()
        fphonenumber = phonenumbergen()
        faddress = fake.address()
        fstate=choice(state)
        fcity=choice(city)




        Record.objects.get_or_create(first_name=ffname,last_name=flname,email=femail,address=faddress,phonenumber=fphonenumber,state=fstate,city=fcity)

n = int(input('Enter number of records:'))
fakegen(n)
print(f'{n} Records inserted successfully')