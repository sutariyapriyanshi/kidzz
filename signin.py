from flask import Flask, render_template, request, redirect, flash
import bcrypt
import mysql.connector

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Connect to the MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="PHW#84#jeor",
    database="kidzz"
)
cursor = db.cursor()

# Create login_detail table if not exists
cursor.execute('''CREATE TABLE IF NOT EXISTS login_detail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
)''')

# Route for the login page
@app.route('/')
def index():
    return render_template('signin.html')

# Login route
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Query the user from the database
    cursor.execute("SELECT password_hash FROM login_detail WHERE username = %s", (username,))
    user = cursor.fetchone()

    if user and bcrypt.checkpw(password.encode('utf-8'), user[0].encode('utf-8')):
        flash("Login Successful!", "success")
        return redirect('/')
    else:
        flash("Invalid Username or Password", "danger")
        return redirect('/')

# Function to encrypt password and insert into database
@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']

    # Encrypt the password
    password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Insert user into the database
    cursor.execute("INSERT INTO login_detail (username, password_hash) VALUES (%s, %s)", (username, password_hash))
    db.commit()
    
    flash("User registered successfully!", "success")
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
