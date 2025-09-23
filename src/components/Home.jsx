import React from 'react'
import HomePage from './HomePage'
import AboutCards from './SubComponents/AboutCards';
import ServiceCard from './SubComponents/ServiseCard';

function Home() {
  return (
    <div>
      <HomePage/>
      <AboutCards/>
      <ServiceCard/>
      
    </div>
  )
}

export default Home;
