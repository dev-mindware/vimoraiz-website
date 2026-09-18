# VIMORAIZ — Website Institucional & Plataforma de Contactos

Website institucional da **VIMORAIZ – PRESTAÇÃO DE SERVIÇOS (SU), LDA**, sociedade angolana especializada em Contabilidade Geral (PGC), Fiscalidade & AGT, Auditoria Contabilística e Auditoria Fiscal Preventiva, sediada em Luanda, Angola.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com paleta Ink (`globals.css`) e sistema de iluminação ambiental (**spotlights**)
- **Animações & Motion:** [Framer Motion](https://www.framer.com/motion/) + [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- **Dados Estruturados:** Schema.org JSON-LD (`AccountingService`, `LocalBusiness`, `WebSite`) validado para Google Rich Results
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Gestor de Pacotes:** [pnpm](https://pnpm.io/)

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20+
- pnpm 10+ ou 11+

### Instalação e Desenvolvimento
```bash
# 1. Instalar dependências
pnpm install

# 2. Iniciar servidor local de desenvolvimento
pnpm dev

# 3. Compilar para produção (SSG + rotas de API)
pnpm build

# 4. Iniciar servidor de produção
pnpm start
```

---

## 📁 Estrutura de Diretórios

```
├── public/                 # Imagens, logotipos institucionais, ícones e assets
├── src/
│   ├── app/                # Next.js App Router (page.tsx, layout.tsx, globals.css)
│   │   ├── api/contact/    # Endpoint POST para envio seguro de pedidos de orçamento
│   │   ├── manifest.ts     # PWA Web App Manifest
│   │   ├── robots.ts       # Configuração de crawling e robots.txt dinâmico
│   │   └── sitemap.ts      # Sitemap XML canónico dinâmico
│   ├── components/         # Componentes UI (Navbar, Hero, About, Values, Services, etc.)
│   │   └── ui/             # Componentes de base (SectionSpotlight, ScoopedCard, SpotlightCard)
│   ├── context/            # Contextos React (QuoteContext)
│   ├── data/               # Conteúdos, dados de serviços, valores e diferenciais
│   └── types/              # Tipagens TypeScript
└── scripts/                # Scripts de validação automatizada e testes E2E
```

---

## 🌐 Domínio & Produção

- **Domínio Oficial:** `https://vimoraiz.com`
- **Contacto Corporativo:** `geral@vimoraiz.com`
- **Desenvolvido por:** [Mindware](https://mindware.ao)
