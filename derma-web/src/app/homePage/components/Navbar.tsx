"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, DropdownMenu } from "@radix-ui/themes";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { TbDotsVertical } from "react-icons/tb";
import Drawer from "./Drawer";
import axios from "axios";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setDrawer(!drawer);

  }
  // Access the user state
 
  const userState = useSelector((state: RootState) => state.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLogin);
  console.log(isLoggedIn);
  const { user, profile, roles, isAdmin } = userState;

  // Access specific properties from the user state
  console.log(profile);

  const loggedInUser = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function login() {}

  const links = [
    {
      id: 1,
      link: "/",

      label: "Home",
    },
    {
      id: 2,
      link: "/#service",
      label: "Services",
    },
    {
      id: 3,
      link: "/doctors",

      label: "Doctors",
    },
    {
      id: 5,
      link: "/#contact",
      label: "Skin Care",
    },
    {
      id: 4,
      link: "/#team",
      label: "Team",
    },
    {
      id: 5,
      link: "/#contact",
      label: "Book Now",
    },
  ];

  const mobilelink = [
    {
      id: 0,
      link: "/my-settings",
      label: "Settings",
    },
  ];

  const loginLink = {
    id: 0,
    link: "/login",
    label: "Login",
    callback: login,
  };

  const scrollToTop = () => {};

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <header
      id="navbar"
      className={`fixed w-full flex items-center  justify-between px-4 py-3 text-blue-900 transition-all ${
        showNavbar ? "bg-white/50 shadow-md backdrop-blur-lg " : ""
      }`}
      style={{ zIndex: showMenu ? 999 : "10" }}
    >
      <div className="md:hidden">
        <button onClick={showDrawer}>
          <svg
            className={`h-6 w-6 font-semibold  text-blue-900 ${
              showNavbar ? "text-blue-900" : "text-blue-400"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {drawer && <Drawer close={showDrawer} key={"1"}/>}
      </div>
      <Link
        href="/"
        className={`flex items-center whitespace-nowrap   cursor-pointer text-2xl font-bold  ${
          showNavbar ? "text-blue-600" : "text-blue-900 "
        }`}
        onClick={scrollToTop}
      >
        {" "}
        <span className="mr-1 text-xl text-blue-500">
          <img src="appLogo.png" width={"38px"} height="28px" alt="" />
        </span>
        Derma AI
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center space-x-6">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link
                href={link}
                className={`cursor-pointer font-semibold hover:text-blue-400 ${
                  showNavbar ? "text-blue-600" : "text-blue-900"
                }   ${
                  label == "Login"
                    ? " text-white rounded-[15px] pr-4 pl-4 pt-2 pb-2 bg-blue-900"
                    : "text-blue-900"
                } "}`}
              >
                {label}
              </Link>
            </li>
          ))}
          {!isLoggedIn ? (
            <li key={loginLink.id}>
              <Link
                href={loginLink.link}
                className={`cursor-pointer font-semibold hover:text-blue-400 text-white rounded-[15px] pr-4 pl-4 pt-2 pb-2 bg-blue-900 ${
                  showNavbar ? "text-blue-600" : "text-blue-900"
                }`}
              >
                {loginLink.label}
              </Link>
            </li>
          ) : (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div>
                  <Avatar
                    radius="full"
                    size="4"
                    className={`cursor-pointer self-center justify-center  text-white ${
                      profile?.role === "patient" ? "" : ""
                    }`}
                    src={profile?.image ?? ""}
                    fallback={
                      (profile.firstname ?? "")[0] + (profile.lastname ?? "")[0]
                    }
                  />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <div className="flex flex-col align-middle bg-[#f1f5f9] mt-2 justify-center p-2">
                  <Avatar
                    radius="full"
                    size="4"
                    className={`cursor-pointer self-center justify-center ${
                      profile?.role === "patient"
                        ? "text-[#f4581c]"
                        : "text-blue-900"
                    }`}
                    src={profile?.image ?? ""}
                    fallback={
                      (profile.firstname ?? "")[0] + (profile.lastname ?? "")[0]
                    }
                  />

                  <h4 className="p-1 justify-center self-center">
                    {profile.username}
                  </h4>
                  <h4 className="p-1">{profile.email}</h4>
                </div>

                <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                <DropdownMenu.Item
                  shortcut="🩺"
                  onClick={() => router.push("/scannow")}
                >
                  Switch to doctor
                </DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                    <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Share</DropdownMenu.Item>
                <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                  Delete
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <TbDotsVertical size="22" />
        </button>
        {showMenu && (
          <ul className="absolute top-14 right-0 z-50 w-48 py-2 bg-white border border-gray-300 rounded shadow-md">
            {mobilelink.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  href={link}
                  className={`block px-4 py-2 font-semibold mt-1 text-blue-900 hover:text-blue-500 `}
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
