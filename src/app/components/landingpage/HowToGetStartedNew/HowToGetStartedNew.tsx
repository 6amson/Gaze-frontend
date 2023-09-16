import HowToGetStartedNewItem from "./HowToGetStartedNewItem";
import htGStOneOpenSea from "../../../../../public/svgs/landing-page/htgst/htgst-1-opensea.svg";
import htGStOneMobileOpenSea from "../../../../../public/svgs/landing-page/htgst/htgst-1-mobile-opensea.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import hWTGSTHeader from "../../../../../public/svgs/landing-page/hwtgst-header.svg";
import hWTGSTHeaderMobile from "../../../../../public/svgs/landing-page/hwtgst-header-mobile.svg";
import howToGetStartedFiveExtra from "../../../../../public/svgs/landing-page/htgst/htgst-5-extra.svg";
import howToGetStartedFourExtra from "../../../../../public/svgs/landing-page/htgst/htgst-4-extra.svg";
import howToGetStartedThreeExtra from "../../../../../public/svgs/landing-page/htgst/htgst-3-extra.svg";
import howToGetStartedOneExtra from "../../../../../public/svgs/landing-page/htgst/htgst-1-extra.svg";
import howToGetStartedOneText from "../../../../../public/svgs/landing-page/htgst/htgst-text-one.svg";
import howToGetStartedTwoPic from "../../../../../public/svgs/landing-page/htgst/htgst-2-pic.png";
import howToGetStartedThreePic from "../../../../../public/svgs/landing-page/htgst/htgst-3-pic.png";
import howToGetStartedFourPic from "../../../../../public/svgs/landing-page/htgst/htgst-4-pic-2.png";
import howToGetStartedFivePic from "../../../../../public/svgs/landing-page/htgst/htgst-5-pic-2.png";
import howToGetStartedTwoStars from "../../../../../public/svgs/landing-page/htgst/htgst-2-stars.svg";
import howToGetStartedThreeArrow from "../../../../../public/svgs/landing-page/htgst/htgst-arrow-3.svg";
import howToGetStartedOneMobilePic from "../../../../../public/svgs/landing-page/htgst/htgst-1-mobile-pic.png";
import howToGetStartedTwoMobilePic from "../../../../../public/svgs/landing-page/htgst/htgst-2-mobile-pic.png";
import howToGetStartedThreeMobilePic from "../../../../../public/svgs/landing-page/htgst/htgst-3-mobile-pic.png";
import howToGetStartedFourMobilePic from "../../../../../public/svgs/landing-page/htgst/htgst-4-mobile-pic.png";
import howToGetStartedFiveMobilePic from "../../../../../public/svgs/landing-page/htgst/htgst-5-mobile-pic.png";

export default function HowToGetStartedNew() {
  const HowToGetStartedArray = [
    {
      heading: "Head Over to OpenSea",
      text: "Open a new tab and go to opensea.io or click the link in the section beside.",
      displaySection: (
        <>
          <Image
            src={htGStOneOpenSea.src}
            width={300}
            alt="open sea svg"
            height={100}
            className={"absolute right-0 top-[30px]"}
          ></Image>
        </>
      ),
      functionSection: (trigger: boolean, style: string) => {
        return (
          <div className="absolute top-[100px] left-[80px]">
            <motion.svg
              width="217"
              height="182"
              viewBox="0 0 217 182"
              fill="none"
              className={"stroke-[17px]"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M207.86 172.93C201.08 172.3 90.4396 160.44 56.1996 78C50.9996 65.56 45.6096 46.73 46.6596 21.77"
                stroke="#231F20"
                strokeWidth="17"
                strokeMiterlimit="10"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={trigger ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.6 }}
              />
              <motion.path
                d="M8.5 89.52L35.72 8.5L127.19 49.01"
                stroke="#231F20"
                strokeWidth="17"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={trigger ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.6 }}
              />
            </motion.svg>
            <Image
              width={200}
              height={300}
              src={howToGetStartedOneText.src}
              alt={"text saying click to go page"}
            ></Image>
          </div>
        );
      },
      firstSectionStyle: "bg-black text-white",
      mobileSectionExtra: (
        <>
          <Image
            src={howToGetStartedOneExtra.src}
            width={50}
            height={100}
            alt={"star"}
            className={"absolute bottom-0 z-0 right-4"}
          ></Image>
        </>
      ),

      writtenSectionExtra: (
        <div className="w-full">
          <Image
            src={howToGetStartedOneExtra.src}
            width={100}
            height={100}
            alt={"star"}
            className={"absolute bottom-0 z-0 "}
          ></Image>
        </div>
      ),
      displaySectionMobile: (
        <div className="w-full">
          <Image
            width={320}
            height={300}
            className={"absolute top-[10px] right-[-20px]"}
            alt={"opensea link"}
            src={htGStOneMobileOpenSea.src}
          ></Image>
          <Image
            src={howToGetStartedOneMobilePic.src}
            width={100}
            height={100}
            unoptimized
            alt={"pic directing user to open sea"}
            className={"w-full"}
          ></Image>
        </div>
      ),
    },
    {
      heading: "Click on any collection and check the chain",
      text: "Click on any collection. When the page navigates to the collection page, check if the collection is ethereum based. It should be indicated on the page",
      displaySection: (
        <>
          <Image
            src={howToGetStartedTwoPic.src}
            width={300}
            alt="open sea svg"
            height={100}
            unoptimized
            className={""}
          ></Image>
        </>
      ),
      functionSection: (trigger: boolean, style: string) => {
        return <></>;
      },
      firstSectionStyle: "bg-[#A157FF] text-white",
      writtenSectionExtra: (
        <div className="w-full">
          <Image
            src={howToGetStartedTwoStars.src}
            width={800}
            height={400}
            alt={"star"}
            className={"absolute bottom-0 z-0 left-0 scale-[2]"}
          ></Image>
        </div>
      ),
      mobileSectionExtra: (
        <>
          <Image
            src={howToGetStartedTwoStars.src}
            width={800}
            height={400}
            alt={"star"}
            className={"absolute bottom-0 z-0 left-0"}
          ></Image>
        </>
      ),
      displaySectionMobile: (
        <div className="w-full">
          <Image
            src={howToGetStartedTwoMobilePic.src}
            width={100}
            height={100}
            unoptimized
            alt={"pic directing user to open sea"}
            className={"w-full"}
          ></Image>
        </div>
      ),
    },
    {
      heading: "Navigate to the Etherscan page of the collection",
      text: "Click on the indicated icon to navigate to the etherscan page of the collection",
      displaySection: (
        <div className="relative w-full h-full ">
          <Image
            src={howToGetStartedThreePic.src}
            width={300}
            alt="open sea svg"
            height={100}
            className={"w-full"}
          ></Image>
          <Image
            className="absolute bottom-[70px] left-[30px]"
            src={howToGetStartedThreeArrow.src}
            alt="how to get started arrow three"
            width={100}
            height={200}
          ></Image>
        </div>
      ),
      functionSection: (trigger: boolean, style: string) => {
        return (
          <>
            <motion.svg
              width="85"
              height="64"
              viewBox="0 0 85 64"
              fill="none"
              className={"absolute stroke-[7px] bottom-[35px] left-[90px]"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M79.7579 10.5873C82.1312 14.6285 81.4909 20.9403 76.6629 28.5937C71.9417 36.0778 63.6924 43.957 52.9516 50.2647C42.2108 56.5725 31.3113 59.9388 22.4754 60.4164C13.4396 60.9048 7.61537 58.3895 5.24207 54.3483C2.86877 50.307 3.50907 43.9953 8.3371 36.3419C13.0583 28.8578 21.3075 20.9786 32.0484 14.6708C42.7892 8.36305 53.6887 4.99676 62.5246 4.51913C71.5604 4.0307 77.3846 6.54606 79.7579 10.5873Z"
                stroke-width="7"
                stroke="#231F20"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={trigger ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.6, delay: 1 }}
              />
            </motion.svg>
          </>
        );
      },
      firstSectionStyle: "bg-[#F0ECED] text-black",
      writtenSectionExtra: (
        <>
          <Image
            src={howToGetStartedThreeExtra.src}
            width={100}
            height={40}
            alt={"planet"}
            className={"absolute bottom-[40px] right-[50px]"}
          ></Image>
        </>
      ),
      mobileSectionExtra: (
        <>
          <Image
            src={howToGetStartedThreeExtra.src}
            width={50}
            height={40}
            alt={"planet"}
            className={"absolute bottom-[10px] left-[20px]"}
          ></Image>
        </>
      ),
      displaySectionMobile: (
        <div className="w-full">
          <Image
            src={howToGetStartedThreeMobilePic.src}
            width={100}
            height={100}
            unoptimized
            alt={"pic directing user to open sea"}
            className={"w-full"}
          ></Image>
        </div>
      ),
    },
    {
      heading: "Copy the contract address from the etherscan page",
      text: "Copy the contract address from the etherscan page of the collection. ",
      displaySection: (
        <>
          <Image
            src={howToGetStartedFourPic.src}
            width={300}
            alt="open sea svg"
            height={100}
            unoptimized={true}
            className={"w-full"}
          ></Image>
        </>
      ),
      functionSection: (trigger: boolean, style: string) => {
        return (
          <>
            <motion.svg
              width="378"
              height="85"
              viewBox="0 0 378 85"
              fill="none"
              className={"absolute top-[40px] right-[-20px] stroke-[7px]"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M407.5 42.5C407.5 44.2044 406.681 46.2349 404.337 48.6035C401.983 50.9828 398.329 53.4463 393.313 55.8987C383.297 60.7964 368.577 65.3037 350.102 69.1246C313.209 76.7544 262.083 81.5 205.5 81.5C148.917 81.5 97.7906 76.7544 60.8984 69.1246C42.4235 65.3037 27.7033 60.7964 17.6866 55.8987C12.6711 53.4463 9.01718 50.9828 6.663 48.6035C4.31936 46.2349 3.5 44.2044 3.5 42.5C3.5 40.7956 4.31936 38.7651 6.663 36.3965C9.01718 34.0172 12.6711 31.5537 17.6866 29.1013C27.7033 24.2036 42.4235 19.6963 60.8984 15.8754C97.7906 8.24565 148.917 3.5 205.5 3.5C262.083 3.5 313.209 8.24565 350.102 15.8754C368.577 19.6963 383.297 24.2036 393.313 29.1013C398.329 31.5537 401.983 34.0172 404.337 36.3965C406.681 38.7651 407.5 40.7956 407.5 42.5Z"
                stroke-width="7"
                stroke="#231F20"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={trigger ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.6, delay: 1 }}
              />
            </motion.svg>
          </>
        );
      },
      firstSectionStyle: "bg-[#A157FF] text-white",
      writtenSectionExtra: (
        <>
          <Image
            src={howToGetStartedFourExtra.src}
            width={150}
            height={40}
            alt={"planet"}
            className={"absolute bottom-[20px] right-[10px]"}
          ></Image>
        </>
      ),
      mobileSectionExtra: (
        <>
          <Image
            src={howToGetStartedFourExtra.src}
            width={70}
            height={40}
            alt={"planet"}
            className={"absolute bottom-[20px] right-[10px]"}
          ></Image>
        </>
      ),
      displaySectionMobile: (
        <div className="w-full">
          <Image
            src={howToGetStartedFourMobilePic.src}
            width={100}
            height={100}
            unoptimized
            alt={"pic directing user to open sea"}
            className={"w-full"}
          ></Image>
        </div>
      ),
    },
    {
      heading: "Paste it into the subscribe input upon account creation",
      text: "Once you create an account you will be redirected to your page. Paste it into the subscribe input and click the subscribe button. Thank you. ",
      displaySection: (
        <>
          <Image
            src={howToGetStartedFivePic.src}
            width={300}
            alt="open sea svg"
            height={100}
            unoptimized
            className={"w-full"}
          ></Image>
        </>
      ),
      functionSection: (trigger: boolean, style: string) => {
        return <></>;
      },
      firstSectionStyle: "bg-black text-white",
      writtenSectionExtra: (
        <>
          <Image
            src={howToGetStartedFiveExtra.src}
            width={80}
            height={40}
            alt={"planet"}
            className={"absolute bottom-[40px] left-0"}
          ></Image>
        </>
      ),
      mobileSectionExtra: (
        <>
          <Image
            src={howToGetStartedFiveExtra.src}
            width={30}
            height={40}
            alt={"planet"}
            className={"absolute bottom-[10px] left-0"}
          ></Image>
        </>
      ),
      displaySectionMobile: (
        <div className="w-full">
          <Image
            src={howToGetStartedFiveMobilePic.src}
            width={100}
            height={100}
            unoptimized
            alt={"pic directing user to open sea"}
            className={"w-full"}
          ></Image>
        </div>
      ),
    },
  ];
  return (
    <div className="2xl:px-[10vw] sm:px-[6vw] lg:px-[10vw] pt-[20px] bg-[#ECECEC] lg:bg-white h-fit">
      {" "}
      <div className="hidden sm:flex font-raleWay font-bold  text-[2.3rem] mb-[41px] mt-[47px] gap-x-[10px]">
        {" "}
        <div className="leading-none">
          {" "}
          HOW TO GET <div className="">STARTED </div>
        </div>
        <div>
          <Image
            src={hWTGSTHeader.src}
            alt="planet with stars"
            width={75}
            height={300}
          ></Image>
        </div>
      </div>
      <div className="text-center text-[1.5rem] flex flex-col font-raleWay font-bold items-center mb-[37px] pt-[31px] sm:hidden">
        <Image
          src={hWTGSTHeaderMobile.src}
          alt="planet with stars"
          width={100}
          height={300}
        ></Image>
        <div className="leading-none pt-[1px]">HOW TO GET STARTED</div>
      </div>
      <div className="w-full  pb-[130px] h-fit  flex flex-wrap lg:flex-col justify-center sm:justify-between items-center lg:justify-center gap-y-[50px] sm:gap-y-[100px]  lg:gap-x-0  bg-[#ECECEC] lg:bg-white">
        {HowToGetStartedArray.map((item, index) => {
          return (
            <HowToGetStartedNewItem
              index={index}
              heading={item.heading}
              text={item.text}
              displaySectionMobile={item.displaySectionMobile}
              firstSectionStyle={item.firstSectionStyle}
              displaySection={item.displaySection}
              functionSection={item.functionSection}
              mobileSectionExtra={item.mobileSectionExtra}
              key={index}
              writtenSectionExtra={item.writtenSectionExtra}
            ></HowToGetStartedNewItem>
          );
        })}
      </div>
    </div>
  );
}
