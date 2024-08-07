const urlsToCache = ["./fallback.tsx"];
const cacheName = "gaze_userv002";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

// const putInCache = async (request, response) => {
//   const cache = await caches.open(cacheName);
//   await cache.put(request, response);
// };

// const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
//   //get the resource from the cache
//   const responseFromCache = await caches.match(request);
//   if (responseFromCache) {
//     return responseFromCache;
//   }

//   //use the preloaded response, if it's there
//   const preloadResponse = await preloadResponsePromise;
//   if (preloadResponse) {
//     console.info('using preload response', preloadResponse);
//     putInCache(request, preloadResponse.clone());
//     return preloadResponse;
//   }

//   //get the resource from the network
//   try {
//     const responseFromNetwork = await fetch(request.clone());
//     // response may be used only once
//     // we need to save clone to put one copy in cache
//     // and serve second one
//     putInCache(request, responseFromNetwork.clone());
//     return responseFromNetwork;
//   } catch (error) {
//     const fallbackResponse = await caches.match(fallbackUrl);
//     if (fallbackResponse) {
//       return fallbackResponse;
//     }
//     // when even the fallback response is not available,
//     // there is nothing we can do, but we must always
//     // return a Response object
//     return new Response('Network error happened', {
//       status: 408,
//       headers: { 'Content-Type': 'text/plain' },
//     });
//   }
// };

// const enableNavigationPreload = async () => {
//   if (self.registration.navigationPreload) {
//     // Enable navigation preloads!
//     await self.registration.navigationPreload.enable();
//   }
// };

self.addEventListener("activate", (event) => {
  // event.waitUntil(enableNavigationPreload());
});

self.addEventListener("install", (event) => {
  caches.keys().then((names) => {
    names.forEach((name) => {
      if (name !== cacheName) {
        caches.delete(name);
      }
    });
  });

  event.waitUntil(
    addResourcesToCache(urlsToCache),
    console.log(`🔥🔥 service worker installed 🔥🔥`)
  );

  self.skipWaiting();
});

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     fetch(event.request)
//     // cacheFirst({
//     //   request: event.request,
//     //   preloadResponsePromise: event.preloadResponse,
//     //   fallbackUrl: 'www.facebook.com',
//     // })
//   );
// });

function verifySubscription() {
  return self.registration.pushManager
    .getSubscription()
    .then(function (subscription) {
      if (subscription) {
        return true;
      }

      throw new Error("User not subscribed");
    });
}

self.addEventListener("push", function (event) {
  const notificationData = event.data.json();

  const title = notificationData.title;
  const text = notificationData.body;
  const img = notificationData.icon;

  const options = {
    body: text,
    icon: img,
    vibrate: [
      500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170,
      40, 500,
    ],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close(); // Close the notification

  // Open a new window/tab with the desired URL
  event.waitUntil(clients.openWindow("/verifyPage"));
});

// self.addEventListener('push', function (event) {
//   const title = event.data.json().title;
//   const message = event.data.json().body;
//   const image = event.data.json().icon;

//   const payload = event.data.text();

//   console.info('here is it', event.data.json());

//   event.waitUntil(self.registration.showNotification(title, { body: payload, }));
// });
