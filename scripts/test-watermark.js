const sharp = require('sharp');

// Create exact vector based on watermark-preview.png
const svg = `
<svg width="500" height="420" viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff" />
  <!-- Left Ribbon of V -->
  <path d="M 60 0 L 165 0 L 320 295 L 215 295 Z" fill="#41729b" fill-opacity="0.08" />
  <!-- Right Ribbon of V -->
  <path d="M 230 250 L 375 0 L 480 0 C 480 0, 495 15, 475 50 L 330 330 L 255 330 Z" fill="#1b3d5c" fill-opacity="0.10" />
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('c:/Users/Administrator/Documents/GitHub/vimorais-website/public/images/test-watermark.png')
  .then(() => console.log('Rendered test-watermark.png'))
  .catch(console.error);
