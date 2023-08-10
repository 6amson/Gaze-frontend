import heroMainLp from "../../../../public/svgs/landing-page/hero-main-lp.svg";
import heroStarsLp from "../../../../public/svgs/landing-page/hero-stars-lp.svg";
import whiteTextIconLogo from "../../../../public/svgs/globals/white-text-icon-logo.svg";
import whiteTextLogo from "../../../../public/svgs/globals/white-text-logo.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-black h-screen w-full flex flex-col items-center font-raleWay">
      <Image
        width={"100"}
        height={"100"}
        className={"w-full absolute top-0 2xl:w-[70vw]"}
        alt={"green stars "}
        src={heroStarsLp.src}
      ></Image>
      <Image
        src={heroMainLp.src}
        width={"700"}
        className={"w-[50vw] absolute top-[130px] 2xl:w-[40vw]"}
        height={"400"}
        alt={"man floating in space"}
      ></Image>
      <div className="uppercase leading-tight text-white font-black text-[58px] text-center absolute bottom-[8%]">
        Track your favorite NFT
        <div>Collection</div>
        <div>
          <button className="bg-neonGreen text-[18px]  font-normal text-black  px-[18px] py-[14px] rounded-[10px] mt-[20px]">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
