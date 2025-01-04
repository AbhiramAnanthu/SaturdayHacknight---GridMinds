import React from 'react'
import NavBar from '../components/NavBar'
import Asteroids from '../components/Asteroids'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Asteroids/>
      <Asteroids/>
      <Asteroids/>
    </>
  )
}

export default Home
