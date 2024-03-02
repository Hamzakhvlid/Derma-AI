"use client";
import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Login from "../imageMoving";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"),""], "Passwords must match")
    .required("Required"),
});

export default function SignUpPage() {
  return (
    <div className="min-w-full min-h-screen relative bg-cover bg-center">
      <div
        className={`mx-auto mt-[30%] md:mt-[5rem] md:ml-[26%] ml-[2.5rem] rounded-lg w-[90%] md:w-[100%] lg:w-[50%] md:h-[70vh] h-[30rem] justify-center relative z-10`}
      >
        <h1 className="text-center pt-[20%] font-bold text-lg text-blue-900 md:text-white">
          SignUp
        </h1>
        <hr className="border-[#f4581c] border-width-1px height-2px mt-[3%] w-[70%] md:w-[60%] md:ml-[20%] ml-[15%]" />

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // Handle form submission here
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="ml-[15%] md:ml-[20%]">
              <Field
                type="name"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={`border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[40%] h-12 mt-[5%] ${
                  errors.firstName && touched.firstName ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />

              <Field
                type="name"
                id="lastName"
                name="lastName"
                placeholder="Second Name"
                className={`border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[40%] h-12 mt-[3%] md:ml-3 ${
                  errors.lastName && touched.lastName ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />

              {/* ... other fields and error messages ... */}

              <button
                type="submit"
                className="mt-[4%] bg-[#f4581c] rounded-[25px] hover:bg-opacity-90 h-[35px] w-[70px] text-white font-sans ml-[40%] md:ml-[45%]"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>

        {/* ... rest of your component ... */}
      </div>
    </div>
  );
}