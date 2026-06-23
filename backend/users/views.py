from rest_framework import status, views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from core.aws import CognitoAuthService
from .models import User
import botocore

class RegisterView(views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        role = request.data.get('role', 'visitor')

        if not email or not password:
            return Response({"error": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({"error": "User with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        cognito = CognitoAuthService()
        try:
            sub = cognito.sign_up(email, password)
            user = User.objects.create(email=email, cognito_id=sub, role=role)
            return Response({"message": "Registration successful", "user_id": user.id}, status=status.HTTP_201_CREATED)
        except botocore.exceptions.ClientError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({"error": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        cognito = CognitoAuthService()
        try:
            auth_result = cognito.initiate_auth(email, password)
            # Ensure the user exists locally
            user = User.objects.filter(email=email).first()
            if not user:
                 return Response({"error": "User does not exist in local database"}, status=status.HTTP_404_NOT_FOUND)
            
            return Response({
                "access_token": auth_result.get('AccessToken'),
                "id_token": auth_result.get('IdToken'),
                "refresh_token": auth_result.get('RefreshToken'),
                "role": user.role
            })
        except botocore.exceptions.ClientError as e:
            return Response({"error": str(e)}, status=status.HTTP_401_UNAUTHORIZED)

class GuideListView(views.APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        mock_guides = [
            { 
                'id': 1, 
                'name': 'أحمد الحربي', 
                'nationality': 'سعودي', 
                'rating': 4.9, 
                'languages': ['العربية', 'الإنجليزية'], 
                'image_url': '/guide1.jpg', 
                'trips': 340, 
                'about': 'السلام عليكم ورحمة الله وبركاته! أنا أحمد الحربي، مرشد سياحي مرخص من وزارة السياحة في المملكة العربية السعودية. ولدت ونشأت في رحاب المدينة المنورة، ولدي شغف كبير يمتد لأكثر من عشر سنوات في دراسة وتوثيق السيرة النبوية والتاريخ الإسلامي للمدينة المنورة. أسعد بمرافقتكم في جولات شيقة لزيارة المساجد التاريخية والمعالم الأثرية، مع تقديم سرد تاريخي موثق وممتع يثري تجربتكم الروحية والثقافية في طيبة الطيبة.' 
            },
            { 
                'id': 3, 
                'name': 'أحمد ديمير', 
                'nationality': 'تركي', 
                'rating': 4.7, 
                'languages': ['التركية', 'العربية', 'الإنجليزية'], 
                'image_url': '/turkish_guide.png', 
                'trips': 185, 
                'about': 'مرحباً بكم! أنا أحمد ديمير، مرشد سياحي تركي أعيش في المدينة المنورة منذ أكثر من سبع سنوات. أتمتع بخبرة واسعة في مرافقة المجموعات السياحية والزوار القادمين من تركيا ومختلف دول العالم الإسلامي. أسعد بتعريفكم على المعالم التاريخية والثقافية العريقة للمدينة المنورة بلغات متعددة، وتقديم تجربة إرشادية مثرية ومريحة تلبي تطلعاتكم الثقافية والروحية.' 
            },
            { 
                'id': 4, 
                'name': 'بودي ويبوو', 
                'nationality': 'إندونيسي', 
                'rating': 4.6, 
                'languages': ['الإندونيسية', 'العربية', 'الإنجليزية'], 
                'image_url': '/indonesian_guide.png', 
                'trips': 120, 
                'about': 'أهلاً وسهلاً! أنا بودي ويبوو، مرشد سياحي من إندونيسيا وشغوف بنقل معالم المدينة المنورة وتاريخها الإسلامي العظيم للزوار القادمين من جنوب شرق آسيا والناطقين باللغة الإندونيسية. أسعى دوماً لتسهيل جولاتكم وشرح المواقع التاريخية مثل جبل أحد ومسجد قباء بأسلوب شيق وبسيط يضمن لكم تجربة روحية لا تُنسى في طيبة الطيبة.' 
            },
            { 
                'id': 5, 
                'name': 'محمد إقبال', 
                'nationality': 'باكستاني', 
                'rating': 4.9, 
                'languages': ['الأوردو', 'العربية', 'الإنجليزية'], 
                'image_url': '/pakistani_guide.png', 
                'trips': 290, 
                'about': 'السلام عليكم ورحمة الله وبركاته! أنا محمد إقبال، مرشد سياحي أردي وباكستاني متخصص في التاريخ الإسلامي والمعالم الأثرية للمدينة المنورة. عملت كمرشد ومترجم للعديد من حملات الحج والعمرة لأكثر من ثماني سنوات. أهتم بسرد القصص التاريخية المرتبطة بالأماكن وتوضيح التفاصيل التراثية العميقة التي تعزز زيارتكم وتقدم لكم رؤية شاملة عن تراث المدينة النبوية.' 
            },
        ]
        return Response(mock_guides)

