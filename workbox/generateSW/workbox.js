const workbox = require("workbox-build");

workbox.generateSW({
    cacheId: "pwa_app",
    globDirectory: "../",
    globPatterns: ["**/*.{css|js}"],
    swDest: "../sw.js",
    globIgnores: ["**/workbox.js", "**/sw.js", "node_modules/**/*"],
    runtimeCaching: [
        {
            urlPattern: /\.(?:html|htm|xml)$/,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "markup",
                expiration: {
                    maxAgeSeconds: 1800,
                },
            },
        },
    ],
});
