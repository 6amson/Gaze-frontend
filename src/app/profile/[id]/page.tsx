"use client";

import Profile from "./profileMethods";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileWithSub from "@/app/components/profile/ProfileWithSub";
import ProfileNoSubs from "@/app/components/profile/ProfileNoSubs";
import { useState, useEffect } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import NftListingItemType from "@/app/types/Nftlisting";
import { id } from "alchemy-sdk/dist/src/api/utils";

export default function profileMethods() {
  const vapidControl = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;
  const url = "https://gazebackend.cyclic.cloud/";

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [totalNft, setTotalNft] = useState("");
  const [collectionName, setCollectionName] = useState("");
  /* Added Nft listing item type */
  const [nftCollectionListing, setNftCollectionListing] = useState<
    NftListingItemType[]
  >([]);

  const [collectionContractAddress, setCollectionContractAddress] =
    useState("");

  const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPI,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  useEffect(() => {
    verifyValidAndSusbscribe();
    return;
    getNftListing();
  }, []);

  //A function that requests permission from user to send them notification and updates the their profile
  //It sets stste
  //To be attached to the subscribe button with ProfileWithNoSub
  async function askPermissionAndUpdate(address: string): Promise<any> {
    try {
      const permissionResult = await Notification.requestPermission();

      if (permissionResult !== "granted") {
        throw new Error("We weren't granted permission.");
      } else if (permissionResult == "granted") {
        // navigator.serviceWorker.register()
        (async function registerServiceWorker() {
          if ("serviceWorker" in navigator) {
            const registration = await navigator.serviceWorker.register(
              "/sw.js"
            );
            const subscribeOptions = {
              userVisibleOnly: true,
              applicationServerKey: vapidControl,
            };

            const pushSubscription =
              registration.pushManager.subscribe(subscribeOptions);
            // console.log((await pushSubscription).toJSON());
            console.log(
              "ServiceWorker registration successful with scope:",
              registration.scope
            );
            const subscriptionObject = await pushSubscription;
            // return subscriptionObject.toJSON();
            // console.log(address, subscriptionObject.toJSON())
            // return subscriptionObject;
            const rawData = {
              contractAddress: address,
              subscriptionId: subscriptionObject,
            };
            const data = JSON.stringify(rawData);
            // `${url}user/updateuser`,
            setLoading(true);
            const res = await axios.post(`${url}user/updateuser`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            });
            console.log("here:", res.data);

            //most likely wrap this in useContext API as they are neceessary for the state of the entire profile page
            setAddress(address);
            setIsSubscribed(true);
            setIsValidated(true);
          } else {
            console.log("No service-worker on this browser");
          }
        })();
      }

      // console.log(permissionResult);
    } catch (err: any) {
      console.info("Permission request failed: " + err);
      if (err.response.data.statusCode == 406) {
        toast.error(
          "Wrong address format, confirm the address is correct and retry.",
          {
            position: "top-center",
            autoClose: 2500,
            theme: "dark",
          }
        );
      } else if (err.response.data.statusCode == 500) {
        toast.error("This is from our end, please try again", {
          position: "top-center",
          autoClose: 2500,
          theme: "dark",
        });
      }
      return err;
    } finally {
      setLoading(false);
    }
  }

  //A function that verifies the subscription status and validity of users.
  //To be called in useEffect in this page.
  //Set states
  async function verifyValidAndSusbscribe(): Promise<any> {
    try {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        navigator.serviceWorker.ready.then(async (registration) => {
          // Get the current subscription status
          const subscription = await registration.pushManager.getSubscription();

          const { contractAddress, isValid } = await handleAuth();
          if (subscription) {
            setAddress(contractAddress);
            setIsSubscribed(true);
            setIsValidated(isValid);

            // return { isSubscribed: true, contractAddress, isValid };
          } else {
            setIsSubscribed(false);
            setIsValidated(isValid);
            // return { isSubscribed: false };
          }
        });
      } else {
        throw new Error("No service worker or push notification not supported");
      }
    } catch (err: any) {
      console.log(err);
    } finally {
    }
  }

  //Unsubscribe function.
  //To be attached to the "unsubscribe" button in ProfileWithSubs page.
  async function unsubscribe(): Promise<any> {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");

    try {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        navigator.serviceWorker.ready.then(async (registration) => {
          const subscription = await registration.pushManager.getSubscription();

          if (subscription) {
            const susbscriptionState = await subscription.unsubscribe();
            setIsSubscribed(!susbscriptionState);
            //  console.info(susbscriptionState);

            const res = await axios.post(`${url}user/unsubscribe`, {
              headers: {
                Authorization: `Bearer ${accesstoken}`,
              },
            });

            console.info(res.data);
          } else {
            setIsSubscribed(false);
          }
        });
      } else {
        throw new Error("No service worker or push notification not supported");
      }
    } catch (err: any) {
      console.log(err);
    } finally {
    }
  }

  //A METHOD.
  //Handles the validity of the users. Returns an object, doesn't set any state.
  const handleAuth = async (): Promise<any> => {
    const accesstoken = localStorage.getItem("Gaze_userAccess_RT");
    const refreshtoken = Cookies.get("Gaze_userAccess_AT");

    if ((accesstoken && refreshtoken) || (accesstoken && !refreshtoken)) {
      // console.log(accesstoken);
      axios
        .post(`${url}/user/verify`, {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            Cookies.set("Gaze_userAccess_AT", res.data.refreshToken);
            const { userId } = res.data;
            const { contractAddress } = res.data;
            const encodedString = encodeURIComponent(userId);
            return {
              isValid: true,
              encodedString: encodedString,
              contractAddress,
            };
          }
        })
        .catch((err) => {
          console.log(err);
          // router.push('/signin');
          return { isValid: false };
        });
    } else if (!accesstoken && !refreshtoken) {
      // router.push('/signin');
      return { isValid: false };
    }
  };

  async function getNftListing(): Promise<any> {
    const addr = "0x52Cd55E331931F14191e1F7A068421D89aDe730b";

    try {
      const response: any = await alchemy.nft.getNftsForContract(addr);
      const nftResponse: NftListingItemType[] = response.nfts;
      console.log(nftResponse);
      if (nftResponse[0].contract) {
        setTotalNft(nftResponse[0].contract.totalSupply);
        setCollectionName(nftResponse[0].contract.name);
      }
      setNftCollectionListing(nftResponse);
    } catch (err) {
      throw err;
    }
  }

  return (
    <div>
      <Profile askPermission={getNftListing} />

      <div className="mx-auto sm:w-[83%] xl:w-[90%] px-[10px] ">
        <ProfileWithSub
          isSubscribed={isSubscribed}
          isValidated={isValidated}
          address={address}
          unSubscribe={unsubscribe}
          nftListingArray={nftCollectionListing}
          collectionName={collectionName}
          totalNft={totalNft}
        ></ProfileWithSub>
        {isValidated ? (
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
          <div>Unauthorized</div>
        )}
      </div>
    </div>
  );
}
