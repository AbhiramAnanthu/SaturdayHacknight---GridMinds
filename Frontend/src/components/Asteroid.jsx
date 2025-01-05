import axios from 'axios';
import React, { useState } from 'react'


const Asteroid = ({asteroid, number}) => {
    //console.log(asteroid)
    //https://saturdayhacknight-gridminds.onrender.com/create-schedule-message
/*
{
  "phone_number": "+91 8547376353",
  "date_time": "2025,1,5,11,00,00", 
  "id": "3704144"
}

*/  console.log(number)
const [result, setResult] = useState("");
const dateTime = new Date(asteroid.close_approach_date);
const dateTimeArray = [
  dateTime.getFullYear(),
  dateTime.getMonth()+1,
  dateTime.getDate(),
  dateTime.getHours(),
  dateTime.getMinutes(),
  dateTime.getSeconds()
]
    const data ={
      "phone_number": number,
      "date_time": dateTimeArray.join(","),
      "id": asteroid.id
    }
    const HandleClick = async() => {
      try {
        console.log("Sending data:", data)
          const res = await axios.post('https://saturdayhacknight-gridminds.onrender.com/create-schedule-message', data);
          console.log(res.data.message);
          setResult(res.data.message);
        } catch (error) {
          if(error.response){
            console.log(error.response.message);
          }
        }

    }

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-[url('https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg?semt=ais_hybrid')] overflow-auto pt-[70px] bg-cover bg-no-repeat bg-center bg-fixed">
    <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-8 max-w-lg w-full">
        <h1 className="text-center text-white font-poppins text-4xl font-bold mb-6">ID: {asteroid.id}</h1>
        
        <ul className="space-y-4 text-white font-poppins text-lg">
            <li>
                <span className="font-semibold">Closest Approach Date:</span> <span class="text-gray-300">{asteroid.close_approach_date}</span>
            </li>
            <li>
                <span className="font-semibold">Description:</span> <span class="text-gray-100">{asteroid.description}</span>


            </li>
            <li>
              <span className="font-semibold">Want to receive notifications?</span>
            </li>
        </ul>
        
        <div className="text-center mt-6">
          {result ? (
            <p className="text-white text-lg font-semibold">{result}</p>
          ):
          (

            <button className="border px-6 py-2 rounded-xl bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out" onClick={HandleClick}>
                Click Here
            </button>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Asteroid;

