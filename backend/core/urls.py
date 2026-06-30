from django.contrib import admin

from django.urls import path, include

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/", include("users.urls")),

    path("api/", include("images.urls")),

    path("api/", include("orders.urls")),

    path("api/login", TokenObtainPairView.as_view()),

    path("api/login/token", TokenRefreshView.as_view())
]
