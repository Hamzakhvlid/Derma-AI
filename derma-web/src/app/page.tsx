"use client";
import Image from 'next/image'
import Navbar from './homePage/components/Navbar'
import Hero from "./homePage/components/Hero";
import Insurance from "./homePage/components/Insurance";
import Services from "./homePage/components/Services";
import Team from "./homePage/components/Team";
import Testimonials from "./homePage/components/Testimonials";
import FAQs from "./homePage/components/FAQs";
import Contact from "./homePage/components/Contact";
import Footer from "./homePage/components/Footer";
import Features from "./homePage/components/Features";
import Doctors from './homePage/components/doctors/page';
import HomePage from './homePage/homepage';
import LoginPage from './login/login';



export default function Home() {
  return (
   <div className='bg-white'>
   
  <LoginPage/>
     
     
      
  </div>
  )
}
