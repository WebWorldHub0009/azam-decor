import React from 'react'
import HomePage from './SubComponents/HomePage'
import AboutCards from './SubComponents/AboutCards';
import ServiceCard from './SubComponents/ServiseCard';
import Portfolio from './SubComponents/Portfolio';
import ContactHome from './SubComponents/ContactHome';
import Counters from './SubComponents/Counters';

function Home() {
  return (
    <div>
      <HomePage/>
      <AboutCards/>
      <Counters/>
      <ServiceCard/>
      <Portfolio/>
      <ContactHome/>
      
    </div>
  )
}

export default Home;
