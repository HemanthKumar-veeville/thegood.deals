import { useState, useEffect } from "react";
import { getVisitorId, getFingerprintData } from "../utils/fingerprint";

export const useFingerprint = (options = { detailed: false }) => {
  const [fingerprint, setFingerprint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFingerprint = async () => {
      try {
        setLoading(true);
        const data = options.detailed
          ? await getFingerprintData()
          : await getVisitorId();
        setFingerprint(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getFingerprint();
  }, [options.detailed]);

  return { fingerprint, loading, error };
};
