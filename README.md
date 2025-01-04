




![nasanotion](https://github.com/user-attachments/assets/f5e65cb8-48c0-4dc0-b757-bf3569f32d2f)

# AstroNav
An Asteroid Tracker System allows users to monitor approaching asteroids by providing a start and end date. Leveraging NASA's NEOWS API, the system retrieves precise information about the asteroids' close approach times. Users can schedule reminders directly through the website, enabling them to receive timely notifications about upcoming asteroid sightings. The platform ensures that users are alerted well in advance of an asteroid's approach, making the experience both engaging and informative.
## Team members
1. [Abhiram A R](https://github.com/AbhiramAnanthu)
2. [Kevin L](https://github.com/Blackeye6941)
3. [Akshay M Nair](https://github.com/Mobing-ms)
## Link to product walkthrough
[link to video](Link Here)
## How it Works ?
1. **User Input**: The user provides a starting and ending date through the website to define the time range for tracking asteroids.  

2. **Server Processing**: The server sends a request to NASA's **NEOWS API** to retrieve detailed information about asteroids approaching Earth within the specified time frame. This includes their close approach dates, times, and additional data such as size, speed, and proximity.  

3. **Asteroid Selection and Reminder Scheduling**: From the list of retrieved asteroids, the user selects the one they are interested in tracking. A POST request is then sent to the server, requesting a scheduled reminder. This scheduling process is seamlessly managed using **Twilio's messaging API**, ensuring reliable delivery.  

4. **Timely Notifications**: At the scheduled time, the user receives a personalized message with details about the asteroid, including its close approach date and time, ensuring they are alerted promptly and effectively.
## Libraries used
1. Backend
   1. Flask
   2. Twilio
2. Frontend
     1. React
     2. Tailwind CSS
## How to configure

## How to Run
Instructions for running
