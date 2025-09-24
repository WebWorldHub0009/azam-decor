import React from 'react'
import CertificatePage from './certificateComponents/CertificatePage'
import CertificateSection from './certificateComponents/CertificateSection'
import CertificateTestimonials from './certificateComponents/CertificateTestimonials'

function Certificate() {
  return (
    <div className='mt-24'>
     <CertificatePage/>
     <CertificateSection/>
     <CertificateTestimonials/>
    </div>
  )
}

export default Certificate
