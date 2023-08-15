import demoNftImage from "../../../../public/svgs/profile/demo-nft-image.jpg";
import newlyMintedSticker from "../../../../public/svgs/profile/newly-minted-sticker.svg";
import newlyTransferSticker from "../../../../public/svgs/profile/newly-transfer-sticker.svg";
import fileIcon from "../../../../public/svgs/profile/file-icon.svg";
import Image from "next/image";

interface ProfileItemProps {
  newlyMinted: boolean;
  newlyTransfer: boolean;
}

export default function ProfileItem(props: ProfileItemProps) {
  const bothNewlyMintedAndTransfered = props.newlyMinted && props.newlyTransfer;
  return (
    <div className="w-full bg-[#F5F5F5] sm:max-w-[35vw] lg:max-w-[21vw] xl:max-w-[18vw] 2xl:max-w-[16vw]  border p-[14px] xl:p-[19px] rounded-[2px] border-gray-800 font-raleWay">
      <div className="mx-auto border border-gray-500 overflow-hidden relative rounded-[2px] xl:h-[220px] ">
        <div className={`${bothNewlyMintedAndTransfered ? "hidden" : "block"}`}>
          {" "}
          <Image
            alt="newly minted sticker"
            className={`${
              props.newlyMinted ? "block" : "hidden"
            }  absolute top-0 right-0`}
            width={100}
            height={100}
            src={newlyMintedSticker.src}
          ></Image>
          <Image
            alt="newly minted sticker"
            className={`${
              props.newlyTransfer ? "block" : "hidden"
            }  absolute top-0 right-0`}
            width={100}
            height={100}
            src={newlyTransferSticker.src}
          ></Image>
        </div>

        <div className={`${bothNewlyMintedAndTransfered ? "block" : "hidden"}`}>
          <Image
            alt="newly minted sticker"
            className={`${
              props.newlyMinted ? "block" : "hidden"
            }  absolute top-0 right-12`}
            width={100}
            height={100}
            src={newlyMintedSticker.src}
          ></Image>
          <Image
            alt="newly minted sticker"
            className={`${
              props.newlyTransfer ? "block" : "hidden"
            }  absolute top-0 right-0`}
            width={100}
            height={100}
            src={newlyTransferSticker.src}
          ></Image>
        </div>

        <Image
          src={demoNftImage.src}
          width={250}
          alt="demo Nft Image "
          className="w-full object-cover h-full"
          height={100}
        ></Image>
        <span className="bg-spacePurple text-[0.76rem] px-[6px] py-[2px] absolute bottom-3 right-3 font-semibold rounded-full border-black border">
          ETH: 0.52
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
          <span>Monkey With Party Hat </span>
        </div>
        <div className="text-[0.8rem] mt-[4px] text-[#716F6F]">
          <span className="text-[1rem] text-spacePurple font-bold"> @</span>
          KokoMaster217
        </div>
        <div className="text-[0.7rem] mt-[5px]">
          A monkey with a party hat with closed eyes and an open mouth.
        </div>
      </div>
    </div>
  );
}
