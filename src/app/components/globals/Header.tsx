import whiteTextIconLogo from "../../../../public/svgs/globals/white-text-icon-logo.svg";
import mobileMenuIcon from "../../../../public/svgs/header/mobile-menu-icon.svg";
import Image from "next/image";

export default function Header() {
  const headerButtons = [
    { name: "Home" },
    { name: "FAQ" },
    { name: "Connect with Metamask", isConnect: true },
  ];

  return (
    <div className="w-full bg-black z-40 relative top-0 ">
      <div className="font-raleWay m-auto  text-white w-full max-w-[1440px] sm:h-[80px] h-[45px]  flex items-center relative">
        <Image
          src={whiteTextIconLogo.src}
          alt="logo with text"
          width={256}
          className="sm:ml-[37px] ml-[18px] w-[70px] xl:w-[100px]"
          height={100}
        ></Image>
        <div className="gap-x-[79px] absolute right-[48px] sm:right-[27px] flex   ">
          {headerButtons.map((item, index) => {
            return (
              <button
                className={`${
                  item.isConnect
                    ? "border border-neonGreen p-[10px] sm:p-[14px] rounded-[10px] "
                    : "hidden sm:block"
                } text-white  2xl:text-[0.875rem] text-[0.7rem] leading-none`}
                key={index}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <button className="absolute right-[16px] sm:hidden">
          <Image
            src={mobileMenuIcon.src}
            alt="mobile menu btn icon"
            width={3}
            height={16}
          ></Image>
        </button>
      </div>
    </div>
  );
}
