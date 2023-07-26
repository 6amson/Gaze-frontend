'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
// import styles from './page.module.css'

export default function Home() {

  const [notificationPermission, setNotificationPermission] = useState('default');


  function askPermission() {
    return new Promise(function (resolve, reject) {
      const permissionResult = Notification.requestPermission(function (result) {
        resolve(result);
      });

      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    }).then(function (permissionResult) {
      if (permissionResult !== 'granted') {
        throw new Error("We weren't granted permission.");
      }
    });
  }


  useEffect(() => {
    // Check if service workers are supported and register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register("/sw.js").then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function (err) {
        //registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    } else {
      console.log('No service-worker on this browser');
    }

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

    // registerServiceWorker();


  }, []);


  return (
    <main>
      <button onClick={askPermission}>Request Notifis Permission</button>
    </main>
  );
}
