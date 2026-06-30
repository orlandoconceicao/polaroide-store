from rest_framework import serializers

from .models import User


class RegisterSerializers(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        
        model = User

        fields = [
            "username",
            "email",
            "telefone",
            "password"
        ]

        def create(self, validated_data):

            user = User.objects.create_user(
                username = validated_data["username"],
                email = validated_data["email"],
                telefone = validated_data["telefone"],
                password = validated_data["password"]
            )

            return user