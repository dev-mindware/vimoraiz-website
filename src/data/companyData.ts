import { CompanyValue, StrategicPillar, MetricItem } from "@/types";

export const companyData = {
  name: "VIMORAIZ – PRESTAÇÃO DE SERVIÇOS (SU), LDA",
  shortName: "VIMORAIZ",
  nif: "5000000000",
  location: "Vila de Viana, Luanda – Angola",
  phone: "930 335 853",
  phoneFormatted: "+244 930 335 853",
  whatsappUrl: "https://wa.me/244930335853?text=Ol%C3%A1%20VIMORAIZ!%20Gostaria%20de%20solicitar%20uma%20informa%C3%A7%C3%A3o%20e%20or%C3%A7amento%20para%20a%20minha%20empresa.",
  emails: {
    primary: "geral@vimoraiz.com",
    secondary: "virgiliozage92@gmail.com"
  },
  schedule: "Segunda a sexta-feira, das 08h00 às 16h30",
  valueProposition: "Rigor, confiança, proximidade e soluções à medida para uma gestão organizada, segura e eficiente.",
  aboutText: "A VIMORAIZ é uma empresa angolana dedicada à prestação de serviços profissionais de topo nas áreas de Contabilidade, Fiscalidade e Auditoria. Trabalhamos para compreender a fundo as necessidades de cada cliente e apresentar soluções eficientes, rigorosas e adequadas à realidade económica de Angola.",
  mission: "Prestar serviços de Contabilidade, Fiscalidade, Auditoria Contabilística e Auditoria Fiscal com rigor, profissionalismo e responsabilidade, oferecendo soluções eficientes e adequadas às necessidades dos nossos clientes.",
  vision: "Ser uma empresa de referência em Angola nas áreas de Contabilidade, Fiscalidade e Auditoria, reconhecida pela qualidade, confiança, competência e inovação.",
  
  values: [
    {
      number: "01",
      title: "Profissionalismo",
      description: "Atuamos com competência, dedicação e foco em resultados.",
      iconName: "ShieldCheck"
    },
    {
      number: "02",
      title: "Rigor & Excelência",
      description: "Padrões elevados de qualidade em cada entrega.",
      iconName: "Target"
    },
    {
      number: "03",
      title: "Ética & Integridade",
      description: "Agimos com honestidade, transparência e responsabilidade.",
      iconName: "ShieldCheck"
    },
    {
      number: "04",
      title: "Confiança",
      description: "Construímos relações sólidas e duradouras.",
      iconName: "Handshake"
    },
    {
      number: "05",
      title: "Foco no Cliente",
      description: "Priorizamos as necessidades de cada cliente.",
      iconName: "User"
    },
    {
      number: "06",
      title: "Inovação",
      description: "Utilizamos tecnologia e soluções modernas para maximizar a eficiência.",
      iconName: "Lightbulb"
    },
    {
      number: "07",
      title: "Responsabilidade",
      description: "Cumprimos os nossos compromissos com seriedade.",
      iconName: "FileText"
    },
    {
      number: "08",
      title: "Confidencialidade",
      description: "Protegemos as informações que nos são confiadas.",
      iconName: "Lock"
    },
    {
      number: "09",
      title: "Qualidade Contínua",
      description: "Buscamos melhorar constantemente os nossos serviços.",
      iconName: "Award"
    },
    {
      number: "10",
      title: "Parceria",
      description: "Actuamos como aliados estratégicos dos nossos clientes.",
      iconName: "Users"
    }
  ] as CompanyValue[],

  pillars: [
    {
      title: "Rigor Metodológico",
      description: "Tratamos a informação contabilística e fiscal com a máxima atenção e responsabilidade técnica perante o PGC e a legislação tributária angolana.",
      iconName: "Shield"
    },
    {
      title: "Relação de Confiança",
      description: "Construímos relações profissionais de longo prazo baseadas na transparência, ética e confidencialidade absoluta das informações.",
      iconName: "Users"
    },
    {
      title: "Proximidade Real",
      description: "Procuramos compreender a fundo a realidade de cada cliente antes de propor qualquer solução, mantendo comunicação direta e contínua.",
      iconName: "MessageSquare"
    },
    {
      title: "Soluções Personalizadas",
      description: "Os serviços são dimensionados à medida da escala, setor de atividade e volume operacional de cada micro, pequena ou média empresa.",
      iconName: "Sliders"
    },
    {
      title: "Tecnologia & Inovação",
      description: "Ferramentas digitais avançadas que agilizam o processamento documental, reconciliações e acompanhamento em tempo real.",
      iconName: "Cpu"
    },
    {
      title: "Acompanhamento Contínuo",
      description: "Apoio proativo que antecipa prazos da AGT e alerta a gestão para riscos fiscais antes que se tornem passivos.",
      iconName: "Compass"
    }
  ] as StrategicPillar[],

  metrics: [
    {
      value: 150,
      suffix: "+",
      label: "Empresas Assessoradas",
      description: "Negócios que confiam a sua organização fiscal e contabilística à VIMORAIZ."
    },
    {
      value: 99.8,
      suffix: "%",
      label: "Conformidade AGT",
      description: "Índice de submissões fiscais e relatórios aprovados sem incidentes ou coimas."
    },
    {
      value: 100,
      suffix: "%",
      label: "Prazos Cumpridos",
      description: "Compromisso pontual rigoroso em todas as obrigações declarativas e tributárias."
    },
    {
      value: 10,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Bagagem técnica acumulada no mercado contabilístico e tributário de Angola."
    }
  ] as MetricItem[]
};
