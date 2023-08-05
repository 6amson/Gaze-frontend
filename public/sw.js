const urlsToCache = ['./ART.jpg', './next.svg',];
const cacheName = "gaze_userv000";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open(cacheName);
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  //get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  //use the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info('using preload response', preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  //get the resource from the network
  try {
    const responseFromNetwork = await fetch(request.clone());
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
  caches.keys().then(names => {
    names.forEach(name => {
      if (name !== cacheName) {
        caches.delete(name);
      }
    })
  })

  event.waitUntil(
    addResourcesToCache(urlsToCache),
    console.log(`🔥🔥 service worker installed 🔥🔥`)
  );

  self.skipWaiting();
});

//   self.addEventListener('fetch', (event) => {
//     event.respondWith(
//       cacheFirst({
//         request: event.request,
//         preloadResponsePromise: event.preloadResponse,
//         fallbackUrl: 'https://www.google.com',
//       })
//     );
//   });

self.addEventListener('push', function (event) {
  const title = event.data.json().title;
  const message = event.data.json().body;
  const image = event.data.json().icon;
  // options = {
  //   body: event.currentTarget.options.json().body,
  //   icon: event.currentTarget.options.json().icon,
  // }

  // const options = {
  //   body: "NFT Notification body and more data",
  //   icon: "https://res.cloudinary.com/dis6jfj29/image/upload/v1691076029/gaze_logo_no_background_dgy9tr.png",
  // };

  const promiseChain = self.registration.showNotification(title, {body: message, icon: image});

  console.info('here is it', event.data.json());

  event.waitUntil(promiseChain);

  
  // self.registration.showNotification(
  //   title,
  //  { options}
  // );

  // const pushInfoPromise = fetch('/api/get-more-data')
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (response) {
  //     const title = response.data.title;
  //     const message = response.data.message;

  //     return self.registration.showNotification(title, {

  //     });
  //   });

  // const promiseChain = Promise.all(
  //   pushInfoPromise
  // );

  // event.waitUntil(self.registration.showNotification(title, { options }));
});