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
      } lg:flex `}
    >
      <div className="relative w-[300px] h-[400px] lg:hidden">
        {" "}
        <div className="w-[300px]  z-10  border-2 border-black rounded-[20px] overflow-hidden absolute">
          <div className="w-full h-[210px]">{props.displaySectionMobile}</div>
          <div
            className={`h-[150px] ${props.firstSectionStyle} font-raleWay p-[16px]  w-full relative`}
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
        <div className="w-[300px] absolute h-[360px] bg-black top-[10px] left-[10px] rounded-[20px] z-0"></div>
      </div>

      <div className="lg:flex hidden">
        <div className="text-5xl  mr-[30px]  font-raleWay">
          {props.index + 1}
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
