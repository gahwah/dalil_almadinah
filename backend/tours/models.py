from django.db import models
from django.conf import settings
from users.models import Guide

class Tour(models.Model):
    TOUR_TYPES = (
        ('historical', 'Historical'),
        ('cultural', 'Cultural'),
        ('religious', 'Religious'),
        ('nature', 'Nature'),
    )

    title = models.CharField(max_length=255)
    tour_type = models.CharField(max_length=50, choices=TOUR_TYPES)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    duration_hours = models.DecimalField(max_digits=4, decimal_places=1)
    image_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f"{self.title} - {self.date}"


class Booking(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )

    visitor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    guide = models.ForeignKey(Guide, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_bookings')
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='bookings')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    booked_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking {self.id} for {self.tour.title} by {self.visitor.email}"
