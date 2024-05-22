"use client";
"@ts-nocheck";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlertDialog, Avatar, Button, DropdownMenu, Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { useRouter } from "next/navigation";
import { TbDotsVertical } from "react-icons/tb";
import Drawer from "./Drawer";
import axios from "axios";
import { useTheme } from "next-themes";

import { useSession } from "next-auth/react";
import { auth } from "../../../auth";
import { login } from "../../lib/authSlice";
import { setProfile } from "../../lib/reducers/loggedinUser";
import { FiSun, FiMoon } from "react-icons/fi";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const dispatch = useDispatch();
 console.log("Session token is added ");
 const { data: session } = useSession();
 const data = async  ()=>{
  const newdata= await auth();
  console.log(newdata);
 }
 data();

  console.log(session)
  useEffect(() => {
    if (session) {
      dispatch(login(true));
      dispatch(setProfile(session.user));
      localStorage.setItem("auth_Token", session.user!.accessToken);
      console.log(localStorage.getItem("accessToken"));
    }
  }, [session]);
  const showDrawer = () => {
    setDrawer(!drawer);
  }
  // Access the user state
 
  const userState = useSelector((state: RootState) => state.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLogin);

  const { user, profile, roles, isAdmin } = userState;

  // Access specific properties from the user state

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
      id: 4,
      link: "/buy-credits",
      label: "Pricing",
    },
    {
      id: 5,
      link: "/#contact",
      label: "Book Now",
    },
    {
      id: 6,
      link: "/blogs",
      label: "Blogs",
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
    <>
    <div
      id={`${resolvedTheme === 'dark' ? 'darknavbar' : 'navbar'}`}
      className={`fixed w-full flex items-center  justify-between px-4 py-3 text-blue-900 transition-all ${
        showNavbar ? "bg-white/50 shadow-md backdrop-blur-lg " : ""
      }`}
      style={{ zIndex: showMenu ? 999 : "10" }}
    >
      {profile?.role === "patient" && (
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
          {drawer && <Drawer close={showDrawer} key={"1"} />}
        </div>
      )}
      <Link
        href="/"
        className={`flex items-center whitespace-nowrap   cursor-pointer text-2xl font-bold  ${
          showNavbar ? "text-blue-600" : "text-blue-900 "
        }`}
        onClick={scrollToTop}
      >
        {" "}
        <span className="mr-1 text-xl text-blue-500">
          <img src="/dermalogo.png" width={"38px"} height="28px" alt="" />
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
            <Theme>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div>
                  <Avatar
                    radius="full"
                    size="4"
                    className={`cursor-pointer self-center justify-center  text-white ${
                      profile?.role === "patient" ? "" : ""
                    }`}
                    src={profile?.imageUrl ?? ""}
                    fallback={
                      (profile.first_name ?? "")[0] + (profile.last_name ?? "")[0]
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
                    src={profile?.imageUrl ?? ""}
                    fallback={
                      (profile.first_name ?? "")[0] + (profile.last_name ?? "")[0]
                    }
                  />

                    <h4 className="p-1 justify-center self-center">
                      {profile.username}
                    </h4>

                    <h4 className="p-1">{profile.email}</h4>
                    <h4 className="p-1">
                      <span className="text-[black] font-bold text-sm ">
                        Scan Credits :
                      </span>
                      {profile.scanCredits}
                    </h4>
                  </div>

                  <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                  <DropdownMenu.Item
                    shortcut="🩺"
                    onClick={() => router.push("/registerdoctor")}
                  >
                    Switch to doctor
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => setTheme(resolvedTheme === "dark" ? 'light':'dark')}>
                    Theme{" "}
                    {resolvedTheme === "dark" ? (
                      <FiSun onClick={() => setTheme("light")} />
                    ) : (
                      <FiMoon onClick={() => setTheme("dark")} />
                    )}
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button color="red">Logout</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                      <AlertDialog.Title>Logout</AlertDialog.Title>
                      <AlertDialog.Description size="2" >
                        Are you sure? This application will no longer be
                        accessible and any existing sessions will be expired.
                      </AlertDialog.Description>

                      <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button variant="solid" color="red">
                            Logout
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Theme>
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
</div>
    </>
  );
};

export default Navbar;
