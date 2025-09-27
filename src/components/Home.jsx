import React from 'react'
import HomePage from './SubComponents/HomePage'
import AboutCards from './SubComponents/AboutCards';
// import HomeServices from './SubComponents/HomeServices';
import Portfolio from './SubComponents/Portfolio';
// import ContactHome from './SubComponents/ContactHome';
import Counters from './SubComponents/Counters';
import TeamSection from './SubComponents/TeamSection';
import ContactPage from './ContactComponents/ContactPage';
import WhyChooseUs from './SubComponents/WhyChooseUs';
import ContactPopup from './SubComponents/ContactPopup';
import FloatingActionButton from './SubComponents/FloatingActionButton';
import CertificateTestimonials from './certificateComponents/CertificateTestimonials';
import FAQSection from './SubComponents/FAQSection';

function Home() {
  return (
    <div>

      <FloatingActionButton/>
      <ContactPopup/>
      <HomePage/>
      <AboutCards/>
      <Counters/>
      {/* <HomeServices/> */}
      <TeamSection/>
      <Portfolio/>
      <CertificateTestimonials/>
      <WhyChooseUs/>
      <FAQSection/>
      <ContactPage/>
      
    </div>
  )
}

export default Home;
