import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Asteroids from './Asteroids';

const Hero = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  /*const formatDate = (date) => {
    const [year, month, day] = date.split('/');
    return `${year}/${month}/${day}`;
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const formattedStartDate = formatDate(formData.startDate);
    //const formattedEndDate = formatDate(formData.endDate);

    const Dates ={
      start_date:formData.startDate,
      end_date:formData.endDate
    }
    try {
      // Use axios for the API request
      const res = await axios.post(`https://saturdayhacknight-gridminds.onrender.com/get-asteroids`,Dates);
      
      console.log(res.data);
      
      setData(res.data)  // Accessing the response data directly
      if (Array.isArray(data)) {
        setData(res.data);  // If data is an array, set the state
      } else {
        console.error("Received data is not an array:", data);
        setData([]); // If the data is not an array, clear it
      }
    } catch (error) {
      console.error('Error in fetching data:', error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-[url("https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg?semt=ais_hybrid")] overflow-auto pt-[70px] bg-cover bg-no-repeat bg-center bg-fixed'>
      {data.length > 0 ? (
        <div className='mt-[340px]'>
          <ul>
            {data.map((asteroid) => (
              <li key={asteroid.id}>
                <Asteroids asteroid={asteroid} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
          <h1 className="text-xl font-bold mb-4 text-white text-2xl">Enter the Dates to Check the Asteroid Sightings</h1>
          <form onSubmit={handleSubmit}>
            <p>
              <label className="block mb-2 text-white">Enter the Start Date:</label>
              <input
                type="date"
                name="startDate"
                className="border px-4 py-2 rounded-lg"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label className="block mb-2 text-white">Enter the End Date:</label>
              <input
                type="date"
                name="endDate"
                className="border px-4 py-2 rounded-lg"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </p>
            <button
              className="border px-4 py-2 mt-4 rounded-xl bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Hero;
