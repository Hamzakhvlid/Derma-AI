"use client";
import Image from 'next/image'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Team from './components/Team';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ScanHistory from './components/scanhistory';
import AppointmentHistory from './components/appointmenthistory';


export default function HomePage() {
  return (
   <div className='bg-white fancybackground'>
   
    
     <Hero />
     <div className='px-7 mb-5'><AppointmentHistory /></div>
      <Services />
      <Features  /> 
      <Team />
      <Testimonials />
      <FAQs/>
      <Contact />
      < Footer />  
     
     
      
  </div>
  )
}
