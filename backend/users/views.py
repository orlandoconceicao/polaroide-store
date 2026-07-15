from django.utils.decorators import method_decorator

from django_ratelimit.decorators import ratelimit

from rest_framework.generics import CreateAPIView

from rest_framework.permissions import AllowAny

import logging

from .serializers import RegisterSerializers

logger = logging.getLogger("security")


@method_decorator(
    ratelimit(key="ip", rate="1000/m", method="POST", block=True),
    name="dispatch",
)
@method_decorator(
    ratelimit(key="post:email", rate="1000/m", method="POST", block=True),
    name="dispatch",
)
class RegisterView(CreateAPIView):

    serializer_class = RegisterSerializers
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request, *args, **kwargs):

        logger.warning(
            "Tentativa de cadastro pelo IP %s",
            request.META.get("REMOTE_ADDR"),
        )

        return super().post(request, *args, **kwargs)