import React from 'react'
import { useState } from 'react'
import Asteroids from './Asteroids';


const Hero = () => {
    const [data, setData] = useState({});

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-[url("https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg?semt=ais_hybrid")] bg-cover bg-no-repeat bg-center bg-fixed'>
      {data ? (
        <div><Asteroids/>
        <Asteroids/>
        <Asteroids/>
        <Asteroids/>
        <Asteroids/>
        </div>
    )
      :
      (
      
  <div className="text-center p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl">
        
  <h1 className="text-xl font-bold mb-4 text-white text-2xl">Enter the Dates to Check the Asteroid Sightings</h1>
  <form>
    <p>
      <label className="block mb-2 text-white">Enter the Start Date:</label>
      <input type="date" name="start-date" id="start-date" className="border px-4 py-2 rounded-lg" />
    </p>
    <p>
      <label className="block mb-2 text-white">Enter the End Date:</label>
      <input type="date" name="end-date" id="end-date" className="border px-4 py-2 rounded-lg" />
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
