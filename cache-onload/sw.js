const cacheName = "app_v1";

self.addEventListener("install", (event) => {
    console.log("sw install event");
    event.waitUntil(caches.open(cacheName));
});

self.addEventListener("fetch", async (event) => {
    console.log(event.request.destination);
    // cache first
    event.respondWith(
        caches.open(cacheName).then((cache) => {
            if (["video", "image"].includes(event.request.destination)) {
                return cache.match(event.request).then((cachedResponse) => {
                    const fetchedResponse = fetch(event.request.url).then(
                        (networkResponse) => {
                            // cache fetched data
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        }
                    );
                    return cachedResponse || fetchedResponse;
                });
            } else {
                return fetch(event.request.url)
                    .then((res) => {
                        if (!event.request.url.includes("chrome"))
                            cache.put(event.request, res.clone());
                        return res;
                    })
                    .catch((err) => {
                        return cache.match(event.request.url);
                    });
            }
        })
    );
});
