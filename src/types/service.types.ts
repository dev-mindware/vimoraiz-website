export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
  highlightButton?: boolean;
  includes: string[];
  benefits: string[];
  targetAudience: string[];
  pricingNote: string;
}

export type ServiceCategory =
  | "Contabilidade"
  | "Fiscalidade"
  | "Auditoria"
  | "RH & Salários"
  | "Consultoria"
  | "Regularização";
