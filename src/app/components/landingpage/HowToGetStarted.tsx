import HowToGetStartedItem from "./HowToGetStartedItem";
import Image from "next/image";
import hWTGSTHeader from "../../../../public/svgs/landing-page/hwtgst-header.svg";
import hWTGSTHeaderMobile from "../../../../public/svgs/landing-page/hwtgst-header-mobile.svg";
import hWTGSTExtra from "../../../../public/svgs/landing-page/hwtgst-extra.svg";

export default function HowToGetStarted() {
  return (
    <div className=" bg-[#ECECEC] relative sm:bg-white w-full font-raleWay font-bold 2xl:px-[10vw] sm:px-[6vw] lg:px-[10vw] ">
      <div>
        <div className="text-center text-[1.5rem] flex flex-col items-center mb-[37px] pt-[31px] sm:hidden">
          <Image
            src={hWTGSTHeaderMobile.src}
            alt="planet with stars"
            width={100}
            height={300}
          ></Image>
          <div className="leading-none pt-[1px]">HOW TO GET STARTED</div>
        </div>
        <div className="hidden sm:flex  text-[2.3rem] mb-[41px] mt-[47px] gap-x-[10px]">
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
        <Image
          src={hWTGSTExtra.src}
          width={100}
          height={100}
          alt="circular wavy illustration"
          className="absolute right-[0%] top-[35%] w-[20vw] hidden sm:block z-30"
        ></Image>
        <div className="w-full h-fit flex flex-col items-center sm:flex-row sm:flex-wrap sm:pb-[5vw] pb-[23vw]  sm:justify-between sm:items-start sm:gap-x-[60px] sm:gap-y-[60px] gap-y-[20px]">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <HowToGetStartedItem
                index={index}
                key={index}
              ></HowToGetStartedItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
