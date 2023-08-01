'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
// import styles from './page.module.css'

export default function Profile() {

  // const [notificationPermission, setNotificationPermission] = useState('default');
  const [error, setError] = useState(' ');
  const vapidKeys = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;


  async function askPermission() {
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

              console.log(vapidKeys)

              const pushSubscription = registration.pushManager.subscribe(subscribeOptions);
              console.log((await pushSubscription).toJSON());
              console.log('ServiceWorker registration successful with scope:', registration.scope);

            } catch (error) {
              console.log('Error occurred', error);
              setError('You dont have the facilities big man');
            }
          } else {
            console.log('No service-worker on this browser');
          }
        })();
      }

      console.log(permissionResult);
    } catch (error) {
      setError('You dont have the facilities big man');
      console.info("Permission request failed: " + error);
    }
  }


  useEffect(() => {
    // Check if service workers are supported and register the service worker


    // if ('PushManager' in window) {
    //   // Get the current notification permission status
    //   Notification.requestPermission().then((permission) => {
    //     setNotificationPermission(permission);
    //   });
    // }


    // const registerServiceWorker = async (): Promise<void> => {
    //   if ("serviceWorker" in navigator) {
    //     try {
    //       const registration = await navigator.serviceWorker.register("/sw.js", {
    //         scope: '/',
    //       });
    //       if (registration.installing) {
    //         console.log("Service worker installing");
    //       } else if (registration.waiting) {
    //         console.log("Service worker installed");
    //       } else if (registration.active) {
    //         console.log("Service worker active");
    //       }
    //     } catch (error) {
    //       console.error(`Registration failed with ${error}`);
    //     }
    //   }
    // };




  }, []);


  return (
    <main>
      <button onClick={askPermission}>Request Notifis Permission</button>
      <div><p>{error}</p></div>
    </main>
  );
}
