"use client";
import profileHeaderAvatar from "../../../../public/svgs/profile/profile-header-avatar.svg";
import Image from "next/image";
import { UserPageContext } from "../UserPageContext";
import { useContext } from "react";
import { UserPageContextTypes } from "../UserPageContext";

export default function ProfileHeader() {
  const {
    isSubscribed,
    isValid,
    askPermissionAndUpdate,
    getNftListing,
    address,
    unsubscribe,
    totalNft,
    nftCollectionListing,
    collectionName,
    collectionContractAddress,
    setCollectionContractAddress,
    username,
  } = useContext(UserPageContext) as UserPageContextTypes;
  return (
    <div className="w-full h-full  xl:max-h-[60px] max-h-[45px] backdrop-blur-sm border-b border-black fixed top-0 right-0 fixed-cont flex items-center">
      <div className="w-full h-full relative flex items-center">
        {" "}
        <div className="left-[70px] absolute xl:left-[250px] ">
          <Image
            src={profileHeaderAvatar.src}
            alt="profile header avatar"
            width={40}
            height={40}
          ></Image>
        </div>
        <div className="absolute right-[24px] lg:right-[36px] font-raleWay font-bold lg:text-[0.8rem] text-[0.8rem]">
          <span className="text-neonGreen">Welcome</span>,{" "}
          {username ? username : "user"}.
        </div>
      </div>
    </div>
  );
}
