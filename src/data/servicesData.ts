import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "contabilidade",
    number: "01",
    title: "Contabilidade Geral & Gestão",
    shortDescription: "Gestão e organização contabilística, acompanhamento contínuo, demonstrações financeiras e relatórios de gestão.",
    fullDescription: "A VIMORAIZ assume a gestão integral da contabilidade da sua empresa com rigor metodológico. Transformamos dados dispersos em informação financeira fiável, estruturada e em total conformidade com o Plano Geral de Contabilidade (PGC) de Angola.",
    category: "Gestão Financeira",
    image: "/images/services/contabilidade.jpg",
    highlightButton: true, // Amarelo vibrante no 1º card idêntico à imagem de referência 2
    includes: [
      "Classificação e lançamento sistemático de documentos",
      "Elaboração de balancetes mensais e trimestrais",
      "Demonstrações de Resultados e Balanço Anual",
      "Relatórios de gestão e análise de rácios financeiros",
      "Reconciliações bancárias e controlo de contas correntes",
      "Arquivo e organização digital de documentação contabilística"
    ],
    benefits: [
      "Visão clara e transparente da saúde financeira do negócio",
      "Informação fidedigna para suporte a decisões de investimento",
      "Prontidão para pedidos de crédito bancário e financiamento",
      "Redução drástica de perdas e desvios operacionais"
    ],
    targetAudience: [
      "Micro, pequenas e médias empresas em expansão",
      "Negócios que pretendem profissionalizar a gestão financeira",
      "Empresas sem departamento de contabilidade interno"
    ],
    pricingNote: "Sob consulta com proposta personalizada à dimensão da sua empresa"
  },
  {
    id: "fiscalidade",
    number: "02",
    title: "Fiscalidade & Apoio AGT",
    shortDescription: "Acompanhamento rigoroso das obrigações fiscais, apuramento de impostos e apoio permanente junto da AGT.",
    fullDescription: "Assessoria tributária contínua para garantir que a sua empresa cumpre pontualmente todas as exigências legais vigentes em Angola, mitigando riscos de coimas, juros de mora ou penalidades da Administração Geral Tributária (AGT).",
    category: "Conformidade Fiscal",
    image: "/images/services/fiscalidade.jpg",
    includes: [
      "Apuramento e submissão do Imposto sobre o Rendimento do Trabalho (IRT)",
      "Apuramento e declaração do Imposto sobre o Valor Acrescentado (IVA)",
      "Cálculo e entrega do Imposto Industrial (II)",
      "Gestão de retenções na fonte e Imposto do Selo",
      "Representação técnica e resposta a notificações da AGT",
      "Planeamento fiscal preventivo e legal"
    ],
    benefits: [
      "Eliminação de riscos de coimas e execuções fiscais",
      "Otimização fiscal estritamente dentro da legalidade",
      "Tranquilidade total perante fiscalizações tributárias",
      "Prazos fiscais 100% monitorizados e cumpridos"
    ],
    targetAudience: [
      "Empresas sujeitas ao regime geral ou simplificado do IVA",
      "Empresas com volume elevado de transações comerciais",
      "Negócios que necessitam de intermediação técnica perante a AGT"
    ],
    pricingNote: "Sob consulta com planos mensais adaptados"
  },
  {
    id: "contabilidade-fiscalidade",
    number: "03",
    title: "Solução Integrada: Contabilidade + Fiscalidade",
    shortDescription: "Solução integrada que reúne o acompanhamento contabilístico e fiscal contínuo da empresa.",
    fullDescription: "O pacote mais completo e eficiente da VIMORAIZ. Uma equipa dedicada que alinha em tempo real os lançamentos contabilísticos ao cumprimento das obrigações tributárias, oferecendo controlo 360° e máxima economia de escala.",
    category: "Pacote Corporativo",
    image: "/images/services/contabilidade-fiscalidade.jpg",
    includes: [
      "Todos os serviços do módulo de Contabilidade Geral",
      "Todos os serviços do módulo de Fiscalidade e AGT",
      "Reuniões periódicas de acompanhamento com consultor dedicado",
      "Dashboard executivo com indicadores financeiros-chave",
      "Auditoria preventiva trimestral aos lançamentos",
      "Canal prioritário de apoio via WhatsApp e e-mail"
    ],
    benefits: [
      "Sinergia total entre os registos contábeis e as declarações fiscais",
      "Custo mais vantajoso face à contratação avulsa",
      "Um único interlocutor para todas as matérias financeiras",
      "Foco total da sua equipa no crescimento do negócio principal"
    ],
    targetAudience: [
      "Empresas que exigem acompanhamento integral de excelência",
      "Empresários que procuram um parceiro de gestão de longo prazo",
      "Sociedades por quotas e anónimas em Angola"
    ],
    pricingNote: "Sob consulta com proposta à medida"
  },
  {
    id: "auditoria-contabilistica",
    number: "04",
    title: "Auditoria Contabilística",
    shortDescription: "Análise dos registos e procedimentos para avaliar a fiabilidade da informação e melhorar controlos internos.",
    fullDescription: "Exame minucioso e independente das demonstrações financeiras e procedimentos internos da empresa. Identificamos discrepâncias, vulnerabilidades de controlo e oportunidades para robustecer os processos administrativos.",
    category: "Auditoria & Risco",
    image: "/images/services/auditoria-contabilistica.jpg",
    includes: [
      "Revisão abrangente de lançamentos e contas patrimoniais",
      "Avaliação da eficácia dos sistemas de controlo interno",
      "Verificação da conformidade com as normas contabilísticas",
      "Identificação de riscos operacionais e falhas de processo",
      "Emissão de Relatório de Auditoria com recomendações acionáveis",
      "Apresentação executiva das conclusões à administração"
    ],
    benefits: [
      "Validação fidedigna das contas perante sócios e investidores",
      "Prevenção eficaz de fraudes, erros e inconsistências",
      "Melhoria substancial dos controlos internos da empresa",
      "Credibilidade reforçada no mercado financeiro e bancário"
    ],
    targetAudience: [
      "Empresas que necessitam de auditar demonstrações para sócios",
      "Organizações em processo de reestruturação ou auditoria externa",
      "Empresas que detetaram incoerências nos seus balancetes"
    ],
    pricingNote: "Orçamento sob diagnóstico preliminar"
  },
  {
    id: "auditoria-fiscal",
    number: "05",
    title: "Auditoria Fiscal Preventiva",
    shortDescription: "Avaliação da situação fiscal para identificar riscos, incumprimentos e contingências tributárias.",
    fullDescription: "Diagnóstico aprofundado a todos os impostos liquidados nos últimos exercícios fiscais. Detetamos contingências ocultas antes que se tornem alvo de inspeção da AGT, blindando a sua organização contra surpresas desagradáveis.",
    category: "Segurança Tributária",
    image: "/images/services/auditoria-fiscal.jpg",
    includes: [
      "Varredura completa a declarações de IVA, IRT e Imposto Industrial",
      "Conferência de retenções na fonte e guias de pagamento",
      "Deteção precoce de divergências de faturação eletrónica",
      "Mapeamento de contingências fiscais e cálculo de passivos",
      "Elaboração de plano de correção e mitigação de riscos",
      "Simulação de procedimentos de fiscalização tributária"
    ],
    benefits: [
      "Antecipação a inspeções oficiais da AGT",
      "Eliminação de riscos de penalizações gravosas",
      "Regularização preventiva de inconformidades passadas",
      "Maior segurança jurídica para os administradores e sócios"
    ],
    targetAudience: [
      "Empresas com histórico fiscal irregular ou complexo",
      "Negócios que operam em setores de alta fiscalização",
      "Empresas em preparação para processos de fusão ou compra"
    ],
    pricingNote: "Sob consulta após análise de volume fiscal"
  },
  {
    id: "regularizacao-fiscal",
    number: "06",
    title: "Regularização Fiscal & AGT",
    shortDescription: "Análise e regularização de pendências, dívidas fiscais acumuladas e acompanhamento de processos junto da AGT.",
    fullDescription: "Intervenção técnica especializada para resolver pendências tributárias antigas, dívidas acumuladas, certidões negativas bloqueadas e negociação de planos de pagamento em prestações perante a Administração Geral Tributária.",
    category: "Resolução de Pendências",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Levantamento exaustivo da conta corrente fiscal da empresa na AGT",
      "Identificação de divergências de liquidação e pagamentos não reconciliados",
      "Negociação e formalização de acordos de pagamento em prestações",
      "Regularização de processos de certidão de não-devedor",
      "Defesa técnica de autos de notícia e notificações tributárias",
      "Acompanhamento presencial e virtual nas repartições fiscais"
    ],
    benefits: [
      "Desbloqueio da certidão de não-devedor para concursos e licitações",
      "Eliminação da ameaça de penhora de contas bancárias",
      "Negociação de condições sustentáveis de amortização de dívida",
      "Restabelecimento da idoneidade fiscal da empresa"
    ],
    targetAudience: [
      "Empresas com pendências fiscais em atraso",
      "Empresas impedidas de faturar ou concorrer a contratos públicos",
      "Negócios com notificações ou execuções fiscais em curso"
    ],
    pricingNote: "Orçamento sob análise do histórico do contribuinte"
  },
  {
    id: "checkup-contabilistico",
    number: "07",
    title: "Check-up Contabilístico & Fiscal",
    shortDescription: "Diagnóstico ágil da situação contabilística e fiscal da empresa para identificar erros e oportunidades.",
    fullDescription: "Raio-X rápido e assertivo ao estado geral da contabilidade e dos impostos da empresa. Um serviço de entrada ideal para empresários que desejam saber com exatidão como está o seu negócio antes de tomar grandes decisões.",
    category: "Diagnóstico Estratégico",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Inspeção por amostragem aos lançamentos dos últimos 6 a 12 meses",
      "Verificação do cumprimento do calendário fiscal obrigatório",
      "Análise rápida da consistência do balancete de verificação",
      "Deteção de oportunidades legais de redução de custos tributários",
      "Relatório executivo sintético 'Semáforo de Riscos'",
      "Sessão de esclarecimento de 60 minutos com consultor sénior"
    ],
    benefits: [
      "Diagnóstico claro em tempo recorde (5 a 7 dias úteis)",
      "Identificação imediata de gargalos e vulnerabilidades",
      "Investimento acessível com alto retorno informativo",
      "Base sólida para contratação de planos contínuos"
    ],
    targetAudience: [
      "Empresários que assumiram nova gestão ou sociedade",
      "Negócios com dúvidas sobre o trabalho do contabilista anterior",
      "Empresas que preparam o encerramento do exercício"
    ],
    pricingNote: "Pacote fixo sob consulta"
  },
  {
    id: "consultoria-apoio-gestao",
    number: "08",
    title: "Consultoria Empresarial & Apoio à Gestão",
    shortDescription: "Orientação contabilística, financeira e fiscal para apoiar a liderança na tomada de decisões seguras.",
    fullDescription: "Mais do que cumprir obrigações legais, colocamos a contabilidade a trabalhar a favor da rentabilidade da sua empresa. Fornecemos métricas, planeamento orçamental e visão estratégica para apoiar o crescimento sustentável.",
    category: "Consultoria Estratégica",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Elaboração de orçamentos anuais e previsões de tesouraria (cash flow)",
      "Definição de indicadores-chave de desempenho (KPIs de rentabilidade)",
      "Análise de custos fixos, margens de contribuição e ponto de equilíbrio",
      "Assessoria em decisões de compra de ativos e financiamento",
      "Reuniões estratégicas de conselho de gestão",
      "Apoio na estruturação societária de novos projetos"
    ],
    benefits: [
      "Decisões fundamentadas em dados concretos e não em intuição",
      "Maior controlo sobre o fluxo de caixa e capital de giro",
      "Aumento da rentabilidade operacional da empresa",
      "Parceiro sénior de confiança ao lado da direção"
    ],
    targetAudience: [
      "Empresas em fase de expansão ou captação de sócios",
      "Líderes que necessitam de orientação financeira qualificada",
      "Grupos empresariais que necessitam de consolidação de dados"
    ],
    pricingNote: "Proposta sob medida por avença ou projeto"
  }
];
