from django.db import models

from users.models import User

from .validators import validar_imagem, nome_seguro


class ImageUpload(models.Model):

    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    arquivo = models.ImageField(upload_to="uploads/", validators=[validar_imagem], upload_to = nome_seguro)

    data_upload = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.arquivo.name

