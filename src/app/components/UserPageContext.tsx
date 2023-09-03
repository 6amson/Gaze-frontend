"use client";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import React from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router';
import { Network, Alchemy } from "alchemy-sdk";
import NftListingItemType from "../types/Nftlisting";
import { ToastContainer, toast } from "react-toastify";
import NotificationObjType from "../types/NotificationObjType";
import { MetaMaskSDK } from "@metamask/sdk";
import { id } from "alchemy-sdk/dist/src/api/utils";

export interface UserPageContextTypes {
  connectMetamask: () => Promise<any>;
  ismetaMaskConnected: boolean;
  metamaskAddr: string | null;
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
  verifyValidAndSusbscribeTwo: () => void;
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
  const [metamaskAddr, setMetamaskAddr] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [ismetaMaskConnected, setIsmetaMaskConnected] = useState(false);
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
            // Get the current subscription status

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

  const verifyValidAndSusbscribeTwo = () => {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");
    const refreshtoken = Cookies.get("Gaze_userAccess_RT");

    async function verifyValidAndSusbscribe(): Promise<any> {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        navigator.serviceWorker.register("/sw.js").then(() => {
          toast.info("registered service worker", { autoClose: false });
          navigator.serviceWorker.ready.then(async (registration) => {
            toast.info("runining serviceWorker ready", {
              autoClose: false,
            });
            // Get the current subscription status
            const subscription =
              await registration.pushManager.getSubscription();

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
  };

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
    setIsValid(false);
    setIsSubscribed(false);
    setUsername("");
    router.push("/");
  };

  //A function that requests permission from user to send them notification and updates the their profile
  //It sets stste
  //To be attached to the subscribe button with ProfileWithNoSub
  async function askPermissionAndUpdate(): Promise<any> {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");

    try {
      setLoading(true);

      const permissionResult = await Notification.requestPermission();

      if (permissionResult !== "granted") {
        throw new Error("We weren't granted permission.");
      } else if (permissionResult == "granted" && "PushManager" in window) {
        // navigator.serviceWorker.register()
        (async function registerServiceWorker() {
          if ("serviceWorker" in navigator) {
            const registration =
              await navigator.serviceWorker.getRegistration();
            const subscribeOptions = {
              userVisibleOnly: true,
              applicationServerKey: vapidControl,
            };

            if (registration != undefined) {
              const pushSubscription =
                registration.pushManager.subscribe(subscribeOptions);
              console.log(
                "ServiceWorker present with scope:",
                registration.scope
              );
              const subscriptionObject = await pushSubscription;
              const rawData = {
                contractAddress: collectionContractAddress,
                subscriptionId: subscriptionObject,
              };
              try {
                const data = JSON.stringify(rawData);
                const res = await axios.post(`${url}user/updateuser`, data, {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accesstoken}`,
                  },
                });

                const { contractAddress } = res.data;
                setAddress(contractAddress);
                setIsSubscribed(true);
              } catch (err: any) {
                if (err.response.data.statusCode == 422) {
                  toast.error(
                    "Wrong address format, confirm the address is correct and retry.",
                    {
                      position: "top-center",
                      autoClose: 3000,
                      theme: "dark",
                    }
                  );
                } else if (err.response.data.statusCode == 400) {
                  toast.error("Please enter a contract address.", {
                    position: "top-center",
                    autoClose: 2500,
                    theme: "dark",
                  });
                } else if (err.response.data.statusCode == 500) {
                  toast.error("This is from our end, please try again", {
                    position: "top-center",
                    autoClose: 2500,
                    theme: "dark",
                  });
                }
                return err;
              }
            }
          } else {
            toast.info(
              "Your browser doesn't support features for subscription.",
              {
                position: "top-center",
                autoClose: 2500,
                theme: "dark",
              }
            );
            console.log("No service-worker on this browser");
          }
        })();
      }
    } catch (err: any) {
      return err;
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
            const susbscriptionState = await subscription.unsubscribe();
            console.info(susbscriptionState);
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
      setLoading(false);
    }
  }

  async function getNftListing(): Promise<any> {
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

  async function connectMetamask(): Promise<any> {
    try {
      let Window: any = window;

      if (window) {
        if (Window.ethereum) {
          console.log("metamask present");

          const accounts: any = await Window.ethereum.request({
            method: "eth_requestAccounts",
          });

          console.info(accounts);

          if (accounts[0] !== "null") {
            console.log("metamask connected");
            const Message = "Sign the nonce";
            const from = accounts[0];
            const msg = `0x${Buffer.from(Message, "utf8").toString("hex")}`;
            const sign = await Window.ethereum.request({
              method: "personal_sign",
              params: [msg, from],
            });
          }
        } else {
          alert("You do not have Metamask.");
        }
      }
    } catch (err: any) {
      if (err.code == "-32002") {
        alert("Your connection is pending. Please, open metamask to continue.");
      } else if (err.code == "4001") {
        alert("You rejected the request to connect Metamask.");
      } else {
        alert("Thre is an error connecting with your metamask");
      }
      return err;
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserPageContext.Provider
      value={{
        connectMetamask,
        ismetaMaskConnected,
        metamaskAddr,
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
        verifyValidAndSusbscribeTwo,
      }}
    >
      {" "}
      {props.children}
    </UserPageContext.Provider>
  );
}
