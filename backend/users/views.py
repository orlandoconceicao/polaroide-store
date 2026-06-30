from rest_framework.generics import CreateAPIView

from .serializers import RegisterSerializers


class RegisterView(CreateAPIView):

    serializer_class=RegisterSerializers