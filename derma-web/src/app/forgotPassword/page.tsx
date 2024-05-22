"use client";
import React from "react";
import { useFormik } from "formik";
import { forgotPasswordSchema, signupSchema } from "../schemas";
import { forgotPassword } from "../api/baseUrl";
import axios from "axios";
import {  useState } from "react";
import "./style.css";
import SucessMessage from "./sucessMessage";
interface Values {
 
  email: string;

 
}
//initial values for form
const initialValues = {
 
  email: "",
  
};

export default function ResetPasswordPage() {
  const [showSuccess, setShowSuccess] = useState(false);
 const [isLoading, setIsLoading] = useState(false);
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values, action) => {
        setIsLoading(true);
       
        try{
         
          const response = await axios.post(forgotPassword, values,);
         
          setIsLoading(false);

          if(response.status==200){
            setShowSuccess(true);
          }
         
        }catch (error){
          alert(JSON.stringify(error));
        }
        action.resetForm();
      },
    });

  return (
    <div className="fancybackground wrapper  h-[100vh]">
    <div className=" p-2  md:pt-0 flex justify-center ">
      <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9] mt-[5rem] rounded-md drop-shadow-lg  md:w-[60%] lg-[50%] xl:w-[40%]">
      {showSuccess?<SucessMessage message="Password reset email has been sent to your mail. Check your inbox." />:<> <h1 className="font-bold text-sm lg:text-lg text-blue-900 self-center ">
          Forgot Password
        </h1>

      

        <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" />
        <form
          className="flex mt-2 gap-1  flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="john@gmail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="error-message text-sm">{errors.email}*</p>
          ) : null}
           
        
         
    
          <button
            type="submit"
            className="mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
          >
           {isLoading?<div className="flex flex-row  justify-center   w-[100%] "><img className="w-[70px]   " src="loader.gif"></img></div>:<>Send Email</>}
          </button>
        </form>

       </>}
       
      </div>
    </div>
    </div>

    
  );
}
