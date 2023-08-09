import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';


export class gazeJobs {

    constructor() { }

   

    public verifySubscription(): any {
        // Check if the browser supports the Push API
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.ready.then(async (registration) => {
                // Get the current subscription status
                const subscription = await registration.pushManager.getSubscription();

                if (subscription) {
                    return true
                } else {
                    return false
                }
            });
        }

        throw new Error('No service worker or push notification not supported')
    }

    public handleAuth(): any {
        const accesstoken = localStorage.getItem('token');
        const refreshtoken = Cookies.get('userAccess_TT');
        let router = useRouter();

        if (accesstoken && refreshtoken || accesstoken && !refreshtoken) {
            // console.log(accesstoken);
            axios.get('http://localhost:3005/user/verify', {
                headers: {
                    'Authorization': `Bearer ${accesstoken}`
                }
            }).then((res) => {

                if (res.status == 200) {
                    Cookies.set('userAccess_TT', res.data);
                    // router.push('/meetup');
                }

            })
                .catch((err) => {
                    // console.log(err);
                    router.push('/signin');
                });

        } else if (!accesstoken && !refreshtoken) {
            router.push('/signin');
        }
    }



}