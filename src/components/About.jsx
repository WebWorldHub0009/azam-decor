import React from 'react'
import AboutPage from './AboutComponents/AboutPage'
import AboutCards from './SubComponents/AboutCards'
import MissionVision from './AboutComponents/MissionVision'

function About() {
  return (
    <div>
      <AboutPage/>
      <AboutCards/>
      <MissionVision/>
    </div>
  )
}

export default About
