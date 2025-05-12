import sharp from "sharp";
import fs from "fs";
import path from "path";

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconDirectory = "public/icons";

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconDirectory)) {
  fs.mkdirSync(iconDirectory, { recursive: true });
}

async function generateIcons() {
  try {
    const sourceImage = "favicon.jpg";

    // Generate regular icons
    for (const size of sizes) {
      await sharp(sourceImage)
        .resize(size, size, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png()
        .toFile(path.join(iconDirectory, `icon-${size}x${size}.png`));

      console.log(`Generated ${size}x${size} icon`);
    }

    // Generate maskable icons (with padding for safe area)
    const maskableSizes = [192, 512];
    for (const size of maskableSizes) {
      const padding = Math.floor(size * 0.1); // 10% padding
      const imageSize = size - padding * 2;

      await sharp(sourceImage)
        .resize(imageSize, imageSize, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .png()
        .toFile(path.join(iconDirectory, `icon-${size}x${size}-maskable.png`));

      console.log(`Generated ${size}x${size} maskable icon`);
    }

    console.log("All icons generated successfully!");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generateIcons();
