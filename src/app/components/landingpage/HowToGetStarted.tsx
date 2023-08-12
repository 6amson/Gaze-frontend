import HowToGetStartedItem from "./HowToGetStartedItem";
import Image from "next/image";
import hWTGSTHeader from "../../../../public/svgs/landing-page/hwtgst-header.svg";
import hWTGSTHeaderMobile from "../../../../public/svgs/landing-page/hwtgst-header-mobile.svg";
import hWTGSTExtra from "../../../../public/svgs/landing-page/hwtgst-extra.svg";

export default function HowToGetStarted() {
  return (
    <div className="h-screen relative  bg-white w-full font-raleWay font-bold 2xl:px-[10vw] sm:px-[6vw] lg:px-[10vw] ">
      <div className="text-center text-[1.5rem] flex flex-col items-center mb-[37px] mt-[31px] sm:hidden">
        <Image
          src={hWTGSTHeaderMobile.src}
          alt="planet with stars"
          width={100}
          height={300}
        ></Image>
        <div>HOW TO GET STARTED</div>
      </div>
      <div className="hidden sm:flex  text-[2.5rem] mb-[41px] mt-[47px] gap-x-[10px]">
        {" "}
        <div className="leading-none">
          {" "}
          HOW TO GET <div className="">STARTED </div>
        </div>
        <div>
          <Image
            src={hWTGSTHeader.src}
            alt="planet with stars"
            width={100}
            height={300}
          ></Image>
        </div>
      </div>
      <Image
        src={hWTGSTExtra.src}
        width={100}
        height={100}
        alt="circular wavy illustration"
        className="absolute right-[0%] top-[35%] w-[20vw] hidden sm:block z-30"
      ></Image>
      <div className="w-full h-full sm:h-fit flex flex-col items-center sm:flex-row sm:flex-wrap  sm:justify-between sm:items-start sm:gap-x-[60px] sm:gap-y-[60px]">
        {[1, 2, 3, 4].map((item, index) => {
          return <HowToGetStartedItem key={index}></HowToGetStartedItem>;
        })}
      </div>
    </div>
  );
}
