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
      <div className='text-center flex flex-col space-between'>
        <h1>Enter the Dates to Check the asteroid sightings</h1>
        <form>
            <p><label>Enter the Start Date:</label>
            <input type="date" name="date" id="date" /></p>
            <p><label>Enter the End Date:</label>
            <input type="date" name="date" id="date" /></p>
            <button className='border px-4 py-1 mt-3 rounded-xl bg-blue-600 text-white'>Search</button>
        </form>
      </div>
      )}
    </>
  )
}

export default Hero
