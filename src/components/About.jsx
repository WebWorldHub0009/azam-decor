import React from 'react'
import AboutPage from './AboutComponents/AboutPage'
import AboutCards from './SubComponents/AboutCards'
import MissionVision from './AboutComponents/MissionVision'
import TeamSection from './SubComponents/TeamSection'
import Portfolio from './SubComponents/Portfolio'
import TestimonialsAbout from './AboutComponents/TestimonialsAbout'

function About() {
  return (
    <div className='mt-24'>
      <AboutPage/>
      <AboutCards/>
      <MissionVision/>
      <TestimonialsAbout/>
      <TeamSection/>

    </div>
  )
}

export default About
