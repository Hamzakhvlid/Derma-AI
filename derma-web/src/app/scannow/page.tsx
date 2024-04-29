'use client';
import React from 'react'
import { useEffect } from 'react';

import { motion } from 'framer-motion';

import { useState } from 'react';

import { text } from 'stream/consumers';

import shuffleMe from './shuffle.jsx';
import TextScramble, { ScrambleText } from '@twistezo/react-text-scramble';
import { table } from 'console';
//@ts-ignore
import { FilePicker } from 'react-file-picker'
import FileUploadComponent from './filecomponent';

import "./style.css";



  

const scannow = () => {
  


  const [open, setOpen] = useState(false)
       
  const [pauseTime, setpause] = useState(true);
 setTimeout(() => {setpause(true)
console.log("event thrown it is paused")
}, 4000);
    


  

  
  
 
 
  return (
    <div className='flex pt-[20%] flex-col'>
      <div className='absolute flex mb-[-40%]'>
      <motion.img animate={{ y:150 }}
          transition={{ duration: 3 }}
          className=" ml-[2%]  md:mt-[-10%] mt-[5%] h-[25%] w-[25%]  "
          src="robot1.png"
          alt="" />
           <motion.img animate={{ y:120 }}
          transition={{ duration: 3 }}
          className="md:mt-[-10%]  mt-[5%] h-[35%] w-[35%]  "
          src="robot2.png"
          alt="" />
         

           
         
           <motion.img animate={{ y:120 }}
          transition={{ duration: 3 }}
          className=" ml-[-8%]  mt-[3%] md:mt-[-10%] h-[25%] w-[25%]  "
          src="robot3.png"
          alt="" />
           <motion.img animate={{ y:150 }}
          transition={{ duration: 3 }}
          className="  md:mt-[-5%] mt-[3%] h-[25%] w-[25%]  "
          src="robot4.png"
          alt="" />
          <FileUploadComponent ></FileUploadComponent>
      </div>
      <div className=' flex-row  fixed bottom-0 left-0 right-0 flex justify-center pb-[2.5rem] md:pb-0'>
        <img src="skin.png" alt="" className='image'/>
        <img src="skin.png" alt=" " className="image" />
        <img src="skin.png" alt=" " className="image " />
        <img src="skin.png" alt=" " className="image " />
        <img src="skin.png" alt=" " className="image " />
        <img src="skin.png" alt=" " className="image " />
        </div>
     
     
  
    </div>
    
  )
}

export default scannow