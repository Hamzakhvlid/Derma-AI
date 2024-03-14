"use client";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { signup } from "../Api/baseUrl";
import axios from "axios";
import "./style.css";
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

export default function SignUpPage() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: async (values, action) => {
        try{
          const response = await axios.post(signup, values);
          console.log(response);
          alert(JSON.stringify(response));
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
        <h1 className="font-bold text-sm lg:text-lg text-blue-900 self-center ">
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
            Reset Password
          </button>
        </form>

       
      </div>
    </div>
    </div>

    
  );
}
