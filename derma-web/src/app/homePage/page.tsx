
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

import AppointmentHistory from './components/appointmenthistory';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import axios from 'axios';


import ScanHistory from './components/scans';
import { use } from 'react';
import {  getProfile } from '../api/baseUrl';
import { login, logout } from '../lib/authSlice';
import { setProfile, setUser } from '../lib/reducers/loggedinUser';
import { signOut } from '@/auth';

export default function HomePage() {
  const role=useSelector((state:any)=>state.user.profile?.role);
  const isLogin=useSelector((state:any)=>state.auth.isLogin) ;
  const token=useSelector((state:any)=>state.user.profile?.accessToken);
  const dispatch = useDispatch();

  
  


  return (
   <div className={`fancybackground`}>

    
     <Hero />
     {isLogin?<>
     {role==='dcotor'? <></>:<div className='px-7 mb-5'><AppointmentHistory /></div>}
    <ScanHistory /></>: <></>}

      <Services />
      <Features  /> 
      <Team />
    
      <FAQs/>
      <Contact />
      < Footer />  
     
     
      
  </div>
  )
}
