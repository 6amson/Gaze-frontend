"use client";
import whiteTextIconLogo from "../../../../public/svgs/globals/white-text-icon-logo.svg";
import mobileMenuIcon from "../../../../public/svgs/header/mobile-menu-icon.svg";
import Router from "next/router";
import { UserPageContext } from "@/app/components/UserPageContext";
import { useContext } from "react";
import { UserPageContextTypes } from "@/app/components/UserPageContext";
import UserPageProvider from "@/app/components/UserPageContext";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Header() {
  const NewLink = Scroll.Link;
  let scroll = Scroll.animateScroll;
  let scrollA = Scroll.scroller;
  const {
    connectMetamask,
    ismetaMaskConnected,
    homePageLoading,
    setHomePageLoading,
    isMetaMaskLoading,
  } = useContext(UserPageContext);

  const pathName = usePathname();
  const router = useRouter();
  const headerButtons = [
    { name: "Home", link: "/" },
    { name: "FAQ", link: "faq" },
    { name: "Connect with Metamask", isConnect: true },
  ];
  const mobileheaderButtons = [
    { name: "Home", link: "/" },
    { name: "FAQ", link: "faq" },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  /*  const scrollTo = () => {
    scrollA.scrollTo("faq", {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "ContainerElementID",
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  }; */
  return (
    <motion.div
      animate={!homePageLoading && { opacity: 1 }}
      initial={pathName === "/" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, delay: 4 }}
      className={`${
        pathName.includes("profile") && "hidden"
      } w-full  z-40 relative bg-black  `}
    >
      <div className=" z-40 font-raleWay m-auto absolute bg-black   text-white w-full max-w-[1440px]  sm:h-[60px] h-[45px]  flex items-center relative">
        <Image
          onClick={() => {
            router.push("/");
          }}
          src={whiteTextIconLogo.src}
          alt="logo with text "
          width={256}
          className="sm:ml-[37px] ml-[18px] w-[70px] xl:w-[100px] cursor-pointer "
          height={100}
        ></Image>
        <div className="gap-x-[79px] absolute right-[48px] sm:right-[27px] flex   ">
          {headerButtons.map((item, index) => {
            if (item.name === "FAQ") {
              return (
                <NewLink
                  to="faq"
                  duration={500}
                  spy={true}
                  smooth
                  onClick={() => {
                    scrollTo();
                  }}
                  className={`${
                    item.isConnect
                      ? "border border-neonGreen p-[10px] sm:p-[14px] rounded-[10px] "
                      : "hidden sm:flex  items-center jusitfy-center"
                  } text-white cursor-pointer 2xl:text-[0.875rem] text-[0.7rem] leading-none hover:text-neonGreen duration-300 `}
                  key={index}
                >
                  {item.name}
                </NewLink>
              );
            } else
              return (
                <button
                  disabled={isMetaMaskLoading ? true : false}
                  onClick={() => {
                    !item.isConnect ? router.push("/") : connectMetamask();
                  }}
                  className={`${
                    item.isConnect
                      ? "border border-neonGreen p-[10px] sm:p-[14px] rounded-[10px] "
                      : "hidden sm:block"
                  } text-white  2xl:text-[0.875rem] text-[0.7rem] leading-none hover:text-neonGreen duration-300 `}
                  key={index}
                >
                  {item.name}
                </button>
              );
          })}
        </div>
        <button
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
          }}
          className="absolute right-[16px] sm:hidden"
        >
          <Image
            src={mobileMenuIcon.src}
            alt="mobile menu btn icon"
            width={3}
            height={16}
          ></Image>
        </button>
      </div>

      <div
        className={` bg-black h-fit w-full duration-300 sm:hidden absolute z-0 flex flex-col text-center ${
          !isMobileMenuOpen ? "-top-[100%]" : "top-[100%]"
        }`}
      >
        {mobileheaderButtons.map((item, index) => {
          if (item.link != "faq") {
            return (
              <button
                onClick={() => {
                  router.push("/");
                }}
                className="text-[0.7rem] text-white border-t border-gray-800 leading-[0rem] h-[35px] font-raleWay"
                key={index}
              >
                {item.name}
              </button>
            );
          } else
            return (
              <NewLink
                to="faq"
                duration={500}
                spy={true}
                smooth
                onClick={() => {
                  scrollTo();
                }}
                className="text-[0.7rem] text-white border-t border-gray-800 leading-[0rem] h-[35px] font-raleWay flex items-center justify-center "
                key={index}
              >
                <button>{item.name}</button>
              </NewLink>
            );
        })}
      </div>
      <ToastContainer></ToastContainer>
    </motion.div>
  );
}
