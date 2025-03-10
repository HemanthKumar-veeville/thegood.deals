import { useState, useEffect } from "react";
import { Popover } from "flowbite-react";
import { HiDownload } from "react-icons/hi";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      setIsInstallable(true);
      console.log("👋 PWA is installable!");
    };

    // Debug: Log if already in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("🎉 App is already installed and running in standalone mode");
      setIsInstallable(false);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.log("❌ No deferred prompt available");
      return;
    }

    console.log("🚀 Showing install prompt...");
    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`👥 User response to install prompt: ${outcome}`);

    if (outcome === "accepted") {
      setIsInstallable(false);
      console.log("✅ PWA installation accepted!");
    }

    // Clear the deferredPrompt for the next time
    setDeferredPrompt(null);
  };

  if (!isInstallable) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover
        trigger="hover"
        content={
          <div className="p-3">
            <p className="text-sm text-gray-700">
              Install this app on your device for quick access
            </p>
          </div>
        }
      >
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-2 bg-[#2a4e4a] hover:bg-primary-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
          aria-label="Install application"
          tabIndex={0}
        >
          <HiDownload className="w-5 h-5" />
          <span>Install App</span>
        </button>
      </Popover>
    </div>
  );
};

export default PWAInstallPrompt;
