import { useState, useEffect } from "react";

export const usePWA = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    // Show the install prompt
    const result = await installPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await result.userChoice;

    if (choiceResult.outcome === "accepted") {
      setIsInstallable(false);
    }

    // Clear the saved prompt since it can't be used again
    setInstallPrompt(null);
  };

  return { isInstallable, handleInstallClick };
};
