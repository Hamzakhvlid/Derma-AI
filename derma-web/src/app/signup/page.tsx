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
          Signup
        </h1>

        <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" />
        <form
          className="flex mt-2 gap-1  flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col  md:flex-row gap-1">
            <div className=" flex-col w-[100%]">
              <label  className="label" htmlFor="first_name">
                First Name
              </label>
              <input
                  className="input"
                type="text"
                id="first_name"
                name="first_name"
                placeholder="John"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && touched.first_name ? (
                <p className="error-message text-sm">{errors.first_name}*</p>
              ) : null}
            </div>
            <div className=" flex-col w-[100%]">
              <label className="label"  htmlFor="last_name">
                Last Name
              </label>
              <input
                    className="input"
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Doe"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && touched.last_name ? (
                <p className="error-message text-sm">{errors.last_name}*</p>
              ) : null}
            </div>
          </div>
        
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
         
          <label className="label"  htmlFor="username">
            Username
          </label>
          <input
                  className="input"
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="error-message text-sm">{errors.username}*</p>
          ) : null}
        
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
                  className="input"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="error-message text-sm">{errors.password}*</p>
          ) : null}
         
          <label className="label" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
                  className="input"
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="error-message text-sm">{errors.confirm_password}*</p>
          ) : null}

    
          <button
            type="submit"
            className="mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
          >
            Signup
          </button>
        </form>
        <h1 className="text-center pt-[1rem] pr-[4rem] text-md text-blue-900 ">
          if you don't have any account?{" "}
          <a className="text-[#f4581c] underline hover:underline-offset-4 pl-[.1rem] text-[1rem]">
            <Link href="/login">Login</Link>
          </a>
        </h1>
        <h1 className="text-center mt-[1%] text-md text-blue-900 ">
          Or login with
        </h1>

        <div className="flex mt-2 gap-2 w-full justify-center">
          <img
            className="inlinew-[2.3rem] h-[2.3rem]  "
            src="googleLogo.png"
            alt=""
          />
          <img
            className="inline w-[2rem] h-[2rem]  "
            src="appleLogo.png"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>

    
  );
}
