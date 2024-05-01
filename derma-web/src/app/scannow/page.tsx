"use client";
import React from "react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Box, Flex, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";

import { useState } from "react";

//@ts-ignore
import FileUploadComponent from "./filecomponent";

import "./style.css";
import Radio from "./radio";

const scannow = () => {
  const [open, setOpen] = useState(false);

  const [pauseTime, setpause] = useState(true);
  setTimeout(() => {
    setpause(true);
    console.log("event thrown it is paused");
  }, 4000);
  
  return (
    <div className=" min-h-screen flex flex-col pt-[10%]  items-center justify-start gap-3  overflow-y-hidden">
      <Radio />
      <FileUploadComponent></FileUploadComponent>
      <div className="relative justify-between hidden xl1:flex">
        <motion.img
          animate={{ y: 150 }}
          transition={{ duration: 3 }}
          className="h-[15%] w-[15%]"
          src="robot1.png"
          alt=""
        />
        <motion.img
          animate={{ y: 150 }}
          transition={{ duration: 3 }}
          className=" h-[15%] w-[15%]"
          src="robot2.png"
          alt=""
        />

        <motion.img
          animate={{ y: 150 }}
          transition={{ duration: 3 }}
          className="h-[15%] w-[15%]"
          src="robot3.png"
          alt=""
        />
        <motion.img
          animate={{ y: 150 }}
          transition={{ duration: 3 }}
          className="h-[15%] w-[15%]"
          src="robot4.png"
          alt=""
        />
      </div>
      
      
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
