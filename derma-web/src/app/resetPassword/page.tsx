"use client";
import React from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../schemas";
import {
  baseUrl,
  forgotPassword,
  resetForgotPassword,
  signup,
} from "../api/baseUrl";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import SucessMessage from "../forgotPassword/sucessMessage";
import { url } from "inspector";
import { toast } from "react-toastify";
interface Values {
  password: string;
  confirm_password: string;
}
//initial values for form
const initialValues = {
  password: "",
  confirm_password: "",
};

export default function ResetPasswordPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resetToken = urlParams.get("token");
    if (resetToken) {
      // Set state to show password fields (See Step 2)
      setToken(resetToken);
    }
  }, [initialValues]);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          const response = await fetch(resetForgotPassword, {
            method: "POST",
            body: JSON.stringify({ password: values.password, email: "mmansar000@gmail.com" }),
            headers: {
              authorization: token,
            },
          });

          if (response.status === 200) {
            toast("Password reset successfully");
            setMessage("Password reset successfully");
          } else {
            setMessage("Password reset failed please try again later");
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
          setMessage("Password reset failed please try again later");
          setLoading(false);
        }
        action.resetForm();
      },
    });

  return (
    <div className="fancybackground wrapper  h-[100vh]">
      <div className=" p-2  md:pt-0 flex justify-center ">
        <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9] mt-[5rem] rounded-md drop-shadow-lg  md:w-[60%] lg-[50%] xl:w-[40%]">
          {message != "Password reset successfully" ? (
            <>
              <h1 className="font-bold text-sm lg:text-lg text-blue-900 self-center ">
                Reset Password
              </h1>

              <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[30%] self-center" />
              {message != "" ? (
                <div className="bg-[#f3d8d9] m-1">
                  {" "}
                  <p className="error-message text-sm ">{message}*</p>
                </div>
              ) : (
                <></>
              )}
              <form
                className="flex mt-2 gap-1  flex-col justify-center "
                onSubmit={handleSubmit}
              >
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
                  <p className="error-message text-sm">
                    {errors.confirm_password}*
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
                >
                  {loading ? (
                    <img
                      src="loader.gif"
                      className="w-14 h-14 relative left-[30%]"
                      alt="loader"
                    />
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </>
          ) : (
            <SucessMessage message={message} />
          )}
        </div>
      </div>
    </div>
  );
}
