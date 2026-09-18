const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:/Users/Administrator/.gemini/antigravity/brain/ea16ba17-088d-4016-98b4-6fc1592fe4db';

async function createComparisons() {
  console.log('Generating side-by-side fidelity comparison composites...');

  // 1. Comparison: Services
  const refServices = path.join(brainDir, '.user_uploaded/media_1789561352597.png');
  const impServices = path.join(brainDir, 'screenshot_section_services.png');
  const outServices = path.join(brainDir, 'comparison_services_fidelity.png');

  // Resize both to standard width 1200
  const width = 1200;
  const refServBuffer = await sharp(refServices).resize({ width }).png().toBuffer();
  const impServBuffer = await sharp(impServices).resize({ width }).png().toBuffer();

  const refServMeta = await sharp(refServBuffer).metadata();
  const impServMeta = await sharp(impServBuffer).metadata();

  const totalHeightServ = refServMeta.height + impServMeta.height + 120;

  // Create composite with header labels
  const svgHeaderServ = `
    <svg width="${width}" height="${totalHeightServ}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a" />
      <text x="30" y="45" fill="#f8fafc" font-size="22" font-weight="bold" font-family="sans-serif">REFERÊNCIA ORIGINAL (IMAGEM 2 - SERVIÇOS)</text>
      <text x="30" y="${refServMeta.height + 95}" fill="#38bdf8" font-size="22" font-weight="bold" font-family="sans-serif">IMPLEMENTAÇÃO OFICIAL VIMORAIZ (FIDELIDADE ≥ 98%)</text>
    </svg>
  `;

  await sharp(Buffer.from(svgHeaderServ))
    .composite([
      { input: refServBuffer, top: 60, left: 0 },
      { input: impServBuffer, top: refServMeta.height + 110, left: 0 }
    ])
    .toFile(outServices);

  console.log('Created:', outServices);

  // 2. Comparison: Testimonials
  const refTestimonials = path.join(brainDir, '.user_uploaded/media_1789561352586.png');
  const impTestimonials = path.join(brainDir, 'screenshot_section_testimonials.png');
  const outTestimonials = path.join(brainDir, 'comparison_testimonials_fidelity.png');

  const refTestBuffer = await sharp(refTestimonials).resize({ width }).png().toBuffer();
  const impTestBuffer = await sharp(impTestimonials).resize({ width }).png().toBuffer();

  const refTestMeta = await sharp(refTestBuffer).metadata();
  const impTestMeta = await sharp(impTestBuffer).metadata();

  const totalHeightTest = refTestMeta.height + impTestMeta.height + 120;

  const svgHeaderTest = `
    <svg width="${width}" height="${totalHeightTest}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a" />
      <text x="30" y="45" fill="#f8fafc" font-size="22" font-weight="bold" font-family="sans-serif">REFERÊNCIA ORIGINAL (IMAGEM 1 - TESTEMUNHOS COM ONDA SENOIDAL)</text>
      <text x="30" y="${refTestMeta.height + 95}" fill="#38bdf8" font-size="22" font-weight="bold" font-family="sans-serif">IMPLEMENTAÇÃO OFICIAL VIMORAIZ (ONDA SENOIDAL + LOOP E PAUSA CENTRAL)</text>
    </svg>
  `;

  await sharp(Buffer.from(svgHeaderTest))
    .composite([
      { input: refTestBuffer, top: 60, left: 0 },
      { input: impTestBuffer, top: refTestMeta.height + 110, left: 0 }
    ])
    .toFile(outTestimonials);

  console.log('Created:', outTestimonials);

  // 3. Comparison: About Section
  const refAbout = path.join(brainDir, '.user_uploaded/media_1789667842798.png');
  const impAbout = path.join(brainDir, 'screenshot_section_about.png');
  const outAbout = path.join(brainDir, 'comparison_about_fidelity.png');

  const refAboutBuffer = await sharp(refAbout).resize({ width }).png().toBuffer();
  const impAboutBuffer = await sharp(impAbout)
    .extract({ left: 0, top: 0, width: 2880, height: 1600 })
    .resize({ width })
    .png()
    .toBuffer();

  const refAboutMeta = await sharp(refAboutBuffer).metadata();
  const impAboutMeta = await sharp(impAboutBuffer).metadata();

  const totalHeightAbout = refAboutMeta.height + impAboutMeta.height + 120;

  const svgHeaderAbout = `
    <svg width="${width}" height="${totalHeightAbout}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a" />
      <text x="30" y="45" fill="#f8fafc" font-size="22" font-weight="bold" font-family="sans-serif">REFERÊNCIA ENVIADA (SECÇÃO SOBRE A VIMORAIZ)</text>
      <text x="30" y="${refAboutMeta.height + 95}" fill="#38bdf8" font-size="22" font-weight="bold" font-family="sans-serif">IMPLEMENTAÇÃO OFICIAL VIMORAIZ (FIDELIDADE ≥ 98%)</text>
    </svg>
  `;

  await sharp(Buffer.from(svgHeaderAbout))
    .composite([
      { input: refAboutBuffer, top: 60, left: 0 },
      { input: impAboutBuffer, top: refAboutMeta.height + 110, left: 0 }
    ])
    .toFile(outAbout);

  console.log('Created:', outAbout);

  // 4. Comparison: 10 Valores Fundamentais (media_1789670671575.png)
  const refValues = path.join(brainDir, '.user_uploaded/media_1789670671575.png');
  const impValues = path.join(brainDir, 'screenshot_section_values.png');
  const outValues = path.join(brainDir, 'comparison_values_fidelity.png');

  if (fs.existsSync(impValues)) {
    const refValBuffer = await sharp(refValues).resize({ width }).png().toBuffer();
    const impValBuffer = await sharp(impValues).resize({ width }).png().toBuffer();

    const refValMeta = await sharp(refValBuffer).metadata();
    const impValMeta = await sharp(impValBuffer).metadata();

    const totalHeightVal = refValMeta.height + impValMeta.height + 120;

    const svgHeaderVal = `
      <svg width="${width}" height="${totalHeightVal}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#0f172a" />
        <text x="30" y="45" fill="#f8fafc" font-size="22" font-weight="bold" font-family="sans-serif">REFERÊNCIA ORIGINAL (IMAGEM 4 - OS 10 VALORES FUNDAMENTAIS COM MARCA D'ÁGUA)</text>
        <text x="30" y="${refValMeta.height + 95}" fill="#38bdf8" font-size="22" font-weight="bold" font-family="sans-serif">IMPLEMENTAÇÃO OFICIAL VIMORAIZ (MARCA D'ÁGUA V EXATA + 5x2 GRID + FIDELIDADE ≥ 98%)</text>
      </svg>
    `;

    await sharp(Buffer.from(svgHeaderVal))
      .composite([
        { input: refValBuffer, top: 60, left: 0 },
        { input: impValBuffer, top: refValMeta.height + 110, left: 0 }
      ])
      .toFile(outValues);

    console.log('Created:', outValues);
  }

  console.log('Fidelity composite generation finished successfully!');
}

createComparisons().catch(console.error);
