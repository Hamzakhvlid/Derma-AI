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
    <div className="mt-[6vh] flex justify-center signupbg  items-center">
      <div className="flex justify-center  items-center flex-col rounded-md drop-shadow-lg md:drop-shadow  md:bg-transparent w-[80%] md:w-full">
        <h1 className="mt-[8%] lg:mt-[2%] font-bold text-sm lg:text-lg text-blue-900 md:text-white">
          Signup
        </h1>

        <hr className="border-[#f4581c] border-width-1px height-1px mt-[1%] w-[30%]" />
        <form
          className="flex mt-2 gap-1  flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 xl:flex-row xl:justify-between">
            <div className="flex flex-col">
              <label className="text-white" htmlFor="first_name">
                First Name
              </label>
              <input
                className=""
                type="text"
                id="first_name"
                name="first_name"
                placeholder="John"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && touched.first_name ? (
                <p className="">{errors.first_name}*</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label className="text-white" htmlFor="last_name">
                Last Name
              </label>
              <input
                className=""
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Doe"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && touched.last_name ? (
                <p className="">{errors.last_name}*</p>
              ) : null}
            </div>
          </div>
        
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className=""
            type="email"
            name="email"
            id="email"
            placeholder="john@gmail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="">{errors.email}*</p>
          ) : null}
         
          <label className="text-white" htmlFor="username">
            Username
          </label>
          <input
            className=""
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="">{errors.username}*</p>
          ) : null}
        
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            className=""
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="">{errors.password}*</p>
          ) : null}
         
          <label className="text-white" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            className=""
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="">{errors.confirm_password}*</p>
          ) : null}

          <div className="flex justify-between items-center">
            <h1 className="text-white underline hover:underline-offset-4 mt-[2%]">
              <Link href={"forgotpassword"}>Forgot Password?</Link>
            </h1>
          </div>
          <button
            type="submit"
            className="mt-[4%]  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
          >
            Signup
          </button>
        </form>
        <h1 className="text-center pt-[1rem] pr-[4rem] text-md text-blue-900 md:text-white">
          if you don't have any account?{" "}
          <a className="text-[#f4581c] underline hover:underline-offset-4 absolute">
            <Link href="/login">Login</Link>
          </a>
        </h1>
        <h1 className="text-center mt-[1%] text-md text-blue-900 md:text-white">
          Or login with
        </h1>

        <div className="flex w-full justify-center">
          <img
            className="inline w-[5%] h-[5%] md:w-[3%] md:h-[3%] "
            src="googleLogo.png"
            alt=""
          />
          <img
            className="inline w-[5%] h-[5%] md:w-[3%] md:h-[3%] "
            src="appleLogo.png"
            alt=""
          />
        </div>
      </div>
    </div>

    
  );
}
