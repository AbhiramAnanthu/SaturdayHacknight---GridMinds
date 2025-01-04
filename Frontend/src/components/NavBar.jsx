import React from 'react'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
    const navigate = useNavigate()
  return (
    <>
     <div className=" fixed top-0 left-0 right-0 flex justify-between text-white font-poppins bg-black h-[70px] pt-[15px] pb-[15px] font-bold text-4xl pl-[20px] z-50">Astro Nav
      <button className=" flex justify-end pt-1.5 text-white font-poppins  font-bold text-xl mr-[40px] px-4 py-2 rounded transition duration-300 hover:bg-orange-700 hover:shadow-lg" onClick={() => navigate("/")}>Home</button>
      </div>
    </>
  )
}

export default NavBar
