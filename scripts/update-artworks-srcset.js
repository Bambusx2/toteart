/**
 * Script to add imageSrcset to all artwork entries
 * Reads arts.component.ts and adds imageSrcset property to each artwork
 */

const fs = require('fs');
const path = require('path');

const COMPONENT_PATH = path.join(__dirname, '../src/app/pages/arts/arts.component.ts');

// Read the file
let content = fs.readFileSync(COMPONENT_PATH, 'utf8');

// Pattern to match artwork entries without imageSrcset
// Matches: imageUrl: '...', imageAlt: '...' },
const artworkPattern = /imageUrl: '([^']+)', imageAlt: '([^']+)' }/g;

// Replace with imageSrcset added
content = content.replace(artworkPattern, (match, imageUrl, imageAlt) => {
  return `imageUrl: '${imageUrl}', imageAlt: '${imageAlt}', imageSrcset: this.getImageSrcset('${imageUrl}') }`;
});

// Write back
fs.writeFileSync(COMPONENT_PATH, content, 'utf8');

console.log('✅ Successfully added imageSrcset to all artworks!');
