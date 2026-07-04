from rest_framework.generics import CreateAPIView
from django_ratelimit.decorators import ratelimit
import logging

from .serializers import RegisterSerializers

logger = logging.getLogger("security")


class RegisterView(CreateAPIView):

    serializer_class = RegisterSerializers

    @ratelimit(key="ip", rate="5/m", block=True)
    @ratelimit(key="post:email", rate="5/m", block=True)
    def post(self, request, *args, **kwargs):

        logger.warning(
            "Tentativa de cadastro pelo IP %s",
            request.META.get("REMOTE_ADDR")
        )

        return super().post(request, *args, **kwargs)