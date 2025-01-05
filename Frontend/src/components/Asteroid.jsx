import React from 'react'

const Asteroid = ({asteroid, number}) => {
    //console.log(asteroid)
    const HandleClick = async() => {
        
    }

  return (
    <>
    <div class="flex justify-center items-center h-screen bg-[url('https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg?semt=ais_hybrid')] overflow-auto pt-[70px] bg-cover bg-no-repeat bg-center bg-fixed">
    <div class="bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-8 max-w-lg w-full">
        <h1 class="text-center text-white font-poppins text-4xl font-bold mb-6">ID: {asteroid.id}</h1>
        
        <ul class="space-y-4 text-white font-poppins text-lg">
            <li>
                <span class="font-semibold">Closest Approach Date:</span> <span class="text-gray-300">{asteroid.close_approach_date}</span>
            </li>
            <li>
                <span class="font-semibold">Description:</span> <span class="text-gray-100">{asteroid.description}</span>
            </li>
            <li>
                <span class="font-semibold">Want to receive notifications?</span>
            </li>
        </ul>
        
        <div class="text-center mt-6">
            <button class="border px-6 py-2 rounded-xl bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out" onClick={() => HandleClick()}>
                Click Here
            </button>
        </div>
    </div>
</div>
      
    </>
  )
}

export default Asteroid
