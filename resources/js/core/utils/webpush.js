import request from './request';
const apiUrl = '/push';

const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
        'YOUR_VAPID_PUBLIC_KEY'
    )
};

export async function getRegistration() {
    if ('serviceWorker' in navigator) {
        return await navigator.serviceWorker.ready;
    }
    return null;
}

export async function subscribeUser() {
    const subscription = await getRegistration().pushManager
        .subscribe(subscribeOptions)
        .catch(console.error);

    if (!subscription) {
        return;
    }

    storePushSubscription(subscription);
}

export async function checkAndSubscribeUser() {
    const subscription = await getRegistration().pushManager.getSubscription()

    if (!subscription) {
        subscribeUser();
        return;
    }
    
    storePushSubscription(subscription);
}

export async storePushSubscription(pushSubscription) {
    return request({
        url: apiUrl,
        method: 'post',
        data: JSON.stringify(pushSubscription),
    })
}

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
