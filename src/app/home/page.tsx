'use client'

import Image from 'next/image'
import { useEffect } from 'react';
// import styles from './page.module.css'

export default function Home() {


  useEffect(() => {
    // Check if service workers are supported and register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function (err) {
        //registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    } else {
      console.log('No service-worker on this browser');
    }

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
      <h1>Hello world.</h1>
    </main>
  )
}
