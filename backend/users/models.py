from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator

class User(AbstractUser):
    ROLE_CHOICES = (
        ('visitor', 'Visitor'),
        ('guide', 'Guide'),
        ('admin', 'Admin'),
    )

    # Django's AbstractUser already has first_name, last_name, email, but we enforce them and use email as unique.
    username = None # Remove username field, we will use email as the identifier.
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    cognito_id = models.CharField(max_length=255, unique=True, blank=True, null=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='visitor')
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.email} ({self.role})"


class Guide(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='guide_profile')
    nationality = models.CharField(max_length=100)
    rate = models.DecimalField(max_digits=6, decimal_places=2, help_text="Hourly or per-trip rate")
    languages = models.JSONField(default=list, help_text="List of languages spoken")
    verified = models.BooleanField(default=False)
    number_of_trips = models.PositiveIntegerField(default=0)
    about_me = models.TextField(blank=True, null=True)
    profile_picture = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f"Guide: {self.user.first_name} {self.user.last_name}"
