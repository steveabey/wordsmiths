/* Grammar Works — offline cache.  Build: 20261113-2238
   Bump nothing by hand: make-package.sh stamps this on every build. */
const VERSION = 'grammar-works-20261113-2238';
const ASSETS = [
  './', 'index.html', 'manifest.webmanifest', 'favicon.ico',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'fonts/lilita-one-400.woff2',
  'fonts/fredoka-500.woff2', 'fonts/fredoka-600.woff2', 'fonts/fredoka-700.woff2',
  'fonts/nunito-600.woff2', 'fonts/nunito-700.woff2', 'fonts/nunito-800.woff2', 'fonts/nunito-900.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* anything off-site (the LGfL video player, for one) goes straight to the network */
  if (url.origin !== location.origin) return;

  /* the page itself: network first, so a new deploy is picked up on the next reload */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put('index.html', copy));
        return r;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }

  /* fonts and icons: from the cache, refreshed quietly in the background */
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      const copy = r.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
      return r;
    }))
  );
});
