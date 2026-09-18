import React from "react";

export const JsonLd: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://vimoraiz.com/#website",
        url: "https://vimoraiz.com",
        name: "VIMORAIZ · Contabilidade, Fiscalidade e Auditoria",
        description:
          "Sociedade angolana especializada em Contabilidade Geral, Fiscalidade & AGT, Auditoria Contabilística e Consultoria Estratégica em Luanda, Angola.",
        publisher: {
          "@id": "https://vimoraiz.com/#organization",
        },
        inLanguage: "pt-AO",
      },
      {
        "@type": ["AccountingService", "FinancialService", "LocalBusiness"],
        "@id": "https://vimoraiz.com/#organization",
        name: "VIMORAIZ – PRESTAÇÃO DE SERVIÇOS (SU), LDA",
        alternateName: "VIMORAIZ",
        url: "https://vimoraiz.com",
        logo: "https://vimoraiz.com/brand-logo.png",
        image: "https://vimoraiz.com/camarada_popout_wide.png",
        description:
          "Sociedade angolana de referência especializada em Contabilidade Geral (PGC), Fiscalidade e Conformidade AGT, Auditoria Contabilística e Fiscal Preventiva e Consultoria Estratégica para empresas em Angola.",
        telephone: "+244930335853",
        email: "geral@vimoraiz.com",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vila de Viana",
          addressLocality: "Luanda",
          addressRegion: "Luanda",
          addressCountry: "AO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -8.9038,
          longitude: 13.3725,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "16:30",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "Angola",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços Especializados de Contabilidade, Fiscalidade e Auditoria",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Contabilidade Geral e Demonstrações Financeiras",
                description:
                  "Organização contabilística contínua segundo o Plano Geral de Contabilidade (PGC) angolano, encerramento de contas e balancetes periódicos.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fiscalidade e Cumprimento AGT",
                description:
                  "Apuramento e submissão de obrigações tributárias perante a Administração Geral Tributária (AGT): IVA, IRT, Imposto Industrial e Retenções na Fonte.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Auditoria Contabilística Independente",
                description:
                  "Exame minucioso das demonstrações financeiras e processos de controlo interno com emissão de relatórios de auditoria.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Auditoria Fiscal Preventiva",
                description:
                  "Revisão sistemática e identificação antecipada de contingências tributárias antes de inspeções formais da AGT.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Regularização Fiscal e Resolução de Pendências AGT",
                description:
                  "Diagnóstico e saneamento de divergências nas contas correntes fiscais no Portal da AGT e obtenção célere de certidões de não devedor.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Consultoria Empresarial e Apoio à Gestão",
                description:
                  "Apoio especializado a conselhos de administração e direções financeiras na tomada de decisões estratégicas de investimento e controlo de custos.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default JsonLd;
