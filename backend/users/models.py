from django.contrib.auth.models import AbstractUser

from django.db import models

class User(AbstractUser):
    telefone = models.CharField(max_length=40)

    def __str__(self):
        return self.username
    
    