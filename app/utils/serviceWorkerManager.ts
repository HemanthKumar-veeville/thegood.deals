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