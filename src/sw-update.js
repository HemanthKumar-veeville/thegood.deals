if ("serviceWorker" in navigator) {
  let refreshing = false;

  // Handle new service worker
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });

  // Check for updates every minute
  setInterval(() => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.update();
    });
  }, 60000);

  // Listen for messages from the service worker
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data && event.data.type === "CACHE_UPDATED") {
      // Handle cache updates here
      console.log("Content has been updated. Refresh needed.");
      window.dispatchEvent(new CustomEvent("swUpdateAvailable"));
    }
  });
}
