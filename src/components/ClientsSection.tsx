"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { clientsData } from "@/data/clientsData";
import {
  ClientLogoAAI,
  ClientLogoAdhepa,
  ClientLogoNFF,
  ClientLogoJFX,
  ClientLogoZenith,
  ClientLogoKwanza,
} from "./clients/ClientLogos";
import { SectionSpotlight } from "./ui/SectionSpotlight";

const logoMap: Record<string, React.ReactNode> = {
  aai: <ClientLogoAAI className="h-16 sm:h-20 max-w-[200px] transition-transform duration-300 group-hover:scale-105" />,
  adhepa: <ClientLogoAdhepa className="h-16 sm:h-20 max-w-[200px] transition-transform duration-300 group-hover:scale-105" />,
  nff: <ClientLogoNFF className="h-16 sm:h-20 max-w-[200px] transition-transform duration-300 group-hover:scale-105" />,
  jfx: <ClientLogoJFX className="h-16 sm:h-20 max-w-[200px] transition-transform duration-300 group-hover:scale-105" />,
  zenith: <ClientLogoZenith className="h-16 sm:h-20 max-w-[200px] transition-transform duration-300 group-hover:scale-105" />,
  "kwanza-tech": <ClientLogoKwanza className="h-16 sm:h-20 max-w-[200px] transition-transform duration-300 group-hover:scale-105" />,
};

export const ClientsSection: React.FC = () => {
  return (
    <section
      id="clientes"
      className="py-20 sm:py-24 bg-canvas-light-2 dark:bg-canvas-dark-2 relative overflow-hidden border-t border-slate-200/70 dark:border-white/10 scroll-mt-24"
    >
      {/* Iluminação Ambiental Sem Grade */}
      <SectionSpotlight variant="subtle" grid="none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-surface-dark-pill border border-slate-200/80 dark:border-white/10 text-brand-navy dark:text-brand-steel text-xs font-semibold mb-4 shadow-2xs"
          >
            <ShieldCheck size={14} className="text-brand-blue dark:text-brand-steel" />
            <span>Credibilidade &amp; Parcerias de Longo Prazo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-slate dark:text-slate-200 tracking-tight mb-4"
          >
            Empresas &amp; Instituições que Confiam na VIMORAIZ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Apoiamos organizações de referência no mercado angolano — desde entidades setoriais e operadoras de logística a PMEs em forte expansão — garantindo contabilidade rigorosa, auditoria fiscal preventiva e total conformidade legal perante a AGT.
          </motion.p>
        </div>

        {/* Marquee Ticker de Logótipos Suave (Fluxo Contínuo) */}
        <div className="relative w-full overflow-hidden py-4 mb-12 sm:mb-16 mask-gradient-x">
          <div className="flex w-max animate-marquee gap-8 sm:gap-12 items-center">
            {[...clientsData, ...clientsData].map((client, idx) => (
              <div
                key={`ticker-${client.id}-${idx}`}
                className="flex items-center justify-center px-6 py-4 rounded-xl bg-canvas-light-2/70 dark:bg-surface-dark-card/40 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 grayscale hover:grayscale-0 opacity-75 hover:opacity-100 flex-shrink-0"
              >
                <div className="w-36 sm:w-44 h-14 flex items-center justify-center">
                  {logoMap[client.id]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grade de Cartões Executivos dos Clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientsData.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-canvas-light-1 dark:bg-surface-dark-card/80 border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Topo do Card: Logótipo em Destaque Limpo */}
              <div>
                <div className="h-28 sm:h-32 w-full flex items-center justify-center rounded-xl bg-white dark:bg-surface-dark-deep/70 border border-slate-100 dark:border-white/5 p-4 mb-5 shadow-2xs group-hover:border-slate-200 dark:group-hover:border-white/15 transition-colors">
                  {logoMap[client.id]}
                </div>

                {/* Tags de Segmento e Localização */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-surface-dark-pill text-slate-700 dark:text-slate-300 border border-transparent dark:border-white/10">
                    <Building2 size={11} className="text-brand-blue dark:text-brand-steel" />
                    {client.sector}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100/70 dark:bg-surface-dark-pill text-slate-500 dark:text-slate-400">
                    <MapPin size={11} />
                    {client.location}
                  </span>
                </div>

                {/* Nome Oficial do Cliente */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug group-hover:text-brand-blue dark:group-hover:text-brand-steel transition-colors">
                  {client.name}
                </h3>

                {/* Descrição e Enquadramento */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {client.description}
                </p>
              </div>

              {/* Rodapé do Card com Link para Testemunho */}
              {client.testimonialId && (
                <div className="pt-5 mt-5 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    Parceria Ativa
                  </span>
                  <a
                    href="#testemunhos"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy dark:text-brand-steel hover:text-brand-primary-hover dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Ver Depoimento</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
