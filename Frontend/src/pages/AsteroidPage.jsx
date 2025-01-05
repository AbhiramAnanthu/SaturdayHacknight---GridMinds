import React from 'react'
import Asteroid from '../components/Asteroid'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router-dom'

const AsteroidPage = () => {
  const location = useLocation();
  const {asteroid, number} = location.state;
  console.log(asteroid);
  return (
    <>
      <NavBar/>
      <Asteroid asteroid={asteroid} number={number}/>
    </>
  )
}

export default AsteroidPage
