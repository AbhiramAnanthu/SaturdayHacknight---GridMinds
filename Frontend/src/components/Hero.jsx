import React from 'react'
import { useState, useEffect } from 'react'
import Asteroids from './Asteroids';


const Hero = () => {
    const [data, setData] = useState({});
    const [formData, setFormData] = useState({
      startDate:'',
      endDate:'',
    });

    const Number = document.getElementById('number');

    const HandleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }

    const FormatDate = (date) => {
      const [day, month, year] = date.split('/');
      return `${year}/${month}/${day}`;
    }

    useEffect(() => {
      const HandleSubmit = async (e) => {
        e.preventDefault();
        const FormattedStartDate = FormatDate(formData.startDate);
        const FromattedEndDate = FormatDate(formData.endDate);
        try {
          const res = await fetch(`http://saturdayhacknight-gridminds.onrender.com/get-asteroids?start_date=${FormattedStartDate}&end_date=${FromattedEndDate}`);
          const data = await res.json();
          setData(data);
        } catch (error) {
          console.error('Error in fetching data:', error);
        }
      }
    }, [])
    
  return (
    <>
    <div className='flex justify-center items-center h-screen bg-[url("https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg?semt=ais_hybrid")] overflow-auto pt-[70px] bg-cover bg-no-repeat bg-center bg-fixed'>
      {data ? (
        <div className='mt-[340px]'>
          <ul>
          {data.map((asteroid) => {
          return (
            <li key={asteroid.id}>
              <Asteroids asteroid={asteroid} />
            </li>
          );
        })}
          </ul>
        </div>
    )
      :
      (
      
  <div className="text-center p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
        
  <h1 className="text-xl font-bold mb-4 text-white text-2xl">Enter the Dates to Check the Asteroid Sightings</h1>
  <form onSubmit={fetchData}>
    <p>
      <label className="block mb-2 text-white">Enter the Start Date:</label>
      <input type="date" name="start-date" id="start-date" className="border px-4 py-2 rounded-lg" required/>
    </p>
    <p>
      <label className="block mb-2 text-white">Enter the End Date:</label>
      <input type="date" name="end-date" id="end-date" className="border px-4 py-2 rounded-lg" required />
    </p>
    <p>
    <label className="block mb-2 text-white">Enter your Mobile Number:</label>
    <input type="number" name="number" id="number" className='border px-4 py-2 rounded-lg' required/>
    </p>
    <p>
      <label className='block mb-2 text-slate-400 pt-5'>*Mobile number required for receiving asteroid sighting notifications</label>
    </p>
    <button className="border px-4 py-2 mt-4 rounded-xl bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
  Search
</button>
  </form>
</div>
      )}
</div>
    </>
  )
}

export default Hero
