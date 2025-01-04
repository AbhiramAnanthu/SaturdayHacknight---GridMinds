import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Hero = () => {
    const [data, setData] = useState(null);

  return (
    <>
      {data ? (
        <div>Hello World</div>
    )
      :
      (
        <div className='flex justify-center items-center h-screen bg-[url("https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg?semt=ais_hybrid")] bg-cover bg-no-repeat bg-center'>
  <div className="text-center p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-xl">
  <h1 className="text-xl font-bold mb-4 text-white text-3xl">Enter the Dates to Check the Asteroid Sightings</h1>
  <form>
    <p>
      <label className="block mb-2 text-white">Enter the Start Date:</label>
      <input type="date" name="start-date" id="start-date" className="border px-4 py-2 rounded-lg" />
    </p>
    <p>
      <label className="block mb-2 text-white">Enter the End Date:</label>
      <input type="date" name="end-date" id="end-date" className="border px-4 py-2 rounded-lg" />
    </p>
    <button className='border px-4 py-2 mt-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700'>
      Search
    </button>
  </form>
</div>
</div>

      )}
    </>
  )
}

export default Hero
