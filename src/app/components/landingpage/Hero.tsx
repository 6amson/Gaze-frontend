import heroMainLp from "../../../../public/svgs/landing-page/hero-main-lp.svg";
import heroStarsLp from "../../../../public/svgs/landing-page/hero-stars-lp.svg";
import whiteTextIconLogo from "../../../../public/svgs/globals/white-text-icon-logo.svg";
import whiteTextLogo from "../../../../public/svgs/globals/white-text-logo.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-full w-full flex flex-col items-center font-raleWay relative overflow-hidden">
      <Image
        width={"100"}
        height={"100"}
        className={"w-screen max-w-[1440px] absolute "}
        alt={"green stars "}
        src={heroStarsLp.src}
      ></Image>

      <Image
        src={heroMainLp.src}
        width={"700"}
        className={"w-[50vw] absolute top-[130px] 2xl:w-[47vw]"}
        height={"400"}
        alt={"man floating in space"}
      ></Image>
      <div className="absolute bottom-[10%] text-center">
        <div className="uppercase leading-tight text-white font-black 2xl:text-[3.3rem] xl:text-[3.3rem] lg:text-[3rem] text-center ">
          Track your favorite <span className="text-spacePurple">NFT</span>
          <div>Collection</div>
        </div>
        <button className="bg-neonGreen uppercase mt-[1rem] 2xl:text-[1rem] xl:text-[0.8rem] lg:text-[0.7rem] text-[0.6rem] p-[0.8rem] xl:p-[1rem] font-bold leading-none  text-black rounded-[10px]">
          Get Started
        </button>
      </div>
    </div>
  );
}
