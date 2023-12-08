import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Login from "../imageMoving";

export default  function LoginPage() {
  


  return (
    <div  className="min-w-full min-h-screen " >
        
 
      <div className={`mx-auto  mt-[23%] md:mt-[5rem] md:ml-[26%] bg-blue-900 ml-[2.5rem]  rounded-lg w-[90%] md:w-[100%] lg:w-[50%] md:h-[70vh] h-[30rem]  justify-center  `}>
        
        <h1 className='text-center pt-[5%] font-bold text-lg text-white'>Login</h1>
        <hr className="border-[#f4581c] border-width-1px height-2px mt-[3%] w-[70%] ml-[16%]" />

        <form className="ml-[15%] md:ml-[20%]">
          <input type="email" id="email" placeholder=" Email " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[5%]' />
          <input type="password" id="password" placeholder=" Password " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%] mb-3' /><br />
          <a href='https://www.google.com' className='text-[#f4581c] underline hover:underline-offset-4 ml-[35%] pt-[20%] md:ml-[40%]'><Link href='ForgotPassword'>forgot password?</Link></a>
        </form>

        <button className=" mt-[4%] bg-[#f4581c] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans ml-[40%] md:ml-[45%] " >login</button>
        <h1 className='text-center pt-[2%]  mt-2 text-md text-white'>Or login with</h1>
        <div className='flex-row justify-center mt-2'>
            <div className="flex pl-[45%]">
          <img className=" w-[20%] h-[20%] md:w-[10%] md:h-[10%] " src="googleLogo.png" alt="" />
          <img className="w-[20%] h-[20%] md:w-[9%] md:h-[9%] " src="appleLogo.png" alt="" />
          </div>
          <h1 className='text-center pt-[2%]  pr-[4rem]  text-md text-white'>if you don't have any account? <a className='text-[#f4581c] underline hover:underline-offset-4 absolute'><Link href='/Signup'>Signup</Link></a></h1>
        </div>
        
       
      </div>
    </div>
  );
}