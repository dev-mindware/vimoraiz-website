export interface CompanyValue {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StrategicPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface CompanyContactInfo {
  name: string;
  nif: string;
  location: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappUrl: string;
  emails: {
    primary: string;
    secondary: string;
  };
  schedule: string;
}
