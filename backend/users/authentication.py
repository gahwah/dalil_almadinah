import jwt
import requests
from django.conf import settings
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from users.models import User
from functools import lru_cache

@lru_cache(maxsize=1)
def get_cognito_jwks():
    region = settings.AWS_REGION
    pool_id = settings.COGNITO_USER_POOL_ID
    url = f"https://cognito-idp.{region}.amazonaws.com/{pool_id}/.well-known/jwks.json"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()

class CognitoJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return None

        token = auth_header.split(' ')[1]

        try:
            # Decode header to find the correct key
            unverified_header = jwt.get_unverified_header(token)
            kid = unverified_header.get('kid')

            jwks = get_cognito_jwks()
            key_data = next((key for key in jwks.get('keys', []) if key.get('kid') == kid), None)
            
            if not key_data:
                raise AuthenticationFailed('Invalid token key')

            public_key = jwt.algorithms.RSAAlgorithm.from_jwk(key_data)

            # Validate the token
            payload = jwt.decode(
                token,
                public_key,
                algorithms=['RS256'],
                audience=settings.COGNITO_APP_CLIENT_ID if key_data.get('use') == 'sig' else None,
                issuer=f"https://cognito-idp.{settings.AWS_REGION}.amazonaws.com/{settings.COGNITO_USER_POOL_ID}"
            )
            
            # For Access Token the token_use is 'access', for ID token it is 'id'
            # We accept both or just access token depending on use case.
            if payload.get('token_use') not in ['access', 'id']:
                raise AuthenticationFailed('Invalid token_use')

            # Find user based on cognito_id (sub) or email
            sub = payload.get('sub')
            email = payload.get('email') # only present in id token or access token if configured

            if sub:
                user = User.objects.filter(cognito_id=sub).first()
                if not user and email:
                    # Fallback mapping
                    user = User.objects.filter(email=email).first()
                    if user:
                        user.cognito_id = sub
                        user.save()
            else:
                raise AuthenticationFailed('No sub found in token')

            if not user:
                raise AuthenticationFailed('User not found in system')

            return (user, token)

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token expired')
        except jwt.InvalidTokenError as e:
            raise AuthenticationFailed(f'Invalid token: {str(e)}')
        except Exception as e:
            raise AuthenticationFailed(f'Authentication failed: {str(e)}')
