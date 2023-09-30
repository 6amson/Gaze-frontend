interface HowToGetStartedNewItem {
  displaySection: React.ReactNode;
  functionSection: (trigger: boolean, style: string) => React.ReactNode;
  firstSectionStyle: string;
  writtenSectionExtra?: React.ReactNode;
  index: number;
  displaySectionMobile?: React.ReactNode;
  mobileSectionExtra?: React.ReactNode;
  heading?: string;
  text?: string;
  mobileSectionStyle: string;
  textMobile?: string;
  indexMobileStyle?: string;
}
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function HowToGetStartedNewItem(props: HowToGetStartedNewItem) {
  const [trigger, setTrigger] = useState(false);

  return (
    <div
      className={`${
        props.index % 2 === 0 ? "lg:self-start" : "lg:self-end"
      } lg:flex  `}
    >
      {/* Former arrangement just in case */}
      <motion.div className="relative w-[300px] h-[400px] hidden ">
        {" "}
        <div className="w-[300px]  z-10  border-2 border-black rounded-[20px] bg-white overflow-hidden absolute">
          <div className="w-full h-[210px]">{props.displaySectionMobile}</div>
          <div
            className={`h-[160px] ${props.firstSectionStyle} font-raleWay p-[16px]  w-full relative`}
          >
            {props.mobileSectionExtra}
            <div className="text-[16px] leading-none font-semibold">
              {props.heading}
            </div>
            <div className="text-[12px] leading-none mt-[16px] w-4/5 ">
              {props.text}
            </div>
          </div>
        </div>
        <div className="w-[300px] absolute h-[370px] bg-black top-[10px] left-[10px] rounded-[20px] z-0"></div>
      </motion.div>
      {/* New arrangement */}
      <motion.div
        className={`relative w-full ${
          props.index === 0 ? "h-[500px] sm:h-screen" : "h-fit"
        } border-black  lg:hidden border-y sm:border  max-w-[400px]`}
      >
        {" "}
        <div className="w-full  z-10   bg-white overflow-hidden h-full">
          <div
            className={`h-full ${props.mobileSectionStyle} font-raleWay p-[20px] py-[40px] pb-0  w-full relative  p-4 `}
          >
            <div
              className={`${props.indexMobileStyle} overflow-hidden border rounded-xl h-[60px] w-[60px] mb-[20px] p-2 flex items-center justify-center leading-none`}
            >
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-[40px]"
              >
                {" "}
                {props.index + 1}
              </motion.span>
            </div>
            {props.mobileSectionExtra}
            <div className="text-[20px] leading-none font-semibold">
              {props.heading}
            </div>
            <div className="text-[16px] leading-none mt-[14px] w-4/5  mb-[24px]">
              {props.textMobile ? props.textMobile : props.text}
            </div>
            <div className="w-full h-fit mb-[-5px]">
              {props.displaySectionMobile}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="lg:flex hidden">
        <div className="text-4xl font-bold  mr-[30px]  font-raleWay relative text-neonGreen">
          {props.index + 1}
          <span className="absolute top-[2px] left-[2px] text-black">
            {" "}
            {props.index + 1}
          </span>
        </div>
        <motion.div
          onViewportEnter={() => {
            if (trigger) return;
            setTrigger(true);
          }}
          className="relative   h-[500px] w-[750px]"
        >
          <div
            className={`font-raleWay z-20 absolute flex w-full h-[447px] max-w-[750px] border-2 border-black rounded-3xl overflow-hidden`}
          >
            <div
              className={`w-[50%]  ${props.firstSectionStyle} p-[30px] pt-[43px] relative border-r border-black`}
            >
              <div className={`text-[30px] font-medium`}>{props.heading}</div>{" "}
              <div className={`text-[20px] mt-[32px] leading-tight`}>
                {props.text}
              </div>{" "}
              {props.writtenSectionExtra}
            </div>
            <div
              onClick={() => {
                setTrigger((prev) => !prev);
              }}
              className="w-[50%] bg-white relative"
            >
              {props.displaySection}
              {props.functionSection(trigger, "")}
            </div>
          </div>
          <div
            className={`font-raleWay bg-black top-[30px] left-[30px] z-0 absolute flex w-full h-[447px] max-w-[750px] border-2 border-black rounded-3xl`}
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
