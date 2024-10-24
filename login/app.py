import requests
from flask import Flask, request, redirect, url_for, render_template, flash, session
from flask_bcrypt import Bcrypt
import mysql.connector
import random
import string
import secrets
import os

app = Flask(__name__)

# Generate a secure secret key for Flask sessions
app.secret_key = secrets.token_hex(24)  # Example: 'a3f9c5e6d3d3d9e1f1c7e2a1f4e5d6f5e8c5e7d6e5f8a1b4c5d7e6f8a1c3b6f'
bcrypt = Bcrypt(app)

# app.secret_key = os.environ.get('FLASK_SECRET_KEY')
RECAPTCHA_SECRET_KEY = os.environ.get('RECAPTCHA_SECRET_KEY')

# Database connection
def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='pass',  # Replace with your actual database password
        database='kidzz'      # Replace with your actual database name
    )

# Generate random CAPTCHA
def generate_captcha():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        captcha_input = request.form['captcha']
        captcha_session = session.get('captcha', '')

        # Validate CAPTCHA
        recaptcha_response = request.form['g-recaptcha-response']
        payload = {
            'secret': RECAPTCHA_SECRET_KEY,
            'response': recaptcha_response
        }

        response = requests.post('https://www.google.com/recaptcha/api/siteverify', data=payload)
        result = response.json()

        if not result.get('success'):
            flash('Please complete the CAPTCHA!', 'error')
            return redirect(url_for('login'))

        if captcha_input != captcha_session:
            flash('Captcha is incorrect, please try again.', 'error')
            return redirect(url_for('login'))

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
        user = cursor.fetchone()

        if user and bcrypt.check_password_hash(user['password'], password):
            flash('Login successful!', 'success')
            return redirect(url_for('welcome'))
        else:
            flash('Invalid username or password.', 'error')
            return redirect(url_for('login'))

    # Generate a new CAPTCHA for each login request
    session['captcha'] = generate_captcha()
    return render_template('login.html', captcha=session['captcha'])

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        phone = request.form['phone']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Validate reCAPTCHA
        recaptcha_response = request.form['g-recaptcha-response']
        payload = {
            'secret': RECAPTCHA_SECRET_KEY,
            'response': recaptcha_response
        }

        response = requests.post('https://www.google.com/recaptcha/api/siteverify', data=payload)
        result = response.json()

        if not result.get('success'):
            flash('Please complete the CAPTCHA!', 'error')
            return redirect(url_for('register'))

        if password != confirm_password:
            flash('Passwords do not match.', 'error')
            return redirect(url_for('register'))

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        conn = get_db_connection()
        cursor = conn.cursor()

        # Check if user already exists
        cursor.execute('SELECT * FROM users WHERE username = %s OR email = %s', (username, email))
        existing_user = cursor.fetchone()

        if existing_user:
            flash('User already exists, please login.', 'info')
            return redirect(url_for('login'))

        # Insert new user into the database
        cursor.execute('INSERT INTO users (username, phone, email, password) VALUES (%s, %s, %s, %s)',
                       (username, phone, email, hashed_password))
        conn.commit()
        conn.close()

        flash('Registration successful! Please login.', 'success')
        return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/home')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)