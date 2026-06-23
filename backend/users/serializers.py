import rest_framework
from rest_framework import serializers
from .models import User, Guide

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'phone_number', 'email', 'role', 'created_at']

class GuideSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.filter(role='guide'),
        source='user',
        write_only=True
    )

    class Meta:
        model = Guide
        fields = ['user', 'user_id', 'nationality', 'rate', 'languages', 'verified', 'number_of_trips', 'about_me', 'profile_picture']
