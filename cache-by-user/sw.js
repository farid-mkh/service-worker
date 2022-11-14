const cacheName = "app2_v1";

self.addEventListener("install", (event) => {
    console.log("sw install event");
    event.waitUntil(caches.open(cacheName));
});

self.addEventListener("fetch", async (event) => {
    event.respondWith(
        caches.open(cacheName).then(async (cache) => {
            const cachedResponse = await cache.match(event.request);
            const fetchedResponse = fetch(event.request.url).then(
                (networkResponse) => {
                    return networkResponse;
                }
            );
            return cachedResponse || fetchedResponse;
        })
    );
});
