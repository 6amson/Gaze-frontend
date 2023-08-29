import ProfileTitle from "./ProfileTitle";
import ProfileItem from "./ProfileItem";
import { useEffect } from "react";
import NFtlistingItenType from "../../types/Nftlisting";

interface ProfileWithSubProps {
  unSubscribe: () => void;
  isValidated: boolean;
  isSubscribed: boolean;
  address: string;
  nftListingArray: NFtlistingItenType[];
  totalNft: string;
  collectionName: string;
}

export default function ProfileWithSub(props: ProfileWithSubProps) {
  return (
    <div className="h-screen  w-full pt-[32px] xl:pt-[51px] ">
      <ProfileTitle
        collectionName={props.collectionName}
        totalNft={props.totalNft}
      ></ProfileTitle>
      <div className="flex flex-col gap-y-[20px] pb-[50px] mt-[40px] sm:flex-row sm:gap-x-[10px] sm:justify-between    sm:flex-wrap sm:gap-y-[40px]">
        {props.nftListingArray.slice(0, 12).map((item, index) => {
          return (
            <ProfileItem
              tokenId={item.tokenId}
              description={item.description}
              imageUrl={item.media[0].thumbnail}
              name={item.title}
              time={item.timeLastUpdated}
              newlyMinted={Math.random() > 0.5}
              newlyTransfer={Math.random() > 0.5}
              key={index}
            ></ProfileItem>
          );
        })}
      </div>
      <button
        onClick={() => {
          props.unSubscribe();
        }}
        className="text-[0.8rem] font-raleWay bg-neonGreen  p-[10px] font-bold border rounded-[5px] border-black"
      >
        UnSubscribe
      </button>
      <div className="pb-[40px]"></div>
    </div>
  );
}
