// Service Worker Version - update this when deploying new version
const CACHE_VERSION = "v1";
const CACHE_NAME = `app-cache-${CACHE_VERSION}`;

// Assets to cache
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/*",
  "/assets/*",
];

// Cache static assets during installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .catch((error) => console.error("Cache installation failed:", error))
  );
});

// Clean up old caches during activation
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter(
              (name) => name.startsWith("app-cache-") && name !== CACHE_NAME
            )
            .map((name) => caches.delete(name))
        );
      }),
      // Take control of all clients
      clients.claim(),
    ])
  );
});

// Network-first strategy with selective caching
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Handle API requests with network-first, no-cache strategy
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      fetch(event.request.clone(), {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      })
        .then((response) => {
          return response;
        })
        .catch(() => {
          return new Response(
            JSON.stringify({ error: "Network error", offline: true }),
            {
              status: 503,
              headers: { "Content-Type": "application/json" },
            }
          );
        })
    );
    return;
  }

  // For non-API requests, use network-first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Only cache successful GET responses of static assets
        if (
          event.request.method === "GET" &&
          response.ok &&
          (event.request.url.includes("/assets/") ||
            event.request.url.includes("/static/") ||
            STATIC_ASSETS.some((asset) =>
              event.request.url.includes(asset.replace("*", ""))
            ))
        ) {
          const clonedResponse = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, clonedResponse))
            .catch((error) => console.error("Caching failed:", error));
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache only for static assets
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Return default offline page for HTML requests
          if (event.request.headers.get("accept")?.includes("text/html")) {
            return caches.match("/");
          }
          return new Response("Network error", { status: 503 });
        });
      })
  );
});

// Check for content hash changes
async function checkForUpdates() {
  try {
    const mainJsResponse = await fetch("/assets/index.js", {
      cache: "no-store",
    });
    const mainCssResponse = await fetch("/assets/index.css", {
      cache: "no-store",
    });

    if (!mainJsResponse.ok || !mainCssResponse.ok) return;

    const [currentJs, currentCss] = await Promise.all([
      caches.match("/assets/index.js"),
      caches.match("/assets/index.css"),
    ]);

    if (!currentJs || !currentCss) return;

    const newJsText = await mainJsResponse.text();
    const newCssText = await mainCssResponse.text();
    const currentJsText = await currentJs.text();
    const currentCssText = await currentCss.text();

    if (newJsText !== currentJsText || newCssText !== currentCssText) {
      // Notify all clients about the update
      const clients = await self.clients.matchAll();
      clients.forEach((client) => {
        client.postMessage({ type: "UPDATE_AVAILABLE" });
      });
    }
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
}

// Handle skip waiting
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});

// Check for updates every hour
const CHECK_INTERVAL = 60 * 60 * 1000; // 1 hour
setInterval(() => {
  checkForUpdates();
}, CHECK_INTERVAL);
