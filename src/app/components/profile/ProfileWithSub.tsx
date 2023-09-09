import ProfileTitle from "./ProfileTitle";
import ProfileItem from "./ProfileItem";
import { useEffect, useContext } from "react";
import NFtlistingItenType from "../../types/Nftlisting";
import { UserPageContext, UserPageContextTypes } from "../UserPageContext";
import { Dna, RevolvingDot } from "react-loader-spinner";

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
  const { getNftListing, address, loading } = useContext(
    UserPageContext
  ) as UserPageContextTypes;
  console.log("menage", address);
  useEffect(() => {
    getNftListing();
  }, []);
  return (
    <>
      {!loading ? (
        <div className="h-screen  w-full pt-[32px] xl:pt-[51px] ">
          <ProfileTitle
            nftTitleImage={props.nftListingArray[0].media[0].thumbnail}
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
      ) : (
        <div className="flex flex-col w-full h-[80vh] relative items-center justify-center">
          <RevolvingDot
            radius={100}
            strokeWidth={2}
            color="#A157FF "
            secondaryColor=""
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <div className="mt-[10px] font-raleWay">
            Fetching your Nft listing data.
          </div>
        </div>
      )}
    </>
  );
}
