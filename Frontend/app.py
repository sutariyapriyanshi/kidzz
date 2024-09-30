import mysql.connector
from flask import Flask, request, jsonify,render_template
import bcrypt
import os

app = Flask(__name__)

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
app.config['TEMPLATES_AUTO_RELOAD'] = True  # Enable auto-reload for changes in templates
app.config['TEMPLATES_DIR'] = template_dir

# Replace with your MySQL database credentials
mysql_host = "localhost"
mysql_user = "root"
mysql_password = "PHW#84#jeor"
mysql_database = "Kidzz"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register_user():
    username = request.form['username']
    phone_number = request.form['phone_number']
    mail = request.form['mail']
    password = request.form['password']
    confirm_password = request.form['confirm_password']

    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match.'})

    # Hash the password using bcrypt
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    # Connect to the MySQL database
    try:
        mydb = mysql.connector.connect(
            host=mysql_host,
            user=mysql_user,
            password=mysql_password,
            database=mysql_database
        )
        mycursor = mydb.cursor()

        # Insert user data into the database
        sql = "INSERT INTO login_details (username, phone_number, mail, password, confirm_password, salt) VALUES (%s, %s, %s, %s,%s,%s)"
        val = (username, phone_number, mail, password, confirm_password, salt)
        mycursor.execute(sql, val)
        mydb.commit()

        return jsonify({'message': 'Registration successful!'})

    except mysql.connector.Error as error:
        return jsonify({'error': str(error)})

if __name__ == '__main__':
    app.run()
