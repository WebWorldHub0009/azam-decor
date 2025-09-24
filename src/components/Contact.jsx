import React from 'react'
import ContactHero from './ContactComponents/ContactHero'
import ContactPage from './ContactComponents/ContactPage'
import GetInTouch from './ContactComponents/GetInTouch'

function Contact() {
  return (
    <div className='mt-24'>
      <ContactHero/>
      <ContactPage/>
      <GetInTouch/>
    </div>
  )
}

export default Contact
