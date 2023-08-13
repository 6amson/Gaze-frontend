'use client'

import axios from "axios";
import Cookies from "js-cookie";

const vapidKeys = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;

export class gazeJobs {

    constructor() { }


    public verifySubscription(): { isSubscribed: boolean } {
        // Check if the browser supports the Push API
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.ready.then(async (registration) => {
                // Get the current subscription status
                const subscription = await registration.pushManager.getSubscription();

                if (subscription) {
                    return { isSubscribed: true }
                } else {
                    return { isSubscribed: false }
                }
            });
        }

        throw new Error('No service worker or push notification not supported')
    }

    public async handleAuth(): Promise<any> {
        const accesstoken = localStorage.getItem('token');
        const refreshtoken = Cookies.get('userAccess_TT');

        if (accesstoken && refreshtoken || accesstoken && !refreshtoken) {
            // console.log(accesstoken);
            axios.get('http://localhost:3005/user/verify', {
                headers: {
                    'Authorization': `Bearer ${accesstoken}`
                }
            }).then((res) => {

                if (res.status == 200) {
                    Cookies.set('Gaze_userAccess_AT', res.data.refreshToken);
                    const { userId } = res.data;
                    const encodedString = encodeURIComponent(userId);
                    return { isAuth: true, encodedString }
                }

            }).catch((err) => {
                console.log(err);
                return { isAuth: false }
            });

        } else if (!accesstoken && !refreshtoken) {
            return { isAuth: false }
        }
    }

    public async askPermission() {
        try {
            const permissionResult = await Notification.requestPermission();

            if (permissionResult !== 'granted') {
                throw new Error("We weren't granted permission.");
            } else if (permissionResult == 'granted') {
                // navigator.serviceWorker.register()
                (async function registerServiceWorker() {
                    if ('serviceWorker' in navigator) {
                        try {
                            const registration = await navigator.serviceWorker.register('/sw.js');
                            const subscribeOptions = {
                                userVisibleOnly: true,
                                applicationServerKey: process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS,
                            };

                            const pushSubscription = registration.pushManager.subscribe(subscribeOptions);
                            console.log((await pushSubscription).toJSON());
                            console.log('ServiceWorker registration successful with scope:', registration.scope);

                        } catch (error) {
                            console.log('Error occurred', error);
                            return error;
                        } finally {
                            //remove loader
                        }
                    } else {
                        console.log('No service-worker on this browser');
                    }
                })();
            }

            console.log(permissionResult);
        } catch (error) {
            console.info("Permission request failed: " + error);
            return error;
        }
    }

    public async subscribe(): Promise<void> {
        // const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiNjRjOTAxZWFlZjI5ODBmMWI5YzVmNGZlIiwiaWF0IjoxNjkwODk0ODI3LCJleHAiOjE2OTg2NzA4Mjd9.9YAIT3jn4AbBJwoObL4Auw0vyH69t4xbyRd8y66bsRM";
        const accesstoken = localStorage.getItem('Gaze_userAccess_RT');
        axios.post('http://localhost:3005/user/test', {}, {
            headers: {
                'Authorization': `Bearer ${accesstoken}`
            }
        }).then((res) => {

            if (res.status == 200) {
                console.log(res.data);
            }

        }).catch((err) => {
            console.log(err);
        });
    }
}