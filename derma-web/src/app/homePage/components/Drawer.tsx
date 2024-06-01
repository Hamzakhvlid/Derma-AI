"use client";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import "@radix-ui/themes/styles.css";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";

//tailwind
const textstyle =
  "text-base text-gray-800  font-semibold";
const box =
  "flex mb-2 justify-start items-center gap-4 pl-5  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto";

export default function Drawer(props: { close: any }) {
  return (
    <div className="p-6 bg-white z-2 fixed top-0 left-0 shadow-lg min-h-screen ">
      <div className="flex flex-col justify-start item-center">
        <div className="flex gap-2">
          <IoClose size="24" onClick={props.close} />
        </div>
        <div className=" my-4 border-b border-gray-100 pb-4">
          <Link href={"/privacy-policy"} className={`${box}`} onClick={props.close}>
            <MdOutlinePrivacyTip className="text-2xl text-gray-600  " />
            <h3 className={`${textstyle}`}>Privacy Policy</h3>
            
          </Link>
          <Link href={"/about-us"} className={`${box}`} onClick={props.close}>
            <FcAbout className="text-2xl text-gray-600 " />
            <h3 className={`${textstyle}`}>About us</h3>
          </Link>
          
        </div>
       
      </div>
    </div>
  );
}
