from django.urls import path
from .views import TourListView, TourDetailView, BookingListCreateView

urlpatterns = [
    path('tours/', TourListView.as_view(), name='tour-list'),
    path('tours/<int:pk>/', TourDetailView.as_view(), name='tour-detail'),
    path('bookings/', BookingListCreateView.as_view(), name='booking-list-create'),
]
