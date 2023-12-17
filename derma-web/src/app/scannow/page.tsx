'use client';
import React from 'react'
import { useEffect } from 'react';
import {motion} from 'framer-motion'

import { useState } from 'react';

import { text } from 'stream/consumers';

import shuffleMe from './shuffle.jsx';
import TextScramble, { ScrambleText } from '@twistezo/react-text-scramble';
import { table } from 'console';
//@ts-ignore
import { FilePicker } from 'react-file-picker'
import FileUploadComponent from './filecomponent';





  

const scannow = () => {
  
  var textHello = "Hello i'm hamza";
  var scrambleText:ScrambleText=textHello;
  var textsList:ScrambleText[] = [textHello];

  const [open, setOpen] = useState(false)
       
  const [pauseTime, setpause] = useState(true);
 setTimeout(() => {setpause(true)
console.log("event thrown it is paused")
}, 4000);
    


  

  
  
 
 
  return (
    <div className='flex pt-[20%]'>
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
        <img src="skin.png" alt="" className='md:w-[50%] hidden  md:block md:h-[50%] md:ml-[-13%]'/>
        <img src="skin.png" alt=" " className="md:w-[50%] hidden md:block md:h-[50%] md:ml-[-25%]" />
        <img src="skin.png" alt=" " className="md:w-[50%] hidden  md:block   md:h-[50%] md:ml-[-25%] " />
        <img src="skin.png" alt=" " className="md:w-[50%]  hidden md:block md:h-[50%] md:ml-[-25%] " />
       
     
     
  
    </div>
    
  )
}

export default scannow