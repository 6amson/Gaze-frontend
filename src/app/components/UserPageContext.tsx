"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import React from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router';
import { Network, Alchemy } from "alchemy-sdk";
import NftListingItemType from "../types/Nftlisting";
import { ToastContainer, toast } from "react-toastify";
import NotificationObjType from "../types/NotificationObjType";

export interface UserPageContextTypes {
  username: string;
  isSubscribed: boolean;
  isValid: boolean;
  getNftListing: () => Promise<any>;
  unsubscribe: () => void;
  handleLogout: () => void;
  askPermissionAndUpdate: () => Promise<any>;
  loading: boolean;
  address: string;
  collectionName: string;
  totalNft: string;
  nftCollectionListing: NftListingItemType[];
  nftNotificationList: NotificationObjType[];
  collectionContractAddress: string;
  setCollectionContractAddress: Dispatch<SetStateAction<string>>;
  handleNotificationList: (data: NotificationObjType[]) => void;
}

export const UserPageContext = React.createContext<
  UserPageContextTypes | undefined
>(undefined);

interface UserPageProviderProps {
  children: React.ReactNode;
}

export default function UserPageProvider(props: UserPageProviderProps) {
  const router = useRouter();

  const vapidControl = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;
  const url = "https://gazebackend.cyclic.cloud/";

  const [isSubscribed, setIsSubscribed] = useState(false);
  // const [isValidated, setIsValidated] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [totalNft, setTotalNft] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [username, setUsername] = useState("");
  /* Added Nft listing item type */
  const [nftCollectionListing, setNftCollectionListing] = useState<
    NftListingItemType[]
  >([]);
  const [nftNotificationList, setNftNotificationList] = useState<
    NotificationObjType[]
  >([]);
  const [collectionContractAddress, setCollectionContractAddress] =
    useState("");

  const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPI,
    network: Network.ETH_MAINNET,
  };

  const handleNotificationList = (data: NotificationObjType[]) => {
    setNftNotificationList(data);
  };

  const alchemy = new Alchemy(settings);

  useEffect(() => {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");
    const refreshtoken = Cookies.get("Gaze_userAccess_RT");


    async function verifyValidAndSusbscribe(): Promise<any> {
      if ("serviceWorker" in navigator) {

        navigator.serviceWorker.register("/sw.js").then(() => {
          navigator.serviceWorker.ready.then(async (registration) => {
            // // Get the current subscription status
            // const subscription =
            //   await registration.pushManager.getSubscription();

            if (
              (accesstoken && refreshtoken) ||
              (accesstoken && !refreshtoken)
            ) {
              try {
                setLoading(true);

                const res = await axios.get(`${url}user/verify`, {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accesstoken}`,
                  },
                });
                if (res.status === 200) {
                  Cookies.set("Gaze_userAccess_RT", res.data.refreshToken);
                  const { contractAddress, username } = res.data;
                  setUsername(username);
                  setIsValid(true);

                  if (contractAddress === null || contractAddress === "") {
                    setIsSubscribed(false);
                  } else if (contractAddress != null || contractAddress != "") {
                    setIsSubscribed(true);
                    setAddress(contractAddress);
                  }
                }
              } catch (err) {
                router.push("/signin");
                setIsSubscribed(false);
                return err;
              } finally {
                setLoading(false);
              }
            } else if (accesstoken === null) {
              router.push("/signin");
            }
          });
        });
      } else {
        throw new Error("No service worker or push notification not supported");
      }
    }

    verifyValidAndSusbscribe();
  }, [isValid, isSubscribed]);

  // console.info({
  //   isSubscribed: isSubscribed,
  //   address: address,
  //   isValid: isValid,
  //   username: username,
  // });



  //logout function
  const handleLogout = (): void => {
    localStorage.removeItem("Gaze_userAccess_AT");
    Cookies.remove("Gaze_userAccess_RT");
    router.push('/');
  }

  //A function that requests permission from user to send them notification and updates the their profile
  //It sets state
  //To be attached to the subscribe button with ProfileWithNoSub
  async function askPermissionAndUpdate(): Promise<any> {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");

    try {
      setLoading(true);

      const permissionResult = await Notification.requestPermission();

      if (permissionResult !== "granted") {
        toast.info("Permission to send notifications denied.", {
          position: "top-center",
          autoClose: 2500,
          theme: "dark",
        });
        throw new Error("We weren't granted permission.");
      } else if (permissionResult == "granted" && "PushManager" in window) {
        // navigator.serviceWorker.register()
        (async function registerServiceWorker() {
          const registration = await navigator.serviceWorker.getRegistration()
          const subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey: vapidControl,
          };

          if (registration != undefined) {
            const pushSubscription =
              registration.pushManager.subscribe(subscribeOptions);
            console.log(
              "ServiceWorker installed and active with scope:",
              registration.scope
            );
            const subscriptionObject = await pushSubscription;
            const rawData = {
              contractAddress: collectionContractAddress,
              subscriptionId: subscriptionObject,
            };
            const data = JSON.stringify(rawData);
            try {
              const res = await axios.post(`${url}user/updateuser`, data, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accesstoken}`,
                },
              });

              const { contractAddress, } = res.data;

              setAddress(contractAddress);
              setIsSubscribed(true);

            } catch (err: any) {

              if (err.response.data.statusCode == 422) {
                toast.error(
                  `Wrong address format.\n` +
                  `\nConfirm the address is correct and retry.`,
                  {
                    position: "top-center",
                    autoClose: 2500,
                    theme: "dark",
                  }
                );
              } else if (err.response.data.statusCode == 400) {
                toast.error("Please enter a valid contract address.", {
                  position: "top-center",
                  autoClose: 2500,
                  theme: "dark",
                });
              } else if (err.response.data.statusCode == 500) {
                toast.error("This is from our end, please try again.", {
                  position: "top-center",
                  autoClose: 2500,
                  theme: "dark",
                });
              }
            }
          } else {
            toast.info("Your browser doesn't support features for subscription.", {
              position: "top-center",
              autoClose: 2500,
              theme: "dark",
            });
            throw new Error("No service worker not installed.");
          }

        })();

      }
      // console.log(permissionResult);
    } catch (err: any) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  //Unsubscribe function.
  //To be attached to the "unsubscribe" button in ProfileWithSubs page.
  async function unsubscribe(): Promise<any> {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");

    try {
      setLoading(true);

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(async (registration) => {
          const subscription = await registration.pushManager.getSubscription();

          const res = await axios.get(`${url}user/unsubscribe`, {
            headers: {
              Authorization: `Bearer ${accesstoken}`,
            },
          });

          setIsSubscribed(false);
          setAddress("");
          setCollectionContractAddress("");
          setNftNotificationList([]);

          if (subscription) {
            await subscription.unsubscribe();
          } else {
            setIsSubscribed(false);
          }
        });
      } else {
        throw new Error("No service worker.");
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }



  async function getNftListing(): Promise<any> {
    // const addr = "0x52Cd55E331931F14191e1F7A068421D89aDe730b";

    try {
      setLoading(true);
      const response: any = await alchemy.nft.getNftsForContract(address);
      const nftResponse: NftListingItemType[] = response.nfts;
      console.log(nftResponse);
      if (nftResponse[0].contract) {
        setTotalNft(nftResponse[0].contract.totalSupply);
        setCollectionName(nftResponse[0].contract.name);
      }
      setNftCollectionListing(nftResponse);
    } catch (err) {
      return err;
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserPageContext.Provider
      value={{
        username,
        isSubscribed,
        handleLogout,
        handleNotificationList,
        nftNotificationList,
        isValid,
        nftCollectionListing,
        getNftListing,
        unsubscribe,
        askPermissionAndUpdate,
        setCollectionContractAddress,
        collectionContractAddress,
        collectionName,
        totalNft,
        loading,
        address,
      }}
    >
      {" "}
      <div></div>
      {props.children}
    </UserPageContext.Provider>
  );
}
