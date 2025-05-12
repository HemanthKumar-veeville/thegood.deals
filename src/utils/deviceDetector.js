export const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const platform = navigator.platform;

  const deviceInfo = {
    isIOS:
      /iPad|iPhone|iPod/.test(ua) ||
      (platform === "MacIntel" && navigator.maxTouchPoints > 1),
    isAndroid: /Android/.test(ua),
    isMobile: /Mobile|Android|iPhone/.test(ua),
    isDesktop: !/Mobile|Android|iPhone/.test(ua),
    browser: getBrowser(),
    os: getOS(),
  };

  return deviceInfo;
};

const getBrowser = () => {
  const ua = navigator.userAgent;

  if (ua.includes("Chrome")) return "chrome";
  if (ua.includes("Firefox")) return "firefox";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "safari";
  if (ua.includes("Edge")) return "edge";
  if (ua.includes("Opera")) return "opera";
  return "other";
};

const getOS = () => {
  const ua = navigator.userAgent;

  if (/Windows/.test(ua)) return "windows";
  if (/Android/.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Mac/.test(ua)) return "mac";
  if (/Linux/.test(ua)) return "linux";
  return "other";
};
