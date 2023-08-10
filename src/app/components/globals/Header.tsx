import whiteTextIconLogo from "../../../../public/svgs/globals/white-text-icon-logo.svg";
import Image from "next/image";

export default function Header() {
  const headerButtons = [
    { name: "home" },
    { name: "FAQ" },
    { name: "connect with meta-mask", isConnect: true },
  ];
  return (
    <div className="w-full bg-black z-40 absolute top-0">
      <div className="font-raleWay m-auto  text-white w-full max-w-[1440px] h-[99px]  flex items-center relative">
        <Image
          src={whiteTextIconLogo.src}
          alt="logo with text"
          width={256}
          className="ml-[37px] w-[100px] xl:w-[140px]"
          height={100}
        ></Image>
        <div className="gap-x-[79px] absolute right-[27px] flex   ">
          {headerButtons.map((item, index) => {
            return (
              <button
                className={`${
                  item.isConnect
                    ? "border border-neonGreen p-[10px] rounded-[10px]"
                    : ""
                } text-white uppercase 2xl:text-[0.8rem] text-[0.8rem] leading-none`}
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
