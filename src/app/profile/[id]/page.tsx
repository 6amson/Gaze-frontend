"use client";

import { Dna, RevolvingDot } from "react-loader-spinner";

import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileWithSub from "@/app/components/profile/ProfileWithSub";
import ProfileNoSubs from "@/app/components/profile/ProfileNoSubs";
import Signin from "@/app/signin/page";
import { useState, useEffect } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import NftListingItemType from "@/app/types/Nftlisting";
import { id } from "alchemy-sdk/dist/src/api/utils";
import { UserPageContext } from "@/app/components/UserPageContext";
import { useContext } from "react";
import { UserPageContextTypes } from "@/app/components/UserPageContext";
import { useRouter } from "next/navigation";

export default function profileMethods() {
  const router = useRouter();
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
    loading,
  } = useContext(UserPageContext) as UserPageContextTypes;

  const vapidControl = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;

  return (
    <div className="w-full">
      <div className=" sm:w-[83%] xl:w-[90%] px-[10px] h-full w-full max-w-full mx-auto">
        {!loading ? (
          isValid ? (
            isSubscribed ? (
              <ProfileWithSub
                isSubscribed={isSubscribed}
                isValidated={isValid}
                address={address}
                unSubscribe={unsubscribe}
                nftListingArray={nftCollectionListing}
                collectionName={collectionName}
                totalNft={totalNft}
              ></ProfileWithSub>
            ) : (
              <ProfileNoSubs
                askPermissionAndUpdate={askPermissionAndUpdate}
                collectionContractAddress={collectionContractAddress}
                setCollectionContractAddress={setCollectionContractAddress}
              ></ProfileNoSubs>
            )
          ) : (
            <div></div>
            // router.push('./')
          )
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
            <div className="mt-[10px] font-raleWay">Fetching your data.</div>
          </div>
        )}
      </div>
    </div>
  );
}
