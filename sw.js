// Пустой Service Worker — пропуск для браузера
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Просто пропускает все запросы напрямую в сеть
});
