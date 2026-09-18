async function verifySeo() {
  const res = await fetch('http://localhost:3000');
  const html = await res.text();

  console.log('=== VERIFICAÇÃO SEO E PRÉ-RENDERIZAÇÃO (HTML PURO) ===');
  console.log('Tamanho do HTML:', html.length, 'bytes');
  console.log('1. Tag Canonical Absoluta:', html.includes('rel="canonical"') && html.includes('https://vimoraiz.com'));
  console.log('2. Metadados Open Graph:', html.includes('property="og:title"') && html.includes('property="og:description"'));
  console.log('3. Metadados Twitter Card:', html.includes('name="twitter:card"'));
  console.log('4. Diretivas Robots Googlebot:', html.includes('name="robots"') && html.includes('max-image-preview:large'));
  console.log('5. Dados Estruturados JSON-LD:', html.includes('application/ld+json') && html.includes('AccountingService'));
  console.log('6. H1 Pré-renderizado no Servidor (SSG):', html.includes('Contabilidade e Fiscalidade'));
  console.log('7. Serviços Pré-renderizados no Servidor:', html.includes('Auditoria Fiscal Preventiva'));
  console.log('8. Idioma Definido (lang="pt"):', html.includes('<html lang="pt"'));

  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      console.log('9. Validação de Sintaxe JSON-LD: VÁLIDO');
      console.log('   Tipo(s):', parsed['@graph'].map(item => item['@type']).flat().join(', '));
      console.log('   Organização:', parsed['@graph'][1]?.name);
      console.log('   Total de Serviços no Catálogo:', parsed['@graph'][1]?.hasOfferCatalog?.itemListElement?.length);
    } catch (e) {
      console.error('9. Falha ao analisar JSON-LD:', e.message);
    }
  } else {
    console.error('9. JSON-LD não encontrado no HTML!');
  }
}

verifySeo().catch(console.error);
