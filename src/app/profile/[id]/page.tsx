"use client";

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
    isValidated,
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
  const url = "https://gazebackend.cyclic.cloud/";

  return (
    <div>
      <div className="mx-auto sm:w-[83%] xl:w-[90%] px-[10px] ">
        {!loading ? (
          isValidated ? (
            isSubscribed ? (
              <ProfileWithSub
                isSubscribed={isSubscribed}
                isValidated={isValidated}
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
            <div>No authorization but this should redirect to signup page</div>
            // router.push('./')
          )
        ) : (
          <>Loading</>
        )}
      </div>
    </div>
  );
}
