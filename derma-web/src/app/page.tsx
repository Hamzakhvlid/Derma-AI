"use client";
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Insurance from "./components/Insurance";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Doctors from './components/doctors/page';

export default function Home() {
  return (
  <div className='bg-white'>
    <Navbar/>
     <Hero />
      <Services />
      <Features  /> 
      <Team />
      <Testimonials />
      <FAQs />
      <Contact />
      < Footer /> 
      
  </div>
  )
}
