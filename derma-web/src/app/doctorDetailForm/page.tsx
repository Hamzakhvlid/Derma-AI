"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { signup } from "../Api/baseUrl";
import { useEffect } from "react";
import axios from "axios";

import "./style.css";
import SucessMessage from "../forgotPassword/sucessMessage";
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}
//initial values for form
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
  confirm_password: "",
};







// Render the Counter component inside the SignUpPage component

export default function SignUpPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);

   
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
   
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: async (values, action) => {
        try{
          const response = await axios.post(signup, values);
          console.log(response);
          setIsLoading(false);

          if(response.status==201){
            setShowSuccess(true);
            setCount(1);
          }
        }catch (error){
          alert(JSON.stringify(error));
        }
        action.resetForm();
      },
    });

    if (showSuccess&&count > 4) {
      window.location.href = "/login";
    }

  return (
    <div className="fancybackground wrapper  h-[100vh]">
    <div className=" p-2  md:pt-0 flex justify-center ">
      <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9] mt-[5rem] rounded-md drop-shadow-lg  md:w-[60%] lg-[50%] xl:w-[40%]">
        <h1 className="font-bold text-[1.3rem]  text-blue-900 self-center ">
          Doctor Profile
        </h1>
        <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" />
        <form className="flex mt-2 gap-1  flex-col justify-center " onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="flex flex-col  md:flex-row gap-1">
            <div className=" flex-col w-[100%]">
              <label className="label" htmlFor="nic">
                NIC
              </label>
              <input className="input" type="text" id="nic" name="nic" placeholder="Enter NIC" onChange={handleChange} onBlur={handleBlur} />
            
            </div>
            <div className=" flex-col w-[100%]">
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <input className="input" type="text" id="phone" name="phone" placeholder="Enter Phone Number"  onChange={handleChange} onBlur={handleBlur} />

            </div>
          </div>
  
          {/* Professional Information */}
          <label className="label" htmlFor="hospital">
            Hospital
          </label>
          <input className="input" type="text" id="hospital" name="hospital" placeholder="Enter Hospital Name" onChange={handleChange} onBlur={handleBlur} />
         
  
          <label className="label" htmlFor="specialization">
            Specialization
          </label>
          <input className="input" type="text" id="specialization" name="specialization" placeholder="Enter Specialization"  onChange={handleChange} onBlur={handleBlur} />
          
  
          {/* Add other fields (desc, detailedRole, servicesOffered, specialServices, imageUrl, etc.) in a similar way */}
  
          {/* Qualifications and Experience (Dynamic) */}
          {/* ... (Implementation for qualifications and experience sections) */}
  
          {/* FAQs (Implementation depending on desired UI) */}
          {/* ... (Implementation for FAQs section) */}
  
          <button type="submit" className="mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans ">
            {isLoading ? (
              <div className="flex flex-row  justify-center   w-[100%] ">
                <img className="w-[70px]   " src="loader.gif"></img>
              </div>
            ) : (
              <>Submit</>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
    
  );
}
