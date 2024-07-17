

from rest_framework import generics, status
from rest_framework.response import Response
from api.models import Profile
from api.serializers import ProfileSerializer


class ProfileDetailView(generics.RetrieveAPIView):
    #permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            profile = Profile.objects.get(user=request.user)
            serializer= ProfileSerializer(profile)
            return Response(serializer.data)
        except Profile.DoesNotExist:
            return Response({"error": "Profile does not exist"}, status=status.HTTP_404_NOT_FOUND)
