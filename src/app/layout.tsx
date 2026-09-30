import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1b3d5c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vimoraiz.com"),
  title: {
    default: "VIMORAIZ · Contabilidade, Fiscalidade e Auditoria em Angola",
    template: "%s | VIMORAIZ",
  },
  description:
    "Apoiamos empresas na organização contabilística, cumprimento fiscal perante a AGT, auditoria independente e consultoria estratégica em Luanda, Angola.",
  applicationName: "VIMORAIZ",
  authors: [{ name: "VIMORAIZ", url: "https://vimoraiz.com" }],
  creator: "VIMORAIZ",
  publisher: "VIMORAIZ",
  keywords: [
    "Contabilidade Angola",
    "Fiscalidade Luanda",
    "Auditoria AGT",
    "Demonstrações Financeiras PGC",
    "Consultoria Tributária Luanda",
    "VIMORAIZ",
    "Auditoria Fiscal Preventiva",
    "Regularização Fiscal AGT",
    "Viana Luanda",
    "Imposto Industrial Angola",
    "IVA Angola",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VIMORAIZ · Contabilidade, Fiscalidade e Auditoria em Angola",
    description:
      "Apoiamos empresas na organização contabilística, cumprimento fiscal perante a AGT, auditoria independente e consultoria estratégica em Luanda, Angola.",
    url: "https://vimoraiz.com",
    siteName: "VIMORAIZ",
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "https://vimoraiz.com/brand-logo.png",
        width: 512,
        height: 512,
        alt: "VIMORAIZ · Contabilidade, Fiscalidade e Auditoria em Angola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIMORAIZ · Contabilidade, Fiscalidade e Auditoria em Angola",
    description:
      "Apoiamos empresas na organização contabilística, cumprimento fiscal perante a AGT, auditoria independente e consultoria estratégica em Luanda, Angola.",
    images: ["https://vimoraiz.com/brand-logo.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning className={`${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('vimoraiz-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)||(t==='system'&&m)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full font-sans bg-canvas-light-1 dark:bg-canvas-dark-1 text-brand-slate dark:text-slate-200 selection:bg-brand-surface dark:selection:bg-surface-dark-card-active selection:text-brand-navy dark:selection:text-slate-200 transition-colors duration-200">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
