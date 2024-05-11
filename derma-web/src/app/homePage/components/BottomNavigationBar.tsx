"use client";
import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaUserDoctor } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { TbBodyScan } from "react-icons/tb";
import { RiHistoryFill } from "react-icons/ri";
import Link from "next/link";

export default function BottomNavigationBar() {
  const [activeIndex, setActiveIndex] = useState(0); // Initial active index

  const handleNavigation = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className=" md:hidden fixed bottom-0 w-full rounded-lg drop-shadow-lg bg-white flex justify-around items-center px-5 py-2">
      <Link // Use Link for smooth navigation
        href="/"
        className={`cursor-pointer ${
          activeIndex === 0 ? "text-blue-500" : "text-gray-600"
        }`}
        onClick={() => handleNavigation(0)}
      >
        <div className="flex flex-col justify-center items-center">
          <GoHomeFill size={24} className="block mb-1" />
          <h1>Home</h1>
        </div>
      </Link>
      <Link
        href="/doctors"
        className={` cursor-pointer ${
          activeIndex === 1 ? "text-blue-500" : "text-gray-600"
        }`}
        onClick={() => handleNavigation(1)}
      >
        <div className="flex flex-col justify-center items-center">
          <FaUserDoctor size={24} className="block mb-1" />
          <h1>Doctors</h1>
        </div>
      </Link>
      <Link
        href="/scannow"
        className={` cursor-pointer ${
          activeIndex === 2 ? "text-blue-500" : "text-gray-600"
        }`}
        onClick={() => handleNavigation(2)}
      >
        <div className="flex flex-col justify-center items-center">
          <TbBodyScan size={24} className="block mb-1" />
          <h1>Scan Now</h1>
        </div>
      </Link>
      <Link
        href="/appointmenthistory"
        className={` cursor-pointer ${
          activeIndex === 3 ? "text-blue-500" : "text-gray-600"
        }`}
        onClick={() => handleNavigation(3)}
      >
        <div className="flex flex-col justify-center items-center">
          <RiHistoryFill size={24} className="block mb-1" />
          <h1>History</h1>
        </div>
      </Link>
      <Link
        href="/profile"
        className={`cursor-pointer ${
          activeIndex === 4 ? "text-blue-500" : "text-gray-600"
        }`}
        onClick={() => handleNavigation(4)}
      >
        <div className="flex flex-col justify-center items-center">
          <CgProfile size={24} className="block mb-1" />
          <h1>Profile</h1>
        </div>
      </Link>
    </div>
  );
}
