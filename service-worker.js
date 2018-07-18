"use strict";

self.addEventListener('fetch', function (event) {

    // Check if the current request is slow 3g
    if (/\slow-2g|2g/.test(navigator.connection.effectiveType) {
        // Check if the request is for an image
        if (/\.jpg$|.png$|.gif$|.webp$/.test(event.request.url)) {

            // Return no images
            event.respondWith(
                fetch('placeholder.svg', {
                    mode: 'no-cors'
                })
            );
        }
    }
});
