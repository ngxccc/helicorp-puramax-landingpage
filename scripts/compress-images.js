const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  {
    name: 'phienbancaitien.webp',
    width: 800,
    quality: 80
  },
  {
    name: 'nhungdiemcaitien.webp',
    width: 1000,
    quality: 80
  },
  {
    name: 'khumuidietkhuan.webp',
    width: 800,
    quality: 80
  }
];

async function compress() {
  for (const img of images) {
    const inputPath = path.join(process.cwd(), 'public', img.name);
    const outputPath = path.join(process.cwd(), 'public', `compressed_${img.name}`);

    if (fs.existsSync(inputPath)) {
      console.log(`Compressing ${img.name}...`);
      const originalSize = fs.statSync(inputPath).size;

      await sharp(inputPath)
        .resize({ width: img.width })
        .webp({ quality: img.quality })
        .toFile(outputPath);

      // Overwrite the original with the compressed version
      fs.renameSync(outputPath, inputPath);
      const newSize = fs.statSync(inputPath).size;

      console.log(`Successfully compressed ${img.name}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(2)}KB`);
    } else {
      console.warn(`File not found: ${inputPath}`);
    }
  }
}

compress().catch(err => {
  console.error(err);
  process.exit(1);
});
