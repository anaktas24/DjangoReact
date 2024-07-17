from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import generics, status
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from api.models import User
from api.serializers import  UserSerializer, UserLoginSerializer
from rest_framework.permissions import AllowAny
import logging
from api.serializers import UserLoginSerializer
from .utils import get_tokens_for_user

User = get_user_model()


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

logger = logging.getLogger(__name__)



class LoginUserView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]
    def post(self, request, *args, **kwargs):
        logger.debug("Received login request with data: %s", request.data)
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            logger.debug("Attempting to authenticate user %s", email)

            user = authenticate(username=email, password=password)
            if user:
                logger.debug("User %s authenticated successfully", email)
                # Assuming you have a function to get tokens for the user
                try:
                    tokens = get_tokens_for_user(user)
                    return Response(tokens, status=status.HTTP_200_OK)
                except Exception as e:
                    logger.error("Failed to generate tokens: %s", str(e))
                    return Response({'error': 'Failed to generate tokens'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                logger.info("Authentication failed for user %s", email)
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            logger.error("Validation errors: %s", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def get_tokens_for_user(user):  # Made static or could be outside of the class
        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
