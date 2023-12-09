"use client";
import React, { useState, useEffect } from "react";
import  Link  from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  function login() {
    
  }

  const links = [
    {
      id: 1,
      link: "home",
      label: "Home",
      
    },
    {
      id: 2,
      link: "service",
      label: "Services",
    },
    {
      id: 3,
      link: "/doctors",

      label: "Doctors",
    },
    {
      id: 4,
      link: "team",
      label: "Team",
    },
    {
      id: 5,
      link: "contact",
      label: "Book Now",
    },
    {
      id: 5,
      link: "/login",
      label: "Login",
      callback: login,
    },
  ];

  const scrollToTop = () => {
   
  };

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
      <Link
        href="/"
        className={`flex items-center whitespace-nowrap   cursor-pointer text-2xl font-bold  ${showNavbar?"text-blue-600" :"text-blue-900 "}` }
       
        onClick={scrollToTop}
      >
        {" "}
        <span className="mr-1 text-xl text-blue-500">
        <img src="dermalogo.png" width={'38px'} height='28px' alt="" />
        </span>
        
       Derma AI
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center space-x-6">
          {links.map(({ id, link, label,callback }) => (
            <li key={id}>
              <Link
                href={link}
                className={`cursor-pointer font-semibold hover:text-blue-400 ${
                  showNavbar ? "text-blue-600" : "text-blue-900"
                }   ${label=='Login'?" text-white rounded-[15px] pr-4 pl-4 pt-2 pb-2 bg-blue-900" :"text-blue-900" } "}`}
               
              
              >
                
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
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
        {showMenu && (
          <ul className="absolute top-14 right-0 z-50 w-48 py-2 bg-white border border-gray-300 rounded shadow-md">
            {links.map(({ id, link, label, }) => (
              <li key={id}>
                <Link
                  href={link}
                  className= {`block px-4 py-2 font-semibold mt-1 text-blue-900 hover:text-blue-500 `}
                
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
