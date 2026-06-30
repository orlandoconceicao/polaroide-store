from django.db import models

from users.models import User


class ImageUpload(models.Model):

    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    arquivo = models.ImageField(upload_to="uploads/")

    data_upload = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.arquivo.name
