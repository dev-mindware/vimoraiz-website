"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { ServiceItem } from "@/types";
import { ScoopedCard } from "@/components/ui/ScoopedCard";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { SectionSpotlight } from "@/components/ui/SectionSpotlight";
import { useQuote } from "@/context/QuoteContext";

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const { scrollToContact } = useQuote();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax suave no cabeçalho e nos cards durante o scroll
  const headerY = useTransform(scrollYProgress, [0.05, 0.4], [35, 0]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [35, -25]);

  // Slide automático a cada 3.6 segundos com pausa inteligente ao passar o mouse ou abrir modal
  useEffect(() => {
    if (isHovered || selectedService) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const cardStep = 284; // largura do card (260px) + gap (24px)

      if (scrollLeft >= maxScroll - 20) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: cardStep, behavior: "smooth" });
      }
    }, 3600);

    return () => clearInterval(interval);
  }, [isHovered, selectedService]);

  const handleQuoteClick = (serviceTitle: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceTitle);
    } else {
      scrollToContact(serviceTitle);
    }
    const contactEl = document.getElementById("contacto");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="servicos"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-24 bg-canvas-light-2 dark:bg-canvas-dark-2 border-y border-slate-200/80 dark:border-white/10 relative overflow-hidden select-none transition-colors"
    >
      {/* Background Spotlight & Blueprint Grid (Modo bem mais sutil) */}
      <SectionSpotlight variant="dual" grid="subtle" />

      {/* Container de Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* CABEÇALHO ASSIMÉTRICO COM ENTRADA EM PARALLAX                            */}
        {/* ========================================================================= */}
        <motion.div
          style={{ y: headerY }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16"
        >
          {/* Coluna Esquerda: Eyebrow e Título */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy dark:text-brand-steel mb-4"
            >
              <span className="text-brand-primary-hover dark:text-brand-steel font-extrabold text-sm">/</span>
              <span className="text-slate-700 dark:text-slate-400 tracking-widest">Nossos Serviços Especializados</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-slate dark:text-slate-200 tracking-tight leading-[1.06]"
            >
              Excelência e Rigor <br />
              Profissional
            </motion.h2>
          </div>

          {/* Coluna Direita: Parágrafo e Links Rápidos em Azul Corporativo */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-md"
            >
              Da organização contabilística contínua à regularização e auditoria fiscal preventiva perante a AGT. Escolha rigor, escolha a VIMORAIZ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-sm font-semibold text-brand-navy dark:text-brand-steel"
            >
              <button
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-1 hover:text-brand-primary-hover dark:hover:text-slate-200 transition-colors cursor-pointer group"
              >
                <span>Ver Todos os Serviços</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center gap-1 hover:text-brand-primary-hover dark:hover:text-slate-200 transition-colors cursor-pointer group"
              >
                <span>Solicitar Orçamento</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARROSSEL HORIZONTAL DE CARDS COM CANTO RECORTADO (SCOOPED CORNER)        */}
        {/* ========================================================================= */}
        <motion.div
          style={{ y: cardsY }}
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth"
        >
          {servicesData.map((service, index) => (
            <ScoopedCard
              key={service.id}
              service={service}
              index={index}
              onSelect={(svc) => setSelectedService(svc)}
            />
          ))}
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL DETALHADO DO SERVIÇO EM FORMATO AMPLO                               */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onSelectForQuote={handleQuoteClick}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
