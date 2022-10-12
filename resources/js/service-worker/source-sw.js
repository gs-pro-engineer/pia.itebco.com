import * as config from './config';
import cache from './cache';
import vars from '@js/vars';

// RAMMdfup6Ys0ltzB
const SW_VERSION = vars.serviceWorkerKey + '-' + vars.serviceWorkerVersion;

self.addEventListener('message', (event) => {
    if (event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage(SW_VERSION);
    }
});


self.addEventListener('push', (event) => {

    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return
    }

    let payload = {};
    if (!event.data) {
        return;
    }
    payload = event.data.json();

    const title = payload.title;
    let options = {
        body: payload.body,
        vibrate: [100, 50, 100],
    }

    if(payload.hasOwnProperty('vibrate') && payload.vibrate) {
        options.vibrate = payload.vibrate
    }

    if(payload.hasOwnProperty('icon') && payload.icon) {
        options.icon = payload.icon
    }

    if(payload.hasOwnProperty('image') && payload.image) {
        options.image = payload.image
    }

    if(payload.hasOwnProperty('actions') && payload.actions) {
        options.actions = payload.actions
    }

    if(payload.hasOwnProperty('data') && payload.data) {
        options.data = payload.data //consist of url etc
    }

    event.waitUntil(self.registration.showNotification(title, options));
});


self.addEventListener('notificationclick', (event) => {

    let notification = event.notification;
    let primaryKey = notification.data.primaryKey;
    let action = event.action;

    if (action === 'close') {
        notification.close();
    } else {
        clients.openWindow(notification.data.url);
        notification.close();
    }
});
