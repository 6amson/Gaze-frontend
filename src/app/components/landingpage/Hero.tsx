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
        className={"w-screen absolute -top-[10vw]"}
        alt={"green stars "}
        src={heroStarsLp.src}
      ></Image>
      <Image
        src={heroMainLp.src}
        width={"700"}
        className={"w-[40vw] absolute top-[130px] 2xl:w-[40vw]"}
        height={"400"}
        alt={"man floating in space"}
      ></Image>
      <div className="uppercase leading-tight text-white font-black text-[64px] text-center absolute bottom-[6%]">
        Track your favorite NFT
        <div>Collection</div>
        <button className="bg-neonGreen text-[1.5rem] p-[0.5rem] font-normal text-black rounded-[0.25rem]">
          GET STARTED
        </button>
      </div>
    </div>
  );
}
