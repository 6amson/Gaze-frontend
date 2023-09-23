"use client";
import footerStarsMobile from "../../../../public/svgs/landing-page/footer-stars-mobile.svg";
import footerStarsLp from "../../../../public/svgs/landing-page/footer-stars-lp.svg";
import footerSaturnMobile from "../../../../public/svgs/landing-page/footer-saturn-mobile.svg";
import footerEarthMobile from "../../../../public/svgs/landing-page/footer-earth-mobile.svg";
import footerPlanetsLp from "../../../../public/svgs/landing-page/footer-planets-lp3.svg";
import purpleTextLogo from "../../../../public/svgs/globals/purple-text-logo.svg";
import footerEarth from "../../../../public/svgs/landing-page/footer/footer-earth.svg";
import footerJup from "../../../../public/svgs/landing-page/footer/footer-jup.svg";
import footerSat from "../../../../public/svgs/landing-page/footer/footer-sat.svg";
import footerMoon from "../../../../public/svgs/landing-page/footer/footer-moon.svg";
import footerStar from "../../../../public/svgs/landing-page/footer/footer-stars.svg";
import footerMail from "../../../../public/svgs/landing-page/footer/footer-email.svg";
import footerLinkdn from "../../../../public/svgs/landing-page/footer/footer-linkdn.svg";
import footerGithub from "../../../../public/svgs/landing-page/footer/footer-github.svg";
import stars from "../../../../public/svgs/globals/404-stars.svg";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const [info, setInfo] = useState({
    bunmi: {
      email: "bunmi@gmail.com",
    },
    derin: { email: "owoadederin6@gmail.com" },
  });

  const bunmiInfo = [
    <div className="text-[32px]">Bumni</div>,
    <Link
      className="flex items-center gap-x-2"
      href="mailto:bunmigrey@icloud.com;"
    >
      <Image
        width={30}
        height={30}
        alt={"email link illustration"}
        src={footerMail.src}
      ></Image>
      email
    </Link>,
    <div className="flex">
      <Link
        target={"_blank"}
        referrerPolicy={"no-referrer"}
        className="flex items-center gap-x-2"
        href={"https://github.com/6amson"}
      >
        <Image
          width={30}
          height={30}
          alt={"linkwdin link illustration"}
          src={footerGithub.src}
        ></Image>
        github
      </Link>
    </div>,
  ];
  const derinInfo = [
    <div className="text-[32px]">Derin</div>,
    <div className="flex justify-end">
      <Link
        className="flex items-center gap-x-2"
        href="mailto:owoadederin6@gmail.com;"
      >
        email
        <Image
          width={30}
          height={30}
          alt={"email link illustration"}
          src={footerMail.src}
        ></Image>
      </Link>
    </div>,
    <div className="flex justify-end">
      <Link
        className="flex items-center gap-x-2"
        href="https://github.com/derin-art"
      >
        github
        <Image
          width={30}
          height={30}
          alt={"email link illustration"}
          src={footerGithub.src}
        ></Image>
      </Link>
    </div>,
    <div className="flex justify-end">
      <Link
        className="flex items-center gap-x-2"
        target={"_blank"}
        referrerPolicy={"no-referrer"}
        href={"https://www.linkedin.com/in/derin-owoade-089685172/"}
      >
        linkedin
        <Image
          width={30}
          height={30}
          alt={"linkwdin link illustration"}
          src={footerLinkdn.src}
        ></Image>
      </Link>
    </div>,
  ];

  return (
    <div className="h-screen w-full bg-black lg:bg-white overflow-hidden relative font-raleWay">
      {/* Mobile section for Footer */}
      <div className="w-full h-full lg:hidden">
        <div className="text-white text-[1.5rem] pt-[56px]  leading-tight">
          <div className="px-[15px] text-center">
            GET IN TOUCH WITH THE PEOPLE BEHIND THIS PROJECT.{" "}
          </div>
          <div className="text-[1rem] mt-[43px] flex justify-between px-[15px]">
            <div className="w-1/2  flex flex-col items-center border-r">
              <div>
                {" "}
                <div className="text-[24px] mb-2 ">Bumni</div>
                <Link
                  className="flex items-center gap-x-2 mb-4"
                  href="mailto:bunmigrey@icloud.com;"
                >
                  <Image
                    width={24}
                    height={24}
                    alt={"email link illustration"}
                    src={footerMail.src}
                  ></Image>
                  email
                </Link>
                <Link
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  className="flex items-center gap-x-2"
                  href={"https://github.com/6amson"}
                >
                  <Image
                    width={30}
                    height={30}
                    alt={"linkwdin link illustration"}
                    src={footerGithub.src}
                  ></Image>
                  github
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div>
                <div className="text-[24px] mb-2">Derin</div>
                <Link
                  className="flex items-center gap-x-2 mb-4"
                  href="mailto:owoadederin6@gmail.com;"
                >
                  {" "}
                  <Image
                    width={24}
                    height={24}
                    alt={"email link illustration"}
                    src={footerMail.src}
                  ></Image>
                  email
                </Link>
                <Link
                  className="flex items-center gap-x-2 mb-4"
                  href="https://github.com/derin-art"
                >
                  <Image
                    width={30}
                    height={30}
                    alt={"email link illustration"}
                    src={footerGithub.src}
                  ></Image>
                  github
                </Link>
                <Link
                  className="flex items-center gap-x-2 mb-4"
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  href={"https://www.linkedin.com/in/derin-owoade-089685172/"}
                >
                  {" "}
                  <Image
                    width={24}
                    height={24}
                    alt={"linkwdin link illustration"}
                    src={footerLinkdn.src}
                  ></Image>
                  linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={footerStarsMobile.src}
          width={400}
          height={300}
          className={"w-full"}
          alt="stars"
        ></Image>
        <Image
          src={footerEarthMobile.src}
          width={80}
          height={300}
          className="absolute right-0 bottom-[50vw]"
          alt="earth"
        ></Image>
        <Image
          src={footerSaturnMobile.src}
          width={100}
          height={300}
          className="absolute left-0 bottom-[25vw]"
          alt="saturn"
        ></Image>
        <div className="absolute flex items-center bottom-[30px] w-full justify-center">
          <Image
            src={purpleTextLogo.src}
            width={200}
            height={300}
            className=""
            alt="logo"
          ></Image>
        </div>
      </div>
      {/* Laptop section for Footer */}
      <div className="h-full w-full hidden lg:flex bg-black items-center justify-center relative overflow-hidden">
        <div className="text-white text-[14px] top-[10%] absolute uppercase">
          Get in touch with the people behind this project{" "}
        </div>
        <motion.div className="flex text-white text-[16px] absolute top-[30%] z-10">
          <motion.div className="w-[200px] overflow-hidden">
            {bunmiInfo.map((item, index) => {
              return (
                <motion.div
                  whileInView={{ x: "0%" }}
                  initial={{ x: "90%" }}
                  transition={{ duration: 0.7 }}
                  key={index}
                >
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div className="w-[200px] overflow-hidden border-l text-right">
            {derinInfo.map((item, index) => {
              return (
                <motion.div
                  whileInView={{ x: "0%" }}
                  initial={{ x: "-90%" }}
                  transition={{ duration: 0.7 }}
                  key={index}
                >
                  {item}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        <Image
          src={purpleTextLogo.src}
          width={220}
          height={300}
          className="absolute bottom-[5%] z-30 w-[10vw]"
          alt="logo"
        ></Image>
        <motion.img
          src={footerEarth.src}
          width={400}
          height={500}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          alt={"earth illustration"}
          className={"bottom-[-35vw] absolute w-[60vw] z-20"}
        ></motion.img>
        <Image
          src={footerJup.src}
          width={100}
          height={500}
          alt={"earth illustration"}
          className={"left-[10%] top-[10%] absolute w-[7vw]  z-20"}
        ></Image>
        <Image
          src={footerStar.src}
          alt="stars"
          width={200}
          height={200}
          className={"absolute w-full z-0 hidden sm:block"}
        ></Image>
        <Image
          src={footerSat.src}
          alt="saturn illustration"
          width={70}
          height={200}
          className={"absolute right-[15%] top-[20%] z-20 w-[4.5vw]"}
        ></Image>
        {/*     <Image
          src={footerMoon.src}
          alt="moon illustration"
          width={120}
          height={200}
          className={"absolute right-[35%] top-[12%] z-20"}
        ></Image> */}
      </div>

      {/*   <div className="h-full w-full hidden lg:block">
        <div className="w-full h-1/2 bg-black relative overflow-hidden">
          <Image
            src={footerPlanetsLp.src}
            alt="multiple planets illustration"
            width={400}
            height={400}
            className="w-full absolute z-20"
          ></Image>
          <Image
            src={footerStarsLp.src}
            alt="stars illustration"
            width={400}
            height={400}
            className="w-full  absolute"
          ></Image>
        </div>
        <div className="w-full h-1/2 bg-white">
          <div className="text-black text-[1.5rem] pt-[30px] pl-[61px] leading-tight">
            <Image
              src={purpleTextLogo.src}
              width={220}
              height={300}
              className="pb-[20px]"
              alt="logo"
            ></Image>
            <div className="font-bold">
              GET IN TOUCH WITH THE PEOPLE BEHIND THIS PROJECT.
            </div>
            <div className="text-[0.95rem] mt-[20px]">
              Send it to;
              <div>
                <button>{info.bunmi.email}</button>
              </div>
              <div>
                <button>{info.derin.email}</button>
              </div>
            </div>

            <div className="text-[0.95rem] mt-[18px]">
              Connect at;
              <div>
                Bunmi (
                <a
                  className="text-spacePurple"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href="#"
                >
                  Twitter
                </a>
                ,{" "}
                <a
                  target="_blank"
                  className="text-spacePurple"
                  referrerPolicy="no-referrer"
                  href="#"
                >
                  Linkedin
                </a>
                )
              </div>
              <div>
                Derin (
                <a
                  className="text-spacePurple"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href="#"
                >
                  Twitter
                </a>
                ,{" "}
                <a
                  target="_blank"
                  className="text-spacePurple"
                  referrerPolicy="no-referrer"
                  href="#"
                >
                  Linkedin
                </a>
                )
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
