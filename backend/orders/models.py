from django.db import models

from users.models import User


class Pedido(models.Model):

    usuario = models.ForeignKey(User, on_delete = models.CASCADE)

    nome_cliente = models.CharField(max_length=150)

    telefone = models.CharField(max_length=20)

    endereco = models.TextField()

    quantidade = models.IntegerField()

    pagamento = models.CharField(max_length=30, default="Pendente")

    criado_em = models.DateTimeField(auto_now_add=True)