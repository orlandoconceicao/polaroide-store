from django.urls import path

from .views import PedidoView


urlpatterns = [
    path("orders/", PedidoView.as_view())
]
