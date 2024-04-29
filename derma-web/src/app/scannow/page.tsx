"use client";
import React from "react";
import { useEffect } from "react";

import { motion } from "framer-motion";

import { useState } from "react";

import { text } from "stream/consumers";

import shuffleMe from "./shuffle.jsx";
import TextScramble, { ScrambleText } from "@twistezo/react-text-scramble";
import { table } from "console";
//@ts-ignore
import { FilePicker } from "react-file-picker";
import FileUploadComponent from "./filecomponent";

import "./style.css";

const scannow = () => {
  const [open, setOpen] = useState(false);

  const [pauseTime, setpause] = useState(true);
  setTimeout(() => {
    setpause(true);
    console.log("event thrown it is paused");
  }, 4000);

  return (
    <div className=" min-h-screen flex pt-[20%] overflow-y-hidden">
      <div className="absolute justify-between hidden xl1:flex">
        <motion.img
          animate={{ y: 200 }}
          transition={{ duration: 3 }}
          className="h-[15%] w-[15%]"
          src="robot1.png"
          alt=""
        />
        <motion.img
          animate={{ y: 200 }}
          transition={{ duration: 3 }}
          className=" h-[15%] w-[15%]"
          src="robot2.png"
          alt=""
        />

        <motion.img
          animate={{ y: 200 }}
          transition={{ duration: 3 }}
          className="h-[15%] w-[15%]"
          src="robot3.png"
          alt=""
        />
        <motion.img
          animate={{ y: 200 }}
          transition={{ duration: 3 }}
          className="h-[15%] w-[15%]"
          src="robot4.png"
          alt=""
        />
      </div>
      <FileUploadComponent></FileUploadComponent>
      <div className="absolute bottom-0 flex gap-3 flex-row overflow-hidden z-0">
        <img src="skin.png" alt="" className="image" />
        <img src="skin.png" alt="" className="image" />
        <img src="skin.png" alt="" className="image" />
        <img src="skin.png" alt="" className="image" />
        <img src="skin.png" alt="" className="image" />
        <img src="skin.png" alt="" className="image" />
        <img src="skin.png" alt="" className="image" />
      </div>
    </div>
  );
};

export default scannow;
