"use client";
import blackHole from "../../public/svgs/landing-page/loading/black-hole.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { SetStateAction } from "react";
import React from "react";

const item = {
  hidden: { opacity: 1, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 1,
    y: 100,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

interface LoadingPageProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoadingPage(props: LoadingPageProps) {
  return (
    <div className="w-full h-screen bg-white font-raleWay flex items-center justify-center overflow-hidden">
      <motion.img
        /*         onAnimationComplete={() => props.setLoading(false)} */
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ width: 800 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1.6 }}
        src={blackHole.src}
        width={300}
        height={400}
        layoutId={"main-image"}
        className={"hidden"}
        alt={"black hole illustration"}
      ></motion.img>
      <motion.div
        onAnimationComplete={() => props.setLoading(false)}
        initial={{ opacity: 1, width: 100, height: 100 }}
        animate={{ opacity: 1 }}
        exit={{
          width: 300,
          height: 300,
          transition: { ease: "easeInOut", duration: 0.8 },
        }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1.6 }}
        className={"rounded-full bg-black "}
        layoutId={"main-image"}
      ></motion.div>
      <div className="text-4xl absolute bottom-[5%] left-[5%] ">Loading..</div>
    </div>
  );
}
