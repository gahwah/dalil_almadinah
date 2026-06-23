import boto3
from django.conf import settings
import hmac
import hashlib
import base64

class CognitoAuthService:
    def __init__(self):
        self.client = boto3.client('cognito-idp', region_name=settings.AWS_REGION)
        self.client_id = settings.COGNITO_APP_CLIENT_ID
        self.user_pool_id = settings.COGNITO_USER_POOL_ID

    def get_secret_hash(self, username: str) -> str | None:
        if not hasattr(settings, 'COGNITO_APP_CLIENT_SECRET') or not settings.COGNITO_APP_CLIENT_SECRET:
            return None
            
        message = bytes(username + self.client_id, 'utf-8')
        key = bytes(settings.COGNITO_APP_CLIENT_SECRET, 'utf-8')
        secret_hash = base64.b64encode(
            hmac.new(key, message, digestmod=hashlib.sha256).digest()
        ).decode()
        return secret_hash

    def sign_up(self, email, password):
        kwargs = {
            'ClientId': self.client_id,
            'Username': email,
            'Password': password,
            'UserAttributes': [
                {'Name': 'email', 'Value': email}
            ]
        }
        secret_hash = self.get_secret_hash(email)
        if secret_hash:
            kwargs['SecretHash'] = secret_hash

        response = self.client.sign_up(**kwargs)
        return response['UserSub']

    def initiate_auth(self, email, password):
        kwargs = {
            'AuthFlow': 'USER_PASSWORD_AUTH',
            'AuthParameters': {
                'USERNAME': email,
                'PASSWORD': password,
            },
            'ClientId': self.client_id,
        }
        secret_hash = self.get_secret_hash(email)
        if secret_hash:
            kwargs['AuthParameters']['SECRET_HASH'] = secret_hash

        response = self.client.initiate_auth(**kwargs)
        return response['AuthenticationResult']
