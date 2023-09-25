"use client";
import blackHole from "../../public/svgs/landing-page/loading/black-hole.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className="w-full h-screen bg-white font-raleWay flex items-center justify-center">
      <motion.img
        src={blackHole.src}
        width={300}
        height={400}
        layoutId={"main-image"}
        alt={"black hole illustration"}
      ></motion.img>
      <div className="text-4xl absolute bottom-[5%] left-[5%] ">Loading..</div>
    </div>
  );
}
