"use client";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiMessageSquareDots } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

//tailwind
const textstyle =
  "text-base text-gray-800 group-hover:text-white font-semibold";
const box =
  "flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#007AFF] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto";

export default function Drawer(props: { close: any }) {
  return (
    <div className="p-6 bg-white z-2 fixed top-0 left-0 shadow-lg min-h-screen ">
      <div className="flex flex-col justify-start item-center">
        <div className="flex gap-2">
          <IoClose size="24" onClick={props.close} />
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 ">
            Doctor Dashboard
          </h1>
        </div>
        <div className=" my-4 border-b border-gray-100 pb-4">
          <div className={`${box}`}>
            <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Dashboard</h3>
            
          </div>
          <div className={`${box}`}>
            <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Profile</h3>
          </div>
          <div className={`${box}`}>
            <AiOutlineSchedule className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Appointments</h3>
          </div>
          <div className={`${box}`}>
            <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Analytics</h3>
          </div>
          <div className={`${box}`}>
            <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Messages</h3>
          </div>
          <div className={`${box}`}>
            <FaPerson className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Patient</h3>
          </div>
        </div>
        {/* setting  */}
        <div className=" my-4 border-b border-gray-100 pb-4">
          <div className={`${box}`}>
            <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Settings</h3>
          </div>
          <div className={`${box}`}>
            <RiBankFill className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className={`${textstyle}`}>Finance</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
}
