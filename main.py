import os
from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector
import hashlib

secret_key = os.urandom(24).hex()
# print(secret_key)

app = Flask(__name__)
app.secret_key = '738436a3cfb98b02d339f4fdd1e5bf627250579fc52d48e3'

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="PHW#84#jeor",
    database="kidzz"
)
cursor = db.cursor()

# Salt generation function
def generate_salt():
    return os.urandom(16).hex()

# Password hashing function
def hash_password(password, salt):
    return hashlib.sha256((password + salt).encode()).hexdigest()

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Fetch user from the database
        cursor.execute("SELECT username, password, salt FROM login_details WHERE username = %s", (username,))
        user = cursor.fetchone()
        
        if user:
            db_username, db_password, db_salt = user
            hashed_password = hash_password(password, db_salt)
            if hashed_password == db_password:
                flash("Login successful!", "success")
                return redirect(url_for('dashboard'))
            else:
                flash("Invalid password!", "danger")
        else:
            flash("User not found!", "danger")
    
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        phone_number = request.form['phone_number']
        mail = request.form['mail']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        
        if password != confirm_password:
            flash("Passwords do not match!", "danger")
        else:
            salt = generate_salt()
            hashed_password = hash_password(password, salt)
            try:
                cursor.execute("INSERT INTO login_details (username, phone_number, mail, password, confirm_password, salt) VALUES (%s, %s, %s, %s, %s, %s)", 
                               (username, phone_number, mail, hashed_password, hashed_password, salt))
                db.commit()
                flash("Registration successful!", "success")
                return redirect(url_for('login'))
            except mysql.connector.Error as err:
                flash(f"Error: {err}", "danger")
    
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    return "Welcome to the dashboard!"

if __name__ == '__main__':
    app.run(debug=True)
