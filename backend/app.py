from flask   import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data received"}), 400

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    return jsonify({
        "status": "success",
        "received": {
            "name": name,
            "email": email,
            "message": message
        }
    })

@app.route('/')
def home():
    return "Flask backend is running ✅"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
