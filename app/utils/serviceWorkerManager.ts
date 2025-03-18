/**
 * Utility function to unregister all service workers and clear all caches
 */
export const clearServiceWorkersAndCache = async (): Promise<void> => {
  try {
    // Unregister all service workers
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations.map(registration => registration.unregister())
      );
      console.log('All service workers unregistered successfully');
    }

    // Clear all caches
    if ('caches' in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map(key => caches.delete(key))
      );
      console.log('All caches cleared successfully');
    }
  } catch (error) {
    console.error('Error clearing service workers and cache:', error);
  }
};

/**
 * Function to clear cache immediately when page loads
 * This ensures cache is cleared as soon as any page is accessed
 * Optimized for React/Vite applications
 */
export const setupImmediateCacheClearing = (): void => {
  if (typeof window !== 'undefined') {
    // Execute immediately when the script loads
    clearServiceWorkersAndCache();

    // Clear on initial page load
    window.addEventListener('load', () => {
      clearServiceWorkersAndCache();
    });

    // Clear on React Router navigation
    window.addEventListener('popstate', () => {
      clearServiceWorkersAndCache();
    });

    // Handle manual route changes
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      clearServiceWorkersAndCache();
      return originalPushState.apply(this, args);
    };

    // Handle hash changes (for hash router if used)
    window.addEventListener('hashchange', () => {
      clearServiceWorkersAndCache();
    });

    // Clear cache when browser tab becomes visible again
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        clearServiceWorkersAndCache();
      }
    });
  }
}; 