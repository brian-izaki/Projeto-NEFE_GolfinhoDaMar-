const cacheName = 'cache-v1';
const precacheResource = [
  '../',
  '../index.html',
  '../css/bases/bases.css',
  '../css/components/headerComponents.css',
  '../css/generic/reset.css',
  '../css/objects/objectsHeader.css',
  '../image/banner.jpg',
  '../image/avatar.svg'
]

self.addEventListener('install', (event) => {
  console.log('Service Worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResource);
      })
      .catch(err => {
        console.log('erro - ' + err)
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker activate event');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if(cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});