"use client";

import Marquee from "react-fast-marquee";
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

export default function Hero() {
  const router = useRouter();

  const url = "https://gazebackend.cyclic.cloud/";
  // const url = "http://localhost:4000/"

  const handleAuth = async (): Promise<any> => {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");
    const refreshtoken = Cookies.get("Gaze_userAccess_RT");

    if ((accesstoken && refreshtoken) || (accesstoken && !refreshtoken)) {
      axios
        .get(`${url}user/verify`, {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${accesstoken}`,
          },
        })
        .then((res) => {
          console.info({ RT: refreshtoken, AT: accesstoken, res });

          if (res.status == 200) {
            Cookies.set("Gaze_userAccess_RT", res.data.refreshToken);
            const { userId } = res.data;
            const { contractAddress } = res.data;
            const encodedString = encodeURIComponent(userId);
            router.push(`/profile/${encodedString}`);
            return {
              isValid: true,
              encodedString: encodedString,
              contractAddress,
            };
          }
        })
        .catch((err) => {
          console.log(err);
          router.push("/signup");
          return { isValid: false };
        });
    } else if (accesstoken == null) {
      router.push("/signup");
      return { isValid: false };
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

      <Image
        width={400}
        height={100}
        alt={"falling nft coins"}
        src={heroMainMobile.src}
        className="pt-[60px] p-2 sm:hidden absolute "
      ></Image>

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
        <div className="uppercase leading-tight text-white font-black 2xl:text-[3.3rem] xl:text-[3.3rem] lg:text-[3rem] text-center ">
          Track your favorite <span className="text-spacePurple">NFT</span>
          <div>Collection</div>
        </div>
        <button
          onClick={handleAuth}
          className="bg-neonGreen uppercase mt-[1rem] 2xl:text-[1rem] xl:text-[0.8rem] lg:text-[0.7rem] text-[0.6rem] p-[0.8rem] xl:p-[1rem] font-bold leading-none  text-black rounded-[10px]"
        >
          Get Started
        </button>
      </div>
      {/* Mobile Section */}
      <div className="absolute bottom-[10%] text-center sm:hidden">
        <button
          onClick={handleAuth}
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
      </div>
    </div>
  );
}
