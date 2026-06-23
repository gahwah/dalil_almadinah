from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

MOCK_TOURS = [
    { 'id': 1, 'title': 'جولة مسجد قباء التاريخي', 'type': 'دينية', 'price': 50, 'duration_hours': 2, 'image_url': 'https://images.unsplash.com/photo-1598977123118-4e50bb6c469b?q=80&w=1200&auto=format&fit=crop', 'description': 'استمتع بالسكينة العميقة لمسجد قباء، أول مسجد بُني في الإسلام، وتعرف على تاريخه العريق وعمارته المميزة.', 'highlights': ['زيارة أول مسجد في الإسلام', 'شرح تاريخي موجه ووفير بالمعلومات'] },
    { 'id': 2, 'title': 'موقع معركة جبل أحد التاريخي', 'type': 'تاريخية', 'price': 70, 'duration_hours': 3, 'image_url': 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1200&auto=format&fit=crop', 'description': 'قم بزيارة موقع معركة أحد التاريخي وتأمل جبل الرماة ومقبرة الشهداء مستمعاً لسرد مفصل للأحداث التاريخية.', 'highlights': ['الصعود إلى جبل الرماة', 'زيارة مقبرة شهداء أحد'] },
    { 'id': 3, 'title': 'تجربة مزارع تمور المدينة المنورة', 'type': 'ثقافية', 'price': 40, 'duration_hours': 2.5, 'image_url': 'https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=1200&auto=format&fit=crop', 'description': 'استكشف مزارع التمور التقليدية في المدينة المنورة وتعرف على طرق زراعتها وتذوق أفضل أنواع تمور العجوة الطازجة.', 'highlights': ['تذوق تمور العجوة الطازجة', 'تعلم أساليب الزراعة التقليدية للتمور'] },
]

MOCK_BOOKINGS = [
    { 'id': 101, 'tour_title': 'جولة مسجد قباء التاريخي', 'date': '2026-07-15', 'status': 'confirmed', 'price': 50, 'visitor_email': 'john@example.com' },
    { 'id': 102, 'tour_title': 'تجربة مزارع تمور المدينة المنورة', 'date': '2026-07-18', 'status': 'pending', 'price': 40, 'visitor_email': 'sara@example.com' },
]

class TourListView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        return Response(MOCK_TOURS)

class TourDetailView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, pk):
        tour = next((t for t in MOCK_TOURS if t['id'] == int(pk)), None)
        if tour:
            return Response(tour)
        return Response({'error': 'Not found'}, status=404)

class BookingListCreateView(APIView):
    permission_classes = [AllowAny] # Using AllowAny temporarily for MVP testing without DB
    def get(self, request):
        # We would normally filter by request.user here
        return Response(MOCK_BOOKINGS)

    def post(self, request):
        data = request.data
        new_booking = {
            'id': 103,
            'tour_title': f"Tour #{data.get('tourId')}",
            'date': data.get('date'),
            'status': 'pending',
            'price': 50,
            'visitor_email': 'new_visitor@example.com'
        }
        MOCK_BOOKINGS.append(new_booking)
        return Response({'message': 'Booking confirmed', 'booking': new_booking}, status=201)
