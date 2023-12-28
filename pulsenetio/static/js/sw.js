self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "{% static 'js/script.js' %}",
        "{% static 'css/main.css' %}",
        "{% static 'images/logo.png' %}",
        "{% static 'images/logo_192x192.png' %}",
      ]);
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});