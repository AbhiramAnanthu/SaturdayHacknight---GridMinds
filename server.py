from flask import Flask, request, jsonify
from dotenv import load_dotenv
from datetime import datetime
from twilio.rest import Client
import os
import requests
import json

API_KEY = os.getenv("NASA_API_KEY")
TWILIO_ACCOUNT_SID = os.getenv("ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("AUTH_TOKEN")
PHONE_NUMBER = os.getenv("PHONE_NUMBER")

load_dotenv(dotenv_path=".env")

app = Flask(__name__)
client = Client(account_sid=TWILIO_ACCOUNT_SID, auth_token=TWILIO_AUTH_TOKEN)


@app.route("/", methods=["GET"])
def index_page():
    return jsonify({"message": "Welcom to NASA API!"})


def send_message(send_date: str, asteroid_details: dict, sender_phone_number: str):
    send_time = datetime.strptime(send_date, "%Y-%m-%d")
    message = client.messages.create(
        body=f"Close approach date: {send_date}\nAsteroid name: {asteroid_details['name']}\nat {asteroid_details['close_approach_date']['time']}",
        from_=PHONE_NUMBER,
        to=sender_phone_number,
        send_at=send_time,
    )


@app.route("/get-asteroids", methods=["GET"])
def get_asteroids():
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    url = f"https://api.nasa.gov/neo/rest/v1/feed?start_date={start_date}&end_date={end_date}&api_key={API_KEY}"
    response = requests.get(url)
    asteroid_data = response["near_earth_objects"]


@app.route("/create-remainder", methods=["POST"])
def create_remainder():
    data = request.get_json()
    with open("remainder.json", "r") as file:
        remainder = json.load(file)
        remainder.append(data)
        with open("remainder.json", "w") as file:
            json.dump(remainder, file)
    return jsonify({"message": "Remainder created successfully!"}), 200


if __name__ == "__main__":
    app.run(port=5000, debug=True)
