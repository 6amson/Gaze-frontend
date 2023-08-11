import whiteTextIconLogo from "../../../../public/svgs/globals/white-text-icon-logo.svg";
import Image from "next/image";

export default function Header() {
  const headerButtons = [
    { name: "Home" },
    { name: "FAQ" },
    { name: "Connect with Metamask", isConnect: true },
  ];

  return (
    <div className="w-full bg-black z-40 relative top-0">
      <div className="font-raleWay m-auto  text-white w-full max-w-[1440px] h-[80px] flex items-center relative">
        <Image
          src={whiteTextIconLogo.src}
          alt="logo with text"
          width={256}
          className="ml-[37px] w-[70px] xl:w-[100px]"
          height={100}
        ></Image>
        <div className="gap-x-[79px] absolute right-[27px] flex   ">
          {headerButtons.map((item, index) => {
            return (
              <button
                className={`${
                  item.isConnect
                    ? "border border-neonGreen p-[14px] rounded-[10px]"
                    : ""
                } text-white  2xl:text-[0.875rem] text-[0.7rem] leading-none`}
                key={index}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
