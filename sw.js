// sw.js
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 기본 네트워크 요청을 가로채지 않고 그대로 흘려보냄
  e.respondWith(fetch(e.request));
});
