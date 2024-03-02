'use client';
import Link from "next/link";
import { useAppSelector } from "../lib/store";
import { useState } from "react";

export default function LoginPage() {
  const authState = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
 
    <div className="min-w-full min-h-screen relative bg-cover bg-center" >
      <div className={`mx-auto mt-[30%] md:mt-[5rem] md:ml-[26%] ml-[2.5rem] rounded-lg w-[90%] md:w-[100%] lg:w-[50%] md:h-[70vh] h-[30rem] justify-center relative z-10 ${authState.isLogin==false}`}>
        <h1 className='text-center pt-[20%] font-bold text-lg text-blue-900 md:text-white'>Login</h1>
        <hr className="border-[#f4581c] border-width-1px height-2px mt-[3%] w-[70%] md:w-[60%] ml-[20%]" />

        <form className="ml-[2rem] md:ml-[10rem]" action={'submitForm'}>
          <input type="email" id="email" placeholder=" Email " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[20rem] md:w-[25rem] h-12 mt-[5%]' />
          <input type="password" id="password" placeholder=" Password " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[20rem] md:w-[25rem] h-12 mt-[3%] mb-3' /><br />
          <a href='https://www.google.com' className='text-[#f4581c] underline hover:underline-offset-4 ml-[35%] pt-[20%] md:ml-[40%]'><Link href='Forgotassword'>forgot password?</Link></a>
        </form>

        <button
         type="submit"
         className="mt-[4%]  bg-[#f4581c] rounded-[25px]  hover:bg-opacity-90  h-[35px] w-[70px] text-white font-sans ml-[40%] md:ml-[45%]">login</button>
        <h1 className='text-center pt-[2%] mt-2 text-md text-blue-900 md:text-white'>Or login with</h1>
        <div className="flex pl-[45%]">
          <img className=" w-[20%] h-[20%] md:w-[10%] md:h-[10%] " src="googleLogo.png" alt="" />
          <img className="w-[20%] h-[20%] md:w-[9%] md:h-[9%] " src="appleLogo.png" alt="" />
          </div>
        <h1 className='text-center pt-[2%] pr-[4rem] text-md text-blue-900 md:text-white'>if you don't have any account? <a className='text-[#f4581c] underline hover:underline-offset-4 absolute'><Link href='/signup'>Signup</Link></a></h1>
      </div>
      
      <div  className=""> 
     

      
      <img
      
   
        src="blob.svg"
        alt="Blob SVG"
       
      
        className="absolute filter  hidden md:block w-[55rem]  drop-shadow-s md:top-[-7%] md:left-[24%]   "
        
      />

      <div  className=" "></div></div>
      
    </div>
   
  );
}
