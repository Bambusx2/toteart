/**
 * Image Optimization Script
 *
 * Processes artwork images to create optimized responsive variants:
 * - thumb: 400px width (masonry grid mobile)
 * - medium: 800px width (masonry grid desktop)
 * - large: 1200px width (lightbox view)
 * - original: compressed original (backup/print quality)
 *
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../src/assets/images/artworks');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/artworks-optimized');

// Image variant configurations
const VARIANTS = [
  { suffix: '-thumb', width: 400, quality: 80 },
  { suffix: '-medium', width: 800, quality: 82 },
  { suffix: '-large', width: 1200, quality: 85 },
  { suffix: '', width: null, quality: 85 } // Compressed original
];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  const ext = path.parse(filename).ext;

  console.log(`\n📸 Processing: ${filename}`);

  // Get original image metadata
  const metadata = await sharp(inputPath).metadata();
  const originalSize = fs.statSync(inputPath).size;

  console.log(`   Original: ${metadata.width}x${metadata.height} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);

  let totalSaved = 0;

  for (const variant of VARIANTS) {
    const outputFilename = `${baseName}${variant.suffix}${ext}`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    try {
      let pipeline = sharp(inputPath);

      // Resize if width is specified
      if (variant.width) {
        pipeline = pipeline.resize(variant.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }

      // Apply WebP compression
      pipeline = pipeline.webp({
        quality: variant.quality,
        effort: 6 // Higher effort = better compression (0-6)
      });

      await pipeline.toFile(outputPath);

      const outputSize = fs.statSync(outputPath).size;
      const savedBytes = originalSize - outputSize;
      totalSaved += savedBytes;

      const variantMeta = await sharp(outputPath).metadata();

      console.log(
        `   ${variant.suffix || 'original'}: ${variantMeta.width}x${variantMeta.height} ` +
        `(${(outputSize / 1024).toFixed(0)}KB) - saved ${(savedBytes / 1024 / 1024).toFixed(2)}MB`
      );

    } catch (error) {
      console.error(`   ❌ Error creating ${variant.suffix}: ${error.message}`);
    }
  }

  console.log(`   ✅ Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
}

async function processAllImages() {
  console.log('🎨 Starting image optimization...\n');
  console.log(`📂 Input: ${INPUT_DIR}`);
  console.log(`📂 Output: ${OUTPUT_DIR}\n`);

  const files = fs.readdirSync(INPUT_DIR)
    .filter(file => file.endsWith('.webp'));

  console.log(`Found ${files.length} images to process\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    totalOriginalSize += fs.statSync(inputPath).size;

    await optimizeImage(inputPath, file);
  }

  // Calculate total optimized size
  const optimizedFiles = fs.readdirSync(OUTPUT_DIR);
  for (const file of optimizedFiles) {
    totalOptimizedSize += fs.statSync(path.join(OUTPUT_DIR, file)).size;
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary:');
  console.log(`   Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Total saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Reduction: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));
  console.log('\n✅ Optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Review optimized images in: ' + OUTPUT_DIR);
  console.log('   2. Update artwork model to use responsive variants');
  console.log('   3. Update component templates with srcset');
}

processAllImages().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
