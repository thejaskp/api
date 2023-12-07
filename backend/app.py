from flask import Flask, request, jsonify
import json
import flask
from flask_cors import CORS
from demo import point

app = Flask(__name__)
CORS(app)

# Variable to store data
stored_data = []

@app.route("/")
def hello():
    return "Hello, World!"

# @app.route('/users', methods=["GET", "POST"])
# def users():
#     print("users endpoint reached...")
#     global stored_data  # Access the global variable

#     if request.method == "POST":
#         received_data = request.get_data(as_text=True)
#         print(f"Received data: {received_data}")
#         # print(point())
#         stored_data += str(received_data)
#         return_data = {
#             "status": "success",
#             "message": f"received: {received_data}"
#         }
#         # return flask.Response(response=json.dumps(return_data), status=201)
#         return jsonify(return_data), 201

#     if request.method == "GET":
#         data = point()
#         print(f"data: {stored_data}")
#         return data
@app.route('/users', methods=["POST"])
def users():
    print("users endpoint reached...")

    if request.method == "POST":
        received_data = request.get_json()
        prompt = received_data.get('prompt', '')
        
        print(f"Received prompt: {prompt}")

        # Use the prompt in your Python function
        result = point(prompt)

        # Store the data in the variable (if needed)
        stored_data.append(result)

        return_data = {
            "result": result
        }
        return jsonify(return_data), 201


if __name__ == "__main__":
    app.run("127.0.0.1", 6969)