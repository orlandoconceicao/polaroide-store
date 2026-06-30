from django.urls import path

from .views import *


urlpatterns = [
    path("upload/", UploadImageView.as_view()),

    path("images/", UserImageView.as_view())
]
