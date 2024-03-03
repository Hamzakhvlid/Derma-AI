'use client';
import Link from "next/link";
import { useAppSelector } from "../lib/store";
import { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";

//initial values for form
const initialValues = {
  email: "",
  password: "",
};
export default function LoginPage() {
  // const authState = useAppSelector((state) => state.auth);

  // const [formData, setFormData] = useState({ name: '', email: '' });

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('/api/submit', {
  //       method: 'POST',
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await response.json();
  //     // Handle response data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        alert(JSON.stringify(values))
        action.resetForm();
      },
    });
  return (
 
    <div className="pt-[2%] min-h-screen signupbg flex justify-center items-center">
      <div className="flex justify-center items-center flex-col rounded-md drop-shadow-lg md:drop-shadow bg-[#49407596] md:bg-transparent w-[80%] md:w-full">
        <h1 className="mt-[8%] lg:mt-[2%] font-bold text-xl text-blue-900 md:text-white">
          Login
        </h1>

        <hr className="border-[#f4581c] border-width-1px height-2px mt-[1%] w-[30%]" />
        <form
          className="flex mt-2  flex-col justify-center w-[90%] md:w-[35%] lg:w-[25%]"
          onSubmit={handleSubmit}
        >
          
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg  h-12 mt-[1%] mr-[1%]"
            type="email"
            name="email"
            id="email"
            placeholder="john@gmail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="text-white text-sm">{errors.email}*</p>
          ) : null}
          <br className="hidden md:flex"/>
          
          
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <input
            className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg  h-12 mt-[1%] mr-[1%]"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="text-white text-sm">{errors.password}*</p>
          ) : null}
          <br className="hidden md:flex"/>
          

          <div className="flex justify-between items-center">
            <h1 className="text-white underline hover:underline-offset-4 mt-[2%]">
              <Link href={"forgotpassword"}>Forgot Password?</Link>
            </h1>
          </div>
          <button
            type="submit"
            className="mt-[4%]  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
          >
            Login
          </button>
        </form>
        <h1 className="text-center pt-[1rem] pr-[4rem] text-md text-blue-900 md:text-white">
          if you don't have any account?{" "}
          <a className="text-[#f4581c] underline hover:underline-offset-4 absolute">
            <Link href="/signup">Signup</Link>
          </a>
        </h1>
        <h1 className="text-center mt-[1%] text-md text-blue-900 md:text-white">
          Or login with
        </h1>

        <div className="flex w-full items-center justify-center">
          <img
            className="inline w-[10%] h-[10%] md:w-[3%] md:h-[3%] "
            src="googleLogo.png"
            alt=""
          />
          <img
            className="inline w-[10%] h-[10%] md:w-[3%] md:h-[3%] "
            src="appleLogo.png"
            alt=""
          />
        </div>
      </div>
    </div>
   
  );
}
