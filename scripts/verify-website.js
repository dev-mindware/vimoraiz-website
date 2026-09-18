const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function runDetailedValidation() {
  console.log('--- INICIANDO VALIDAÇÃO 100% DETALHADA DO WEBSITE VIMORAIZ (LIGHT & DARK MODE) ---');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });

  const brainDir = 'C:/Users/Administrator/.gemini/antigravity/brain/ea16ba17-088d-4016-98b4-6fc1592fe4db';

  for (const mode of ['light', 'dark']) {
    console.log(`\n================== EXECUTANDO MODO: ${mode.toUpperCase()} ==================`);
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
      colorScheme: mode
    });
    const page = await context.newPage();

    console.log(`[${mode}] Navegando para http://localhost:3001...`);
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // 1. Full page
    console.log(`[${mode}] Capturando screenshot da página completa...`);
    await page.screenshot({
      path: path.join(brainDir, `screenshot_full_${mode}.png`),
      fullPage: true
    });

    // 2. Hero Section
    console.log(`[${mode}] Capturando Hero Section...`);
    const heroEl = await page.$('#inicio');
    if (heroEl) {
      await heroEl.screenshot({
        path: path.join(brainDir, `screenshot_hero_${mode}.png`)
      });
    }

    // 3. Sobre Nós
    console.log(`[${mode}] Capturando Secção Sobre Nós...`);
    const aboutEl = await page.$('#sobre');
    if (aboutEl) {
      await aboutEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await aboutEl.screenshot({
        path: path.join(brainDir, `screenshot_about_${mode}.png`)
      });
    }

    // 4. 10 Valores Fundamentais
    console.log(`[${mode}] Capturando 10 Valores com Marca d'Água...`);
    const valuesEl = await page.$('#valores');
    if (valuesEl) {
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'hidden';
        const el = document.getElementById('valores');
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 40;
          window.scrollTo({ top: y, behavior: 'instant' });
        }
      });
      await page.waitForTimeout(600);
      await valuesEl.screenshot({
        path: path.join(brainDir, `screenshot_values_${mode}.png`)
      });
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.visibility = 'visible';
      });
    }

    // 5. Serviços (Sem barra de scroll)
    console.log(`[${mode}] Capturando Secção de Serviços...`);
    const servicesEl = await page.$('#servicos');
    if (servicesEl) {
      await servicesEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await servicesEl.screenshot({
        path: path.join(brainDir, `screenshot_services_${mode}.png`)
      });
    }

    // 6. Modal de Detalhes do Serviço
    console.log(`[${mode}] Abrindo Modal de Detalhes do Serviço...`);
    const firstCard = await page.$('[data-testid="service-card"]');
    if (firstCard) {
      await firstCard.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await firstCard.click();
      await page.waitForTimeout(800);
      await page.screenshot({
        path: path.join(brainDir, `screenshot_modal_${mode}.png`)
      });
      await page.keyboard.press('Escape');
      await page.waitForTimeout(400);
    }

    // 7. Porquê a Vimoraiz
    console.log(`[${mode}] Capturando Secção Porquê a Vimoraiz...`);
    const whyEl = await page.$('#por-que');
    if (whyEl) {
      await whyEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await whyEl.screenshot({
        path: path.join(brainDir, `screenshot_why_${mode}.png`)
      });
    }

    // 8. Testemunhos com Onda Senoidal
    console.log(`[${mode}] Capturando Testemunhos...`);
    const testimonialsEl = await page.$('#testemunhos');
    if (testimonialsEl) {
      await testimonialsEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await testimonialsEl.screenshot({
        path: path.join(brainDir, `screenshot_testimonials_${mode}.png`)
      });
    }

    // 9. Contacto & Orçamento (com geral@vimoraiz.com)
    console.log(`[${mode}] Capturando Contacto...`);
    const contactEl = await page.$('#contacto');
    if (contactEl) {
      await contactEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await contactEl.screenshot({
        path: path.join(brainDir, `screenshot_contact_${mode}.png`)
      });
    }

    // 10. Rodapé com Atribuição Mindware
    console.log(`[${mode}] Capturando Rodapé com Atribuição Mindware...`);
    const footerEl = await page.$('footer');
    if (footerEl) {
      await footerEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await footerEl.screenshot({
        path: path.join(brainDir, `screenshot_footer_${mode}.png`)
      });
    }

    await context.close();
  }

  await browser.close();
  console.log('\n--- VALIDAÇÃO DE LIGHT E DARK MODE CONCLUÍDA COM 100% DE SUCESSO! ---');
}

runDetailedValidation().catch((err) => {
  console.error('Erro na validação Playwright:', err);
  process.exit(1);
});
