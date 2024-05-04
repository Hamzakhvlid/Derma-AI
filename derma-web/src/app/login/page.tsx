"use client";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useState } from "react";
import axios from "axios";
import { loginApi } from "../Api/baseUrl";
import { actions } from "../lib/authSlice";
import { setProfile } from "../lib/reducers/loggedinUser";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "../lib/store";
import { useRouter } from "next/navigation";
import "./style.css";
import { toast } from "react-toastify";
//initial values for form
const initialValues = {
  identifier: "",
  password: "",
};
export default function LoginPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        try {
          await axios.post(loginApi, values).then((response) => {
            setError("");
            setIsLoading(false);
            if (response.status == 200) {
              setShowSuccess(true);
              dispatch(actions.login(true));
              localStorage.setItem("auth_token", response.data.data.accessToken);
              toast(response.data.message);
              router.push("/");
              dispatch(setProfile(response.data));
            } else {
              setError(response.data.message);
              toast(response.data.message)
            }
          });
        } catch (error: any) {
          console.log(error.message);
          toast(error.message);
          setError(
            "Invalid Credentials either username or password is incorrect"
          );
        }
        action.resetForm();
      },
    });
  return (
    <div className="fancybackground wrapper h-[100vh]">
      <div className=" p-2  md:pt-0 flex justify-center ">
        <div className="flex  items-center flex-col p-4 mt-[4rem] bg-[#f1f5f9]  shadow  rounded-md  w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] ">
          <h1 className="mt-[8%] lg:mt-[2%] font-bold text-xl text-blue-900">
            Login
          </h1>

          <hr className="border-[#f4581c] border-width-1px height-2px mt-[1%] w-[30%]" />
          {error.length > 0 ? (
            <div className="bg-[#f3d8d9] m-1">
              {" "}
              <p className="error-message text-sm ">{error}*</p>
            </div>
          ) : (
            <></>
          )}
          <form
            className="flex mt-2  flex-col w-full justify-center "
            onSubmit={handleSubmit}
          >
            <label className="label" htmlFor="identifier">
              Email/Username
            </label>
            <input
              className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg p-2 "
              type="text"
              name="identifier"
              id="identifier"
              value={values.identifier}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.identifier && touched.identifier ? (
              <p className="error-message text-sm">{errors.identifier}*</p>
            ) : null}

            <br className="hidden md:flex" />

            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className=" p-2 border-2 border-rgba(0, 0, 0, 0.24) rounded-lg  "
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
            <br className="hidden md:flex" />

            <div className="flex justify-between items-center">
              <h1 className="text-[#f4581c] underline hover:underline-offset-4 ">
                <Link href={"/forgotPassword"}>Forgot Password?</Link>
              </h1>
            </div>

            <button
              type="submit"
              className="mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
            >
              Login
            </button>
          </form>
          <h1 className="text-center pt-[1rem] pr-[4rem] text-md text-blue-900 ">
            if you don't have any account?{" "}
            <a className="text-[#f4581c] underline hover:underline-offset-4 pl-[.1rem] text-[1rem]">
              <Link href="/signup">Signup</Link>
            </a>
          </h1>
          <h1 className="text-center mt-[1%] text-md text-blue-900 ">
            Or login with
          </h1>

          <div className="flex w-full  justify-center">
            <img
              className="inline w-[2.4rem] h-[2.4rem] "
              src="googleLogo.png"
              alt=""
            />
            <img
              className="inline w-[2rem] h-[2rem] "
              src="appleLogo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
