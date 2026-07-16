from django.db import models

from users.models import User

from images.models import ImageUpload


class Pedido(models.Model):

    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    imagem = models.ForeignKey(
        ImageUpload,
        on_delete=models.CASCADE,
        related_name="pedidos"
    )

    nome_cliente = models.CharField(max_length=150)

    telefone = models.CharField(max_length=20)

    endereco = models.TextField()

    quantidade = models.IntegerField()

    pagamento = models.CharField(max_length=100)

    criado_em = models.DateTimeField(auto_now_add=True)