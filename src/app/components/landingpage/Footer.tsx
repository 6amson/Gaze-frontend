"use client";
import footerStarsMobile from "../../../../public/svgs/landing-page/footer-stars-mobile.svg";
import footerStarsLp from "../../../../public/svgs/landing-page/footer-stars-lp.svg";
import footerSaturnMobile from "../../../../public/svgs/landing-page/footer-saturn-mobile.svg";
import footerEarthMobile from "../../../../public/svgs/landing-page/footer-earth-mobile.svg";
import footerPlanetsLp from "../../../../public/svgs/landing-page/footer-planets-lp2.svg";
import purpleTextLogo from "../../../../public/svgs/globals/purple-text-logo.svg";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [info, setInfo] = useState({
    bunmi: {
      email: "bunmi@gmail.com",
    },
    derin: { email: "owoadederin6@gmail.com" },
  });

  return (
    <div className="h-screen w-full bg-black lg:bg-white overflow-hidden relative font-raleWay">
      {/* Mobile section for Footer */}
      <div className="w-full h-full lg:hidden">
        <div className="text-white text-[1.5rem] pt-[56px] pl-[23px] leading-tight">
          <div>GET IN TOUCH WITH THE PEOPLE BEHIND THIS PROJECT.</div>
          <div className="text-[1rem] mt-[43px]">
            Send it to;
            <div>
              <button>{info.bunmi.email}</button>
            </div>
            <div>
              <button>{info.derin.email}</button>
            </div>
          </div>

          <div className="text-[1rem] mt-[18px]">
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
      <div className="h-full w-full hidden lg:block">
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
      </div>
    </div>
  );
}
