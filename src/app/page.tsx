import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { TestimonialsWave } from "@/components/TestimonialsWave";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { QuoteProvider } from "@/context/QuoteContext";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      {/* Dados Estruturados Schema.org para o Googlebot (AccountingService + LocalBusiness) */}
      <JsonLd />

      <QuoteProvider>
        <div className="min-h-screen bg-transparent text-inherit flex flex-col">
          {/* 1. Barra de Navegação Superior Fixa com Lenis Scroll Integrado */}
          <Navbar />

          <main className="flex-1">
            {/* 2. Hero Section (Fundo Branco · Parallax Chamativo Multicamadas) */}
            <Hero />

            {/* 3. Secção 01: Sobre Nós (Canvas 2 · Parallax Fotográfico e Linha Divisória) */}
            <AboutSection />

            {/* 4. Secção 02: Os 10 Valores Fundamentais (Canvas 1 · Parallax Marca d'Água Oficial "V") */}
            <ValuesSection />

            {/* 5. Secção 03: Serviços (Canvas 2 · Cards de Canto Recortado) */}
            <ServicesSection />

            {/* 6. Secção 04: Diferenciais Estratégicos (Canvas 1 · Parallax por Colunas e KPIs) */}
            <WhyUsSection />

            {/* 7. Secção 05: Testemunhos (Canvas 2 · Onda Senoidal Flutuante no Scroll) */}
            <TestimonialsWave />

            {/* 8. Secção 06: Contactos & Orçamento (Canvas 1 · Convergência Lateral) */}
            <ContactSection />
          </main>

          {/* 9. Rodapé Institucional Completo (Footer Tokens) */}
          <Footer />
        </div>
      </QuoteProvider>
    </>
  );
}
