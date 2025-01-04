from flask import Flask, request, jsonify
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone
from twilio.rest import Client
from message import schedule_messages
import os
import requests
import json
from flask_cors import CORS

load_dotenv(dotenv_path=".env")

API_KEY = os.getenv("NASA_API_KEY")
TWILIO_ACCOUNT_SID = os.getenv("ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("AUTH_TOKEN")
PHONE_NUMBER = os.getenv("PHONE_NUMBER")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)


@app.route("/", methods=["GET"])
def index_page():
    return jsonify({"message": "Welcome to NASA API!"}), 200


@app.route("/get-asteroids", methods=["GET"])
def get_asteroids():
    data = request.get_json()
    start_date = data["start_date"]
    end_date = data["end_date"]
    url = f"https://api.nasa.gov/neo/rest/v1/feed?start_date={start_date}&end_date={end_date}&api_key={API_KEY}"

    response = requests.get(url).json()

    asteroid_details = []

    for date, asteroids in response["near_earth_objects"].items():
        for asteroid in asteroids:
            asteroid_id = asteroid["id"]
            asteroid_name = asteroid.get("name", "No description available")
            
            diameter_min = asteroid["estimated_diameter"]["meters"][
                "estimated_diameter_min"
            ]
            diameter_max = asteroid["estimated_diameter"]["meters"][
                "estimated_diameter_max"
            ]

            is_potentially_hazardous = asteroid.get(
                "is_potentially_hazardous_asteroid", False
            )
            threat_level = (
                "Potentially hazardous" if is_potentially_hazardous else "Not hazardous"
            )

            description = (
                f"{asteroid_name} (ID: {asteroid_id}) is {threat_level}. "
                f"It has an estimated diameter between {diameter_min:.2f} meters and {diameter_max:.2f} meters. "
            )

            for approach in asteroid["close_approach_data"]:
                approach_date_time = approach["close_approach_date_full"]
                miss_distance_km = approach["miss_distance"]["kilometers"]
                relative_velocity_kmh = approach["relative_velocity"][
                    "kilometers_per_hour"
                ]

                asteroid_details.append(
                    {
                        "id": asteroid_id,
                        "close_approach_date": approach_date_time,
                        "name": asteroid_name,
                        "description": f"{description} The asteroid will come within {miss_distance_km} kilometers of Earth at a speed of {relative_velocity_kmh} km/h.",
                    }
                )

    return jsonify(asteroid_details), 200


@app.route("/create-schedule-message", methods=["POST"])
def create_remainder():
    data = request.get_json()
    user_phone_number = data["phone_number"]

    date_time = data["date_time"].split(",")
    date_parts = list(map(int, date_time))

    IST_offset = timedelta(hours=5, minutes=30)
    ist = timezone(IST_offset)

    scheduled_time = datetime(*date_parts, tzinfo=ist)

    message = f"Hello Astro, Your asteroid is approaching soon. Here are the details : Asteroid ID: {data['id']}, Close Approach time : {scheduled_time}"

    response = schedule_messages(scheduled_time, message, user_phone_number)

    if response:
        return jsonify({"message": "Message scheduled successfully!"}), 200
    return jsonify({"message": "Message scheduling failed!"}), 400


if __name__ == "__main__":
    app.run(port=5000, debug=True)
