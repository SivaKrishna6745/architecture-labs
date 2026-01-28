const CACHE_NAME = 'day26-v1';

self.addEventListener('install', (event) => {
    console.log('Service Worker Installed 🛠️');
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(['/'])));
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker Fetching... 🚀');
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) return response;
            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        }),
    );
});
