"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
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

export default function SideNavbar() {
  return (
    <div>
      <button className="fixed top-12 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu
          className="block md:hidden h-6 w-6"
          aria-hidden="true"
        />
      </button>
      <div className="p-6  bg-white z-2 relative top-16 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200  shadow-lg ">
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
            Doctor Dashboard
          </h1>
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
          {/* logout */}

          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <div className=" my-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className={`${textstyle}`}>Logout</h3>
                </div>
              </div>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Logout</AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure? This application will no longer be accessible and
                any existing sessions will be expired.
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button color="red">Logout</Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      </div>
    </div>
  );
}
