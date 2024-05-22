"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { useSelector } from "react-redux";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { RootState } from "@/app/lib/store";
import SidebarItems from "./component/sidebaritems";

//tailwind
const textstyle =
  "text-base text-gray-800 group-hover:text-white font-semibold";
const box =
  "flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#007AFF] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto";

export default function SideNavbar() {
  const activeItem = useSelector(
    (state: RootState) => state.sidebar.activeItem
  ); // Access state

  return (
    <div className="hidden lg:flex">
      <button className="sticky top-12 right-4  inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
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
            <SidebarItems
              title={"Dashboard"}
              activeItem={activeItem}
              icon={
                <MdOutlineSpaceDashboard
                  className={`${
                    activeItem === "Dashboard" ? "text-white" : ""
                  } text-2xl text-gray-800 group-hover:text-white`}
                />
              }
            />
            <SidebarItems
              title={"Profile"}
              activeItem={activeItem}
              icon={
                <CgProfile
                  className={`${
                    activeItem === "Profile" ? "text-white" : ""
                  } text-2xl text-gray-800 group-hover:text-white`}
                />
              }
            />
            <SidebarItems
              title={"Appointments"}
              activeItem={activeItem}
              icon={
                <AiOutlineSchedule
                  className={`${
                    activeItem === "Appointments" ? "text-white" : ""
                  } text-2xl text-gray-800 group-hover:text-white`}
                />
              }
            />
            <SidebarItems
              title={"Analytics"}
              activeItem={activeItem}
              icon={
                <MdOutlineAnalytics
                  className={`${
                    activeItem === "Analytics" ? "text-white" : ""
                  } text-2xl text-gray-800 group-hover:text-white`}
                />
              }
            />
            <SidebarItems
              title={"Patient"}
              activeItem={activeItem}
              icon={
                <FaPerson
                  className={`${
                    activeItem === "Patient" ? "text-white" : ""
                  } text-2xl text-gray-800 group-hover:text-white`}
                />
              }
            />
          </div>
          {/* setting  */}

          <div className=" my-4 border-b border-gray-100 pb-4">
            <SidebarItems
              title={"Settings"}
              activeItem={activeItem}
              icon={
                <MdOutlineSettings
                  className={`${
                    activeItem === "Settings" ? "text-white" : ""
                  } text-2xl text-gray-800 group-hover:text-white`}
                />
              }
            />
            <SidebarItems
              title={"Finance"}
              activeItem={activeItem}
              icon={
                <RiBankFill
                  className={`${
                    activeItem === "Finance" ? "text-white" : ""
                  } text-2xl text-gray-800 group-hover:text-white`}
                />
              }
            />
          </div>
          {/* logout */}
          <Theme>
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
                <AlertDialog.Description size="2" color="red">
                  Are you sure? This application will no longer be accessible
                  and any existing sessions will be expired.
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
          </Theme>
        </div>
      </div>
    </div>
  );
}
