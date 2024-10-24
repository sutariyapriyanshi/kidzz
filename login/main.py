import secrets
from flask import Flask
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)

# Generate a secure secret key for Flask sessions
app.secret_key = secrets.token_hex(24)  # Example: 'a3f9c5e6d3d3d9e1f1c7e2a1f4e5d6f5e8c5e7d6e5f8a1b4c5d7e6f8a1c3b6f'
bcrypt = Bcrypt(app)

# Replace with your actual secret key from Google reCAPTCHA
# RECAPTCHA_SECRET_KEY = 'YOUR_ACTUAL_SECRET_KEY_FROM_GOOGLE'
# import os

app.secret_key = os.environ.get('FLASK_SECRET_KEY')
RECAPTCHA_SECRET_KEY = os.environ.get('RECAPTCHA_SECRET_KEY')
print(RECAPTCHA_SECRET_KEY)