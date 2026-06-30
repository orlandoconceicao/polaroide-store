from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

from .models import ImageUpload

from .serializers import ImageSerializer


class UploadImageView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        image = ImageUpload.objects.create(

            usuario = request.user,

            arquivo = request.FILES["arquivo"]
        )

        return Response(ImageSerializer(image).data)
    

class UserImageView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        image = ImageUpload.objects.filter(usuario = request.user)

        return Response(ImageSerializer(image, many=True).data)