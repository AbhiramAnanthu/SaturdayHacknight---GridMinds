from datetime import datetime, timedelta, timezone
from twilio.rest import Client
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=".env")

client = Client(os.getenv("ACCOUNT_SID"), os.getenv("AUTH_TOKEN"))
PHONE_NUMBER = os.getenv("PHONE_NUMBER")


from twilio.base.exceptions import TwilioRestException


def schedule_messages(
    send_date_time: datetime, message_body: str, sender_phone_number: str
):
    try:
        send_time_utc = send_date_time.astimezone(timezone.utc)

        response = client.messages.create(
            body=message_body,
            from_=PHONE_NUMBER,
            to=sender_phone_number,
            send_at=send_time_utc,
            messaging_service_sid=os.getenv("MESSAGE_SID_ID"),
            schedule_type="fixed",
        )

        if response:
            return True
        else:
            print(f"Error: Message not queued. Status: {response.status}")
            return False

    except TwilioRestException as e:
        print(f"Twilio API error: {e}")
        return False
    except Exception as e:
        print(f"Unexpected error: {e}")
        return False
