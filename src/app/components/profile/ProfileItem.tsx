import demoNftImage from "../../../../public/svgs/profile/demo-nft-image.jpg";
import newlyMintedSticker from "../../../../public/svgs/profile/newly-minted-sticker.svg";
import newlyTransferSticker from "../../../../public/svgs/profile/newly-transfer-sticker.svg";
import fileIcon from "../../../../public/svgs/profile/file-icon.svg";
import Image from "next/image";

interface ProfileItemProps {
  newlyMinted: boolean;
  newlyTransfer: boolean;
  name: string;
  time: string;
  imageUrl: string;
  description: string;
  tokenId: string;
}

export default function ProfileItem(props: ProfileItemProps) {
  return (
    <div className="w-full bg-[#F5F5F5] sm:max-w-[35vw] lg:max-w-[21vw] xl:max-w-[20vw] 2xl:max-w-[16vw]  border p-[14px] xl:p-[19px] rounded-[10px] border-gray-800 font-raleWay">
      <div className="mx-auto border border-gray-500 overflow-hidden relative rounded-[10px] xl:h-[220px] ">
        <Image
          src={props.imageUrl}
          width={250}
          alt="demo Nft Image "
          className="w-full object-cover h-full"
          height={100}
        ></Image>
        <span className="bg-spacePurple text-[0.76rem] flex items-center px-[6px] py-[2px] absolute bottom-3 right-3 font-semibold rounded-full border-black border">
          Token-id: <span className=" h-fit ml-1">{props.tokenId}</span>
        </span>
      </div>
      <div className="leading-tight flex flex-col gap-y-[9px] sm:gap-y-0 mt-[9px] pb-[30px] xl:pb-[15px] text-[#9C9999]">
        <div className="text-[1rem] font-extrabold text-black   gap-x-[5px] ">
          <Image
            src={fileIcon.src}
            width={12}
            height={20}
            className={"inline"}
            alt={"file icon"}
          ></Image>{" "}
          <span>{props.name} </span>
        </div>
        <div className="text-[0.8rem] mt-[4px] text-[#716F6F]">
          <span className="text-[0.7rem] text-spacePurple font-bold">
            {" "}
            Last Updated:
          </span>
          {"   "}
          {props.time.substring(0, 10)}
        </div>
        <div className="text-[0.7rem] mt-[5px]">{props.description}</div>
      </div>
    </div>
  );
}
