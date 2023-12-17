from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Banner(models.Model):
    image=models.ImageField(upload_to='static/image/slider/')


class CardProduct(models.Model):
    title=models.CharField(max_length=50)
    image=models.ImageField(upload_to='static/image/card/')

class AboutUs(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    address=models.CharField(max_length=200)
    phoneno=models.IntegerField()
    facebook=models.CharField(max_length=50)
    instagram=models.CharField(max_length=50)
    body=models.TextField()
    