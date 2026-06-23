from rest_framework import serializers
from .models import Tour, Booking
from users.serializers import UserSerializer, GuideSerializer

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ['id', 'title', 'tour_type', 'description', 'date', 'time', 'price', 'duration_hours', 'image_url']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'visitor', 'guide', 'tour', 'status', 'booked_at']
        read_only_fields = ['booked_at']
