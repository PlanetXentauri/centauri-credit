/* Centauri Credit service worker — network-first, cache fallback for offline */
const CACHE = 'centauri-credit-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(e.request);
      const c = await caches.open(CACHE);
      c.put(e.request, res.clone());
      return res;
    } catch (err) {
      const cached = await caches.match(e.request, { ignoreSearch: true });
      return cached || Response.error();
    }
  })());
});
