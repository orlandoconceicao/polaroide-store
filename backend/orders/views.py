from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Pedido
from .serializers import PedidoSerializer


class PedidoView(ListCreateAPIView):

    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Pedido.objects.filter(usuario=self.request.user)

    def create(self, request, *args, **kwargs):

        print("DADOS:", request.data)

        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            print("ERROS:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save(usuario=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)