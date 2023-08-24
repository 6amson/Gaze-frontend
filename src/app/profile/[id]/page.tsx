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

export default function profileMethods() {
  const vapidControl = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;
  const url = "https://gazebackend.cyclic.cloud/";

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const settings = {
    apiKey: "UPVHDe_ZySIpaOCwjWeF4n2ktkjpJxGg",
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  async function askPermissionAndUpdate(address: string): Promise<any> {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");

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

  async function getNftListing(): Promise<any> {
    const addr = "0x52Cd55E331931F14191e1F7A068421D89aDe730b";

    try {
      const response = await alchemy.nft.getNftsForContract(addr);
      console.log(response);
    } catch (err) {
      throw err;
    }
  }

  const handleAuth = async (): Promise<any> => {
    const accesstoken = localStorage.getItem("Gaze_userAccess_RT");
    const refreshtoken = Cookies.get("Gaze_userAccess_AT");

    if ((accesstoken && refreshtoken) || (accesstoken && !refreshtoken)) {
      // console.log(accesstoken);
      axios
        .post("http://localhost:3005/user/verify", {
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

  // useEffect(() => {
  //     verifyValidAndSusbscribe();
  // })

  return (
    <div>
      <Profile askPermission={getNftListing} />

      {/*   <div className="mx-auto sm:w-[83%] xl:w-[90%] px-[10px]  ">
        <ProfileWithSub></ProfileWithSub>
        <ProfileNoSubs></ProfileNoSubs>
      </div> */}
    </div>
  );
}
