import { debug } from './config';
import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
    let registration;

    const wb = new Workbox('/service-worker.js');

    wb.addEventListener('installed', (event) => {
        if (debug) console.log('Service worker installed for the first time!');
        if (!event.isUpdate) {
            // First-installed code goes here...
        }
    });

    wb.addEventListener('waiting', (event) => {
        if (debug) console.log(`A new service worker has installed, but it can't activate` +
            `until all tabs running the current version have fully unloaded.`);

        if (registration && registration.waiting) {
            wb.messageSW({ type: 'SKIP_WAITING' });
        }
    });

    wb.addEventListener('activated', (event) => {
        // `event.isUpdate` will be true if another version of the service
        // worker was controlling the page when this version was registered.
        if (!event.isUpdate) {
            if (debug) console.log('Service worker activated for the first time!');
        }
    });

    wb.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
            skipWaiting();
        } else if (event.data.type === 'CACHE_UPDATED') {
            const { updatedURL } = event.data.payload;

            if (debug) console.log(`A newer version of ${updatedURL} is available!`);
        }
    });

    // Register the service worker after event listeners have been added.
    wb.register()
        .then((r) => registration = r);

    wb.messageSW({ type: 'GET_VERSION' })
        .then(v => {
            if (debug) console.log('Service Worker version:', v);
        });

} else {
    if (debug) console.log("Service worker isn't supported.");
}
