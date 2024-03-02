import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Login from "../imageMoving";
import Image from "next/image";

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

        <form className="ml-[15%] md:ml-[20%]">
          <input
            type="name"
            id="fname"
            placeholder=" First Name"
            className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[40%] h-12 mt-[5%]"
          />
          <input
            type="name"
            id="lname"
            placeholder=" Second Name"
            className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[40%] h-12 mt-[3%] md:ml-3"
          />
          <input
            type="email"
            id="email"
            placeholder=" Email "
            className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%]"
          />
          <input
            type="password"
            id="password"
            placeholder=" Password "
            className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%] "
          />
          <input
            type="password"
            id="cpassword"
            placeholder=" Confirm Password"
            className="border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%]"
          />
        </form>

        <button className="mt-[4%] bg-[#f4581c] rounded-[25px]  hover:bg-opacity-90  h-[35px] w-[70px] text-white font-sans ml-[40%] md:ml-[45%]">
          Sign up
        </button>
        <h1 className="text-center pt-[2%] mt-2 text-md text-blue-900 md:text-white">
          Or login with
        </h1>
        <div className="flex pl-[45%]">
          <img
            className=" w-[20%] h-[20%] md:w-[10%] md:h-[10%] "
            src="googleLogo.png"
            alt=""
          />
          <img
            className="w-[20%] h-[20%] md:w-[9%] md:h-[9%] "
            src="appleLogo.png"
            alt=""
          />
        </div>
        <h1 className="text-center pt-[2%] pr-[4rem] text-md text-blue-900 md:text-white">
          if you don't have any account?{" "}
          <a className="text-[#f4581c] underline hover:underline-offset-4 absolute">
            <Link href="/Signup">Signup</Link>
          </a>
        </h1>
      </div>

      <div className="">
        <img
          src="blob.svg"
          alt="Blob SVG"
          className="absolute filter  hidden md:block w-[60rem]  drop-shadow-s md:top-[-7%] md:left-[21%]   "
        />
        <div className=" "></div>
      </div>
    </div>
  );
}
