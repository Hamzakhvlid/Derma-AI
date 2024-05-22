
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
import { useTheme } from "next-themes";





export default function HomePage() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
   <div className={`bg-white dark:bg-gray-900 ${resolvedTheme === 'dark' ? '' : 'fancybackground'} `}>
   
    
     <Hero />
     <div className='px-7 mb-5'><AppointmentHistory /></div>
      <Services />
      <Features  /> 
      <Team />
    
      <FAQs/>
      <Contact />
      < Footer />  
     
     
      
  </div>
  )
}
