/**
 * Optimize a single image
 * Usage: node scripts/optimize-single-image.js <filename>
 * Example: node scripts/optimize-single-image.js 39-tropski-drugari-60x80-akril-2025.webp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const filename = process.argv[2];

if (!filename) {
  console.error('Usage: node scripts/optimize-single-image.js <filename>');
  process.exit(1);
}

const INPUT_DIR = path.join(__dirname, '../src/assets/images/artworks');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/artworks-optimized');

const VARIANTS = [
  { suffix: '-thumb', width: 400, quality: 80 },
  { suffix: '-medium', width: 800, quality: 82 },
  { suffix: '-large', width: 1200, quality: 85 },
  { suffix: '', width: null, quality: 85 }
];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(filename) {
  const inputPath = path.join(INPUT_DIR, filename);

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);
    process.exit(1);
  }

  const baseName = path.parse(filename).name;
  const ext = path.parse(filename).ext;

  console.log(`\n📸 Processing: ${filename}`);

  const metadata = await sharp(inputPath).metadata();
  const originalSize = fs.statSync(inputPath).size;

  console.log(`   Original: ${metadata.width}x${metadata.height} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);

  let totalSaved = 0;

  for (const variant of VARIANTS) {
    const outputFilename = `${baseName}${variant.suffix}${ext}`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    try {
      let pipeline = sharp(inputPath);

      if (variant.width) {
        pipeline = pipeline.resize(variant.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }

      pipeline = pipeline.webp({
        quality: variant.quality,
        effort: 6
      });

      await pipeline.toFile(outputPath);

      const outputSize = fs.statSync(outputPath).size;
      const savedBytes = originalSize - outputSize;
      totalSaved += savedBytes;

      const variantMeta = await sharp(outputPath).metadata();

      console.log(
        `   ${variant.suffix || 'original'}: ${variantMeta.width}x${variantMeta.height} ` +
        `(${(outputSize / 1024).toFixed(0)}KB) - saved ${(savedBytes / 1024).toFixed(0)}KB`
      );

    } catch (error) {
      console.error(`   ❌ Error creating ${variant.suffix}: ${error.message}`);
    }
  }

  console.log(`   ✅ Total saved: ${(totalSaved / 1024).toFixed(0)}KB`);
  console.log('\n✅ Optimization complete!');
}

optimizeImage(filename).catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
