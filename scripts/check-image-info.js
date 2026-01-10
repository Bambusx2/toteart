const sharp = require('sharp');
const fs = require('fs');

const imagePath = process.argv[2];

if (!imagePath) {
  console.error('Usage: node check-image-info.js <image-path>');
  process.exit(1);
}

sharp(imagePath).metadata()
  .then(metadata => {
    const stats = fs.statSync(imagePath);
    console.log(`File: ${imagePath}`);
    console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`Format: ${metadata.format}`);
    console.log(`Size: ${(stats.size / 1024).toFixed(2)}KB`);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });
