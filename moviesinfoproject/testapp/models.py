from django.db import models

# Create your models here.
class Movies(models.Model):
    rdate=models.DateField()
    name=models.CharField(max_length=30)
    hero=models.CharField(max_length=30)
    heroien=models.CharField(max_length=30)
    
    
