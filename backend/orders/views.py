from rest_framework.generics import ListCreateAPIView

from rest_framework.permissions import IsAuthenticated

from .models import Pedido

from .serializers import PedidoSerializer


class PedidoView(ListCreateAPIView):

    serializer_class = PedidoSerializer

    permission_classes = [IsAuthenticated]


    def get_queryset(self):

        return Pedido.objects.filter(usuario = self.request.user)
    

    def perform_create(self, serializer):
        
        serializer.save(usuario = self.request.user)