"use client";

import Marquee from "react-fast-marquee";
import { UserPageContext, UserPageContextTypes } from "../UserPageContext";
import heroMainLp from "../../../../public/svgs/landing-page/hero-main-lp2.svg";
import heroStarsLp from "../../../../public/svgs/landing-page/hero-stars-lp.svg";
import whiteTextIconLogo from "../../../../public/svgs/globals/white-text-icon-logo.svg";
import whiteTextLogo from "../../../../public/svgs/globals/white-text-logo.svg";
import blackTextLogo from "../../../../public/svgs/globals/black-text-logo.svg";
import { motion } from "framer-motion";
import heroMainMobile from "../../../../public/svgs/landing-page/hero-main-mobile2.png";
import heroMainMobile2 from "../../../../public/svgs/landing-page/hero-main-mobile.svg";
import heroMonitor from "../../../../public/svgs/landing-page/hero-monitor.svg";
import spaceMan from "../../../../public/svgs/landing-page/space-man.svg";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Header from "../globals/Header";
import { useContext, useState } from "react";
import { RevolvingDot } from "react-loader-spinner";

export default function Hero() {
  const { loading } = useContext(UserPageContext) as UserPageContextTypes;
  const router = useRouter();
  const [isLoadin, setIsLoading] = useState(false);
  const url = "https://previous-doralia-gaze.koyeb.app/";

  const handleAuth = async (): Promise<any> => {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");
    const refreshtoken = Cookies.get("Gaze_userAccess_RT");
    setIsLoading(true);
    if ((accesstoken && refreshtoken) || (accesstoken && !refreshtoken)) {
      axios
        .get(`${url}user/verify`, {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            Cookies.set("Gaze_userAccess_RT", res.data.refreshToken);
            const { userId } = res.data;
            const { contractAddress } = res.data;
            const encodedString = encodeURIComponent(userId);
            router.push(`/profile/${encodedString}`);
            return {
              encodedString: encodedString,
              contractAddress,
            };
          }
        })
        .catch((err) => {
          console.log(err);
          router.push("/signup");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (accesstoken == null) {
      router.push("/signup");
    }
  };

  return (
    <div className="h-screen w-full  overflow-hidden flex flex-col items-center font-raleWay relative  bg-white sm:bg-black ">
      <Marquee
        autoFill={true}
        delay={0}
        speed={100}
        className="absolute z-0 relative overflow-hidden  min-w-full text-white text-6xl  h-full "
      >
        <Image
          width={"100"}
          height={"100"}
          className={"w-screen   sm:block hidden "}
          alt={"green stars "}
          src={heroStarsLp.src}
        ></Image>
      </Marquee>
      <motion.img
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, bounce: 3, mass: 1, type: "spring" }}
        width={400}
        alt={"falling nft coins"}
        src={heroMainMobile.src}
        className="pt-[60px] p-2 sm:hidden absolute "
      ></motion.img>

      <motion.img
        animate={{
          y: [-8, 10],
          x: [-10, 10],
          rotate: 4,

          transition: {
            delay: 0,
            duration: 2,
            repeat: Infinity,
            // repeatDelay: 0.2,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        src={spaceMan.src}
        width={"700"}
        className={
          "w-[16vw]  2xl:w-[15vw] sm:block hidden absolute top-[180px] mr-[27vw]"
        }
        height={"400"}
        alt={"man floating in space"}
      ></motion.img>
      <motion.img
        animate={{
          y: [-15, 12],
          x: [-5, 8],
          rotate: 6,
          transition: {
            delay: 0.2,
            duration: 3,
            repeat: Infinity,
            // repeatDelay: 0.2,
            repeatType: "reverse",
          },
        }}
        src={heroMonitor.src}
        width={"700"}
        className={
          "w-[22vw]  2xl:w-[22vw] sm:block hidden absolute top-[130px] ml-[27vw]"
        }
        height={"400"}
        alt={"man floating in space"}
      ></motion.img>

      {/* Laptop Section */}
      <div className="absolute bottom-[10%] text-center hidden sm:block">
        <div className="uppercase leading-tight text-white font-black 2xl:text-[4.3rem] xl:text-[4rem] lg:text-[3.3rem] text-center ">
          Track your favorite <span className="text-spacePurple">NFT</span>
          <div>Collection</div>
        </div>
        <button
          onClick={handleAuth}
          disabled={isLoadin ? true : false}
          className="bg-neonGreen uppercase mt-[1rem] 2xl:text-[1rem] xl:text-[0.8rem] lg:text-[0.8rem] text-[0.6rem] p-[0.8rem] xl:p-[1rem] font-bold leading-none  text-black rounded-[10px]"
        >
          Get Started
        </button>
      </div>
      {/* Mobile Section */}
      <div className="absolute bottom-[10%] text-center sm:hidden">
        <button
          onClick={handleAuth}
          disabled={isLoadin ? true : false}
          className="uppercase mb-[28px] bg-neonGreen text-[1rem] p-[0.6rem] leading-none font-bold text-black rounded-[10px] border-2 border-black"
        >
          get started
        </button>
        <div className="text-[1rem] font-bold mb-[11px] uppercase leading-tight">
          Track your favorite NFT
          <span className="block"> Collection with</span>
        </div>
        <Image
          alt="gaze logo"
          width={300}
          height={100}
          src={blackTextLogo.src}
        ></Image>
        <div className="w-full relative flex items-center justify-center mt-2">
          <RevolvingDot
            radius={20}
            strokeWidth={2}
            color="#A157FF "
            secondaryColor=""
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass="absolute mt-[50px]"
            visible={isLoadin}
          />
        </div>
      </div>
    </div>
  );
}
