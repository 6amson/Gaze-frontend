import profileHeaderMobileExtra from "../../../../public/svgs/profile/profile-title-mobile-logo.svg";
import profileHeaderLaptopExtra from "../../../../public/svgs/profile/profile-title-lp-logo.svg";
import demoTitleNftImage from "../../../../public/svgs/profile/demo-title-nft-image.png";
import Image from "next/image";

interface ProfileTitleProps {
  collectionName: string;
  totalNft: string;
  nftTitleImage: string;
}

export default function ProfileTitle(props: ProfileTitleProps) {
  return (
    <div className="w-full relative z-0">
      <div className="w-full relative z-20">
        <div className="w-full border-2 sm:border-2 overflow-hidden border-black font-raleWay bg-white relative p-[20px] sm:px-[40px] sm:py-[35px] rounded-[16px] sm:rounded-[30px] sm:flex gap-x-[23px]">
          <div className="relative rounded-[16px] overflow-hidden border-2 border-black hidden sm:block">
            <div className="bg-spacePurple left-[9px] top-[9px] z-30 absolute rounded-full font-bold border hidden sm:block px-[10px] py-[6px] text-[0.8rem] border-black">
              Subscribed
            </div>
            <Image
              src={
                props.nftTitleImage
                  ? props.nftTitleImage
                  : demoTitleNftImage.src
              }
              alt={"demo title nft image"}
              width={350}
              height={300}
              unoptimized={true}
              className={
                " sm:w-[240px] xl:w-[240px] xxl:w-[240px] 2xl:w-[260px] z-20 relative h-[160px] object-cover object-bottom"
              }
            ></Image>
          </div>
          <Image
            src={profileHeaderMobileExtra.src}
            alt="logo hollowed"
            width={100}
            height={100}
            className="absolute right-0 bottom-0 z-0 sm:hidden"
          ></Image>
          <Image
            src={profileHeaderLaptopExtra.src}
            alt="logo hollowed"
            width={350}
            height={100}
            className="absolute  top-0 right-[-5%] z-0 hidden w-[20vw] sm:block xl:w-[18vw] xxl:w-[25vw]  max-w-[290px] "
          ></Image>
          <div className="font-black leading-tight text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] z-30 xl:text-[1.5rem] 2xl:text-[1.6rem]  sm:w-[40%] ">
            You are subscribed to the{" "}
            <span className="text-spacePurple">{props.collectionName}</span> NFT
            collection.
          </div>
          {/* Mobile NFT information */}
          <div className="flex justify-between relative mt-[11px] h-fit sm:hidden ">
            <div className="bg-spacePurple rounded-full font-bold border-2 px-[10px] py-[6px] text-[0.8rem] border-black">
              Subscribed
            </div>
            <div className="bg-spacePurple rounded-full font-bold border-2 px-[10px] py-[6px] text-[0.8rem] border-black">
              {props.totalNft} Nfts
            </div>
          </div>
          {/* laptop NFT information */}

          <div className="bg-spacePurple leading-none hidden sm:block lg:right-[40px] sm:right-[30px] sm:bottom-[30px] lg:bottom-[30px] absolute rounded-full w-fit font-bold border sm:px-[30px] xl:px-[20px] xl:py-[10px] sm:py-[10px] px-[10px] py-[6px] text-[0.8rem] sm:text-[1rem] border-black">
            {props.totalNft} Nfts
          </div>
        </div>
      </div>
      <div className="w-full absolute h-full bg-black top-[5px] left-[5px] sm:rounded-[30px] sm:top-[15px] sm:left-[15px] z-0 rounded-[16px]"></div>
    </div>
  );
}
