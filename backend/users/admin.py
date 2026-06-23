from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Guide

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'first_name', 'last_name', 'role', 'created_at')
    search_fields = ('email', 'first_name', 'last_name')
    list_filter = ('role', 'is_active', 'is_staff')

@admin.register(Guide)
class GuideAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'nationality', 'rate', 'verified', 'number_of_trips')
    search_fields = ('user__email', 'nationality')
    list_filter = ('verified',)
