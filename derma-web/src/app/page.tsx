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
import HomePage from './homePage/page';
import LoginPage from './login/page';
import SignupPage from './signup/page';
import Providers from './lib/provider';





export default function Home() {
  return (
   <div className='bg-black'>


  <HomePage/>


     

     
      
  </div>
  )
}
