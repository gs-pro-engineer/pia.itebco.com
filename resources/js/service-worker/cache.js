import vars from '@js/vars';

import { skipWaiting, clientsClaim, cacheNames, setCacheNameDetails } from 'workbox-core';
import { precacheAndRoute, getCacheKeyForURL, createHandlerBoundToURL, matchPrecache } from 'workbox-precaching';
import { registerRoute, setDefaultHandler, setCatchHandler, NavigationRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

const offlineFallbackPage = '/offline.html';

skipWaiting();
clientsClaim();
setCacheNameDetails({
    prefix: vars.serviceWorkerKey.toLowerCase(),
    suffix: vars.serviceWorkerVersion,
    precache: 'precache',
    runtime: 'runtime',
    googleAnalytics: 'google-analytics'
});

precacheAndRoute([
  { url: offlineFallbackPage, revision: null },
]);

precacheAndRoute(self.__WB_MANIFEST || []);

// fonts
//
// // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
  ({url}) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({url}) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
    new RegExp('.*\/fonts\/.*$'),
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

// registerRoute(
//     /.*googleapis\.com/,
//     new StaleWhileRevalidate({
//         cacheName: 'googleapis',
//     })
// );

// registerRoute(
//     /.*gstatic\.com/,
//     new StaleWhileRevalidate({
//         cacheName: 'gstatic',
//     })
// );

// images
registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        purgeOnQuotaError: true,
      }),
    ],
  })
);

// audios
registerRoute(
  // Custom `matchCallback` function
  ({request}) => request.destination === 'audio',
  new CacheFirst({
    cacheName: 'audio',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        purgeOnQuotaError: true,
      }),
    ],
  })
);

// static
registerRoute(
  ({request}) => request.destination === 'script' ||
                  request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                // Cache for a maximum of a week.
                maxAgeSeconds: 7 * 24 * 60 * 60,
                purgeOnQuotaError: true,
            })
        ]
  })
);

registerRoute(
    new RegExp('.*\/api\/.*$'),
    new NetworkFirst({
        networkTimeoutSeconds: 10,
        cacheName: "apis",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 10 * 60, // 10 minutes
                purgeOnQuotaError: true,
            }),
        ]
    })
);

// document
registerRoute(
    new RegExp('.*\/app\/.*$'),
    new NetworkFirst({
        networkTimeoutSeconds: 10,
        cacheName: "pages",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 10 * 60, // 10 minutes
                purgeOnQuotaError: true,
            }),
        ]
    })
);

setCatchHandler(({ event }) => {
    // The FALLBACK_URL entries must be added to the cache ahead of time, either
    // via runtime or precaching. If they are precached, then call
    // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
    // to get the response from the correct cache.
    //
    // Use event, request, and url to figure out how to respond.
    // One approach would be to use request.destination, see
    // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
    switch (event.request.destination) {
        case 'document':
            const cachedPage = caches.match(matchPrecache('/index.php'));

            if(cachedPage) {

              return cachedPage
            } else {

              return matchPrecache(offlineFallbackPage);
            }
            break;

        default:
            // If we don't have a fallback, just return an error response.
            return Response.error();
    }
});
