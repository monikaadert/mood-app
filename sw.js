const C='mood-v1',F=['./','index.html','tests.js','i18n.js','character.js','manifest.json','icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request))));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow('./index.html'))});
