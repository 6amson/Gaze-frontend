'use client'


import Profile from './profileMethods';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function profileMethods() {

    const vapidKeys = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;

    async function askPermission(): Promise<any> {
        console.log('clicked!!')
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
                                applicationServerKey: vapidKeys,
                            };

                            const pushSubscription = registration.pushManager.subscribe(subscribeOptions);
                            console.log((await pushSubscription).toJSON());
                            console.log('ServiceWorker registration successful with scope:', registration.scope);
                            const subscriptionObject = await pushSubscription;
                            return subscriptionObject.toJSON();


                        } catch (error) {
                            console.log('Error occurred', error);
                            return error;
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

    async function subscribe(): Promise<any> {
        const accesstoken = localStorage.getItem('Gaze_userAccess_RT');
        axios.post('http://localhost:3005/user/test', {}, {
            headers: {
                'Authorization': `Bearer ${accesstoken}`
            }
        }).then((res) => {

            if (res.status == 200) {
                return { isSubscribed: true }
            }

        }).catch((err) => {
            console.log(err);
            return { isSubscribed: false }
        });
    }



    async function verifySubscription(): Promise<any> {
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
        }else{
            throw new Error('No service worker or push notification not supported')
        }
    }

    const handleAuth = async(): Promise<any> => {
        const accesstoken = localStorage.getItem('Gaze_userAccess_RT');
        const refreshtoken = Cookies.get('Gaze_userAccess_AT');

        if (accesstoken && refreshtoken || accesstoken && !refreshtoken) {
            // console.log(accesstoken);
            axios.post('http://localhost:3005/user/verify', {
                headers: {
                    'Authorization': `Bearer ${accesstoken}`
                }
            }).then((res) => {

                if (res.status == 200) {
                    Cookies.set('Gaze_userAccess_AT', res.data.refreshToken);
                    const { userId } = res.data;
                    const encodedString = encodeURIComponent(userId);
                    return { isValidUser: true, encodedString: encodedString }
                }

            }).catch((err) => {
                console.log(err);
                // router.push('/signin');
                return {isValidUser: false}
            });

        } else if (!accesstoken && !refreshtoken) {
            // router.push('/signin');
            return {isValidUser: false}
        }
    }

    return (
        <div>
            <Profile
                verifySubscription={verifySubscription}
                subscribe={subscribe}
                askPermission={askPermission}
            />
        </div>
    )
}