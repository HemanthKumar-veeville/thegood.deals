import React from "react";
import { useFingerprint } from "../hooks/useFingerprint";

const FingerprintExample = () => {
  const { fingerprint, loading, error } = useFingerprint({ detailed: true });

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded-lg">
        Error getting fingerprint: {error.message}
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Fingerprint Information
      </h2>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Visitor ID</h3>
        <p className="font-mono text-sm bg-gray-50 p-2 rounded">
          {fingerprint.visitorId}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Confidence</h3>
        <p className="text-gray-600">
          {(fingerprint.confidence * 100).toFixed(2)}%
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Components</h3>
        <div className="space-y-2">
          {Object.entries(fingerprint.components).map(([key, value]) => (
            <div key={key} className="border-b pb-2 last:border-b-0">
              <p className="font-medium text-gray-700">{key}</p>
              <p className="text-sm text-gray-600">
                {JSON.stringify(value, null, 2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FingerprintExample;
