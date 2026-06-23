from django.contrib import admin
from .models import Tour, Booking

@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'tour_type', 'date', 'time', 'price', 'duration_hours')
    search_fields = ('title', 'tour_type')
    list_filter = ('tour_type', 'date')

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('id', 'visitor', 'guide', 'tour', 'status', 'booked_at')
    search_fields = ('visitor__email', 'tour__title')
    list_filter = ('status', 'booked_at')
