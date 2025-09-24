import React from 'react'
import AboutPage from './AboutComponents/AboutPage'
import AboutCards from './SubComponents/AboutCards'
import MissionVision from './AboutComponents/MissionVision'
import TeamSection from './SubComponents/TeamSection'
import Portfolio from './SubComponents/Portfolio'

function About() {
  return (
    <div className='mt-24'>
      <AboutPage/>
      <AboutCards/>
      <MissionVision/>
      <TeamSection/>

    </div>
  )
}

export default About
