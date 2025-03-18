/**
 * Utility function to unregister all service workers and clear all caches
 * @returns {Promise<void>}
 */
export const clearServiceWorkersAndCache = async () => {
  try {
    // Unregister all service workers
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations.map((registration) => registration.unregister())
      );
      console.log("All service workers unregistered successfully");
    }

    // Clear all caches
    if ("caches" in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      console.log("All caches cleared successfully");
    }
  } catch (error) {
    console.error("Error clearing service workers and cache:", error);
  }
};

/**
 * Setup listeners for page visibility and periodic cache cleanup
 */
export const setupCacheCleanupListeners = () => {
  // Clear cache when page becomes visible
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      clearServiceWorkersAndCache();
    }
  });

  // Intercept service worker registration attempts
  if ("serviceWorker" in navigator) {
    const originalRegister = navigator.serviceWorker.register;
    navigator.serviceWorker.register = async (...args) => {
      // First, clear existing service workers
      await clearServiceWorkersAndCache();
      // Then proceed with the registration
      return originalRegister.apply(navigator.serviceWorker, args);
    };
  }

  // Clear cache on page refresh/navigation
  window.addEventListener("beforeunload", () => {
    clearServiceWorkersAndCache();
  });
};
