"use strict";

self.addEventListener('fetch', function (event) {

    if (navigator.connection.effectiveType === 'slow-2g' || '2g') {

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