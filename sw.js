// Service Worker — Offline-Fähigkeit + Auto-Update
const CACHE = 'finanzen-v8-wp-import-dedupe';
const ASSETS = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Netzwerk zuerst (damit Updates ankommen), Cache als Fallback (offline)
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // API-Aufrufe (Supabase, Alpha Vantage) niemals cachen
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
  );
});
