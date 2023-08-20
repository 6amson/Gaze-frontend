"use client";

import Profile from "./profileMethods";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileWithSub from "@/app/components/profile/ProfileWithSub";
import ProfileNoSubs from "@/app/components/profile/ProfileNoSubs";
import { useState } from "react";

export default function profileMethods() {
    const vapidControl = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;
    const url = "http://localhost:3005/"


    const [isSubscribed, setIsSubscribe] = useState(false);
    const [isValidated, setIsValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState('');

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

                        const pushSubscription = registration.pushManager.subscribe(subscribeOptions);
                        // console.log((await pushSubscription).toJSON());
                        console.log(
                            "ServiceWorker registration successful with scope:",
                            registration.scope
                        );
                        const subscriptionObject = await pushSubscription;
                        // return subscriptionObject.toJSON();
                        // console.log(address, subscriptionObject.toJSON())
                        // return subscriptionObject;
                        const rawData = { contractAddress: address, subscriptionId: subscriptionObject };
                        const data = JSON.stringify(rawData);
                        // `${url}user/updateuser`,
                        setLoading(true);
                        const res = await axios.post(`${url}user/updateuser`, data, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                        console.log('here:', res.data);

                        //most likely wrap this in useContext API as they are neceessary for the state of the entire profile page
                        setAddress(address);
                        setIsSubscribe(true);
                        setIsValidated(true);

                    } else {
                        console.log("No service-worker on this browser");
                    }
                })();
            }

            console.log(permissionResult);

        } catch (err: any) {
            console.info("Permission request failed: " + err);
            if (err.response.data.statusCode == 406) {
                toast.error('Wrong address format, confirm the address is correct and retry.', {
                    position: "top-center",
                    autoClose: 2500,
                    theme: "dark",
                })
            } else if (err.response.data.statusCode == 500) {
                toast.error('This is from our end, please try again', {
                    position: "top-center",
                    autoClose: 2500,
                    theme: "dark",
                })
            }
            return err;
        } finally {
            setLoading(false)
        }

    }

    async function verifySubscription(): Promise<any> {
        // Check if the browser supports the Push API
        if ("serviceWorker" in navigator && "PushManager" in window) {
            navigator.serviceWorker.ready.then(async (registration) => {
                // Get the current subscription status
                const subscription = await registration.pushManager.getSubscription();

                if (subscription) {
                    const {contractAddress, isValid } = await handleAuth();
                    return { isSubscribed: true, contractAddress, isValid };
                } else {
                    return { isSubscribed: false };
                }
            });
        } else {
            throw new Error("No service worker or push notification not supported");
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
                        const {contractAddress} = res.data;
                        const encodedString = encodeURIComponent(userId);
                        return { isValid: true, encodedString: encodedString, contractAddress };
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

    return (
        <div>
            {/* <Profile
                verifySubscription={verifySubscription}
                askPermission={askPermissionAndUpdate}
            /> */}

            <div className="mx-auto sm:w-[83%] xl:w-[90%] px-[10px]  ">
                {/* <ProfileWithSub></ProfileWithSub> */}
                <ProfileNoSubs></ProfileNoSubs>
            </div>
        </div>
    );
}
