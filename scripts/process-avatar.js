const sharp = require('sharp');
const path = require('path');

async function processImage() {
  const inputPath = path.join(__dirname, '../public/businessman.jpg');
  const outputPath = path.join(__dirname, '../public/businessman.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  // We want to make the white background transparent.
  // Flood fill from borders to only remove background white, not shirt white!
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isWhite(idx) {
    const r = pixels[idx * 4];
    const g = pixels[idx * 4 + 1];
    const b = pixels[idx * 4 + 2];
    return r > 230 && g > 230 && b > 230;
  }

  // Push all border pixels that are near white
  for (let x = 0; x < width; x++) {
    const topIdx = x;
    const botIdx = (height - 1) * width + x;
    if (isWhite(topIdx)) {
      queue.push(topIdx);
      visited[topIdx] = 1;
    }
    if (isWhite(botIdx)) {
      queue.push(botIdx);
      visited[botIdx] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    const leftIdx = y * width;
    const rightIdx = y * width + (width - 1);
    if (isWhite(leftIdx) && !visited[leftIdx]) {
      queue.push(leftIdx);
      visited[leftIdx] = 1;
    }
    if (isWhite(rightIdx) && !visited[rightIdx]) {
      queue.push(rightIdx);
      visited[rightIdx] = 1;
    }
  }

  let head = 0;
  while (head < queue.length) {
    const idx = queue[head++];
    const x = idx % width;
    const y = Math.floor(idx / width);

    // Check 4 neighbors
    const neighbors = [
      x > 0 ? idx - 1 : -1,
      x < width - 1 ? idx + 1 : -1,
      y > 0 ? idx - width : -1,
      y < height - 1 ? idx + width : -1
    ];

    for (const nIdx of neighbors) {
      if (nIdx !== -1 && !visited[nIdx] && isWhite(nIdx)) {
        visited[nIdx] = 1;
        queue.push(nIdx);
      }
    }
  }

  // Now set alpha based on visited
  for (let i = 0; i < width * height; i++) {
    if (visited[i]) {
      const r = pixels[i * 4];
      const g = pixels[i * 4 + 1];
      const b = pixels[i * 4 + 2];
      const brightness = (r + g + b) / 3;
      if (brightness >= 242) {
        pixels[i * 4 + 3] = 0;
      } else if (brightness >= 220) {
        // Soft edge feathering
        const alpha = Math.round(((242 - brightness) / 22) * 255);
        pixels[i * 4 + 3] = alpha;
      }
    }
  }

  await sharp(pixels, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .png()
    .toFile(outputPath);

  console.log('Successfully created transparent businessman.png at:', outputPath);
}

processImage().catch(console.error);
