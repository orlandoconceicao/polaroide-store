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
            "password",
        ]

    def validate_telefone(self, value):
        if len(value) < 10:
            raise serializers.ValidationError("Telefone inválido.")
        return value

    def create(self, validated_data):

        if User.objects.filter(email=validated_data["email"]).exists():
            raise serializers.ValidationError(
                {"email": "Já existe um usuário com este e-mail."}
            )

        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            telefone=validated_data["telefone"],
            password=validated_data["password"],
        )

        return user