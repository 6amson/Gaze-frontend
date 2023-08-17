import profileHeaderAvatar from "../../../../public/svgs/profile/profile-header-avatar.svg";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="w-full h-full  xl:max-h-[60px] max-h-[45px] backdrop-blur-sm border-b border-black fixed top-0 right-0 fixed-cont flex items-center">
      <div className="w-full h-full relative flex items-center">
        {" "}
        <div className="left-[70px] xl:left-[20vw] xxl:left-[17vw] absolute ">
          <Image
            src={profileHeaderAvatar.src}
            alt="profile header avatar"
            width={40}
            height={40}
          ></Image>
        </div>
        <div className="absolute right-[24px] lg:right-[36px] font-raleWay font-bold lg:text-[0.8rem] text-[0.8rem]">
          <span className="text-neonGreen">Welcome</span>, KOKOMASTER241.
        </div>
      </div>
    </div>
  );
}
