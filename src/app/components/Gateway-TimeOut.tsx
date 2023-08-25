import Image from "next/image";
import word from "../../../public/svgs/globals/504-word.svg";
import spaceMan from "../../../public/svgs/globals/404-space-man.svg";
import stars from "../../../public/svgs/globals/404-stars.svg";
import mobileStars from "../../../public/svgs/globals/404-mobile-stars.svg";
import Link from "next/link";
import gazeLogo from "../../../public/svgs/globals/gazelogo-icon.svg";

export default function GatewayTimeout() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden font-raleWay">
      <Image
        src={gazeLogo.src}
        alt="gaze logo"
        width={30}
        height={70}
        className={"absolute top-[20px] left-[20px]"}
      ></Image>
      <Image
        src={spaceMan.src}
        alt="space man floating"
        width={200}
        height={200}
        className={"absolute top-[10%] z-10 hidden sm:block"}
      ></Image>
      <Image
        src={stars.src}
        alt="stars"
        width={200}
        height={200}
        className={"absolute w-full z-0 hidden sm:block"}
      ></Image>
      <Image
        src={mobileStars.src}
        alt="mobile stars"
        width={200}
        height={200}
        className={"absolute w-full z-0 sm:hidden"}
      ></Image>
      <Image
        src={word.src}
        width={600}
        height={700}
        className={"w-[70vw] sm:w-[60vw] max-w-[700px] absolute z-10"}
        alt={"404 word"}
      ></Image>
      <div className="absolute bottom-[14%] text-center">
        <div className="text-white mb-[20px] text-[1.3rem]">
          THE SERVER DID NOT RESPOND IN TIME (GATEWAY TIMEOUT ERROR)
        </div>
        <Link
          className="bg-neonGreen p-[13px] rounded-full mt-[24px]"
          href={"/"}
        >
          Return to our homepage
        </Link>
      </div>
    </div>
  );
}
