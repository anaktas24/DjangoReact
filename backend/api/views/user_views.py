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
        logger.debug("Starting authentication process")
        user = authenticate(username=request.data.get('email'), password=request.data.get('password'))
        logger.debug(f"Authentication result for user: {user}")

        if user is not None:
            logger.debug("User authenticated, generating token")
            # Your token generation logic here
            try:
                tokens = get_tokens_for_user(user)
                return Response(tokens, status=status.HTTP_200_OK)
            except Exception as e:
                logger.error(f"Error in token generation: {str(e)}")
                return Response({'error': 'Server error, please try again later.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            logger.info("Authentication failed")
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


    @staticmethod
    def get_tokens_for_user(user):  # Made static or could be outside of the class
        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
