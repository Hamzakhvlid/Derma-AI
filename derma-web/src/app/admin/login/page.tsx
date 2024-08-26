"use client";
import Link from "next/link";
import { useFormik } from "formik";

import { useState } from "react";
import axios from "axios";
import { loginApi } from "@/app/api/baseUrl";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

//initial values for form
const initialValues = {
  identifier: "",
  password: "",
};
export default function LoginPage() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setUserPassword] = useState("");
  const [username, setUsername] = useState("");
 const router =useRouter();


 
 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      setIsLoading(true);
        const response = await axios.post(loginApi , {
          identifier: username,
          password: password,
     
        });
        
        console.log("request sent one time")
        const res_data = response.data;
       
      
        setError("");
        setIsLoading(false);

        if(response.status==200){
          console.log(response.data.data.accessToken);
          localStorage.setItem("accessToken", response.data.data.accessToken);
          router.push("/admin");
    } 
  }catch (error) {
      // Handle login error
      setError("Invalid username or password");
    }

    setIsLoading(false);
  };

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
            <label className="label" htmlFor="username">
              Email/Username
            </label>
            <input
              className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg p-2 "
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <br className="hidden md:flex" />

            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className=" p-2 border-2 border-rgba(0, 0, 0, 0.24) rounded-lg  "
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <br className="hidden md:flex" />

          
            <button
              type="submit"
              className="mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
            >
              {isLoading ? (
                <img
                  src="loader.gif"
                  className="w-14 h-14 relative left-[30%]"
                  alt="loader"
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
