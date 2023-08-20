"use client";
import sideBarSubs from "../../../../public/svgs/profile/sidebar-subs.svg";
import sideBarNotifs from "../../../../public/svgs/profile/sidebar-notifs.svg";
import sideBarLogout from "../../../../public/svgs/profile/sidebar-logout.svg";
import sideBarLogoMobile from "../../../../public/svgs/profile/sidebar-logo-mobile.svg";
import sideBarLogoLaptop from "../../../../public/svgs/profile/sidebar-logo-lp.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function ProfileSideBar() {
  const pathName = usePathname();

  const sideBarLinks = [
    { name: "SUBSCRIPTIONS", location: "/profile/1", icon: sideBarSubs },
    {
      name: "NOTIFICATIONS",
      location: "/profile/1/notifications",
      icon: sideBarNotifs,
    },
  ];
  return (
    <div className="w-[100%]  xl:max-w-[220px] xl:px-[15px] items-center gap-y-[30px] max-w-[54px] fixed-cont h-screen bg-black fixed  left-0 flex flex-col">
      <Image
        src={sideBarLogoMobile.src}
        width={35}
        height={35}
        className={"mt-[12px] xl:hidden"}
        alt={"gaze logo"}
      ></Image>
      <Image
        src={sideBarLogoLaptop.src}
        width={150}
        height={35}
        className={"mt-[16px] xl:block hidden"}
        alt={"gaze logo"}
      ></Image>
      {sideBarLinks.map((item, index) => {
        return (
          <Link
            className={`${
              item.location === pathName ? "bg-spacePurple" : "bg-[#441185]"
            } p-[5px] xl:px-[12px] flex items-center duration-300 xl:h-[38px]  w-fit xl:w-full rounded-[13px] xl:gap-x-[10px] `}
            href={item.location}
          >
            <Image
              width={25}
              height={25}
              src={item.icon.src}
              className={"xl:w-[18px]"}
              alt={`${item.name} sidebar icon`}
            ></Image>
            <span className="text-white xl:block tracking-wider leading-none hidden font-raleWay text-[0.8rem] xl:text-[0.73rem] font-semibold">
              {item.name}
            </span>
          </Link>
        );
      })}

      <button
        className={`p-[5px] absolute bottom-[10%] xl:px-[12px] flex items-center duration-300 xl:h-[38px]  w-fit xl:w-full rounded-[13px] xl:gap-x-[10px] `}
      >
        <Image
          width={25}
          height={25}
          src={sideBarLogout.src}
          className={"xl:w-[18px]"}
          alt={`logout sidebar icon`}
        ></Image>
        <span className="text-white xl:block tracking-wider leading-none hidden font-raleWay text-[0.8rem] xl:text-[0.73rem] font-semibold">
          LOGOUT
        </span>
      </button>
    </div>
  );
}