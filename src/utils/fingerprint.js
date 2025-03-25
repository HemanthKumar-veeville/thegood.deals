import FingerprintJS from "@fingerprintjs/fingerprintjs";

// Initialize FingerprintJS
const fpPromise = FingerprintJS.load();

// Function to get visitor ID
export const getVisitorId = async () => {
  try {
    const fp = await fpPromise;
    const result = await fp.get();
    return result.visitorId;
  } catch (error) {
    console.error("Error getting visitor ID:", error);
    return null;
  }
};

// Function to get detailed fingerprint data
export const getFingerprintData = async () => {
  try {
    const fp = await fpPromise;
    const result = await fp.get();
    return {
      visitorId: result.visitorId,
      components: result.components,
      confidence: result.confidence,
    };
  } catch (error) {
    console.error("Error getting fingerprint data:", error);
    return null;
  }
};
