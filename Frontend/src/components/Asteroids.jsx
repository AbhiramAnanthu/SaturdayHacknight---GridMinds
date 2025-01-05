import React from 'react'

const Asteroids = ({asteroid}) => {
  return (
    <>
      
      <div className='border mt-5 mx-7 font-poppins text-white pt-[20px] pb-[20px] pl-[20px] pr-[20px] rounded-xl backdrop-blur-sm'>
        <h1 className='text-2xl font-semibold pb-[10px]'>Asteroid ID: {asteroid.id}</h1>
        <h1 className='text-md'><h1 className='text-lg'>Asteroid sighting date:</h1> {asteroid.close_approach_date}</h1>
        <p className='text-md'><h1 className='text-lg'>Description:</h1> {asteroid.description}</p>
      </div>
    </>
  )
}

export default Asteroids
