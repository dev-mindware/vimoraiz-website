"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, MessageCircle, FileText } from "lucide-react";
import HeroGraphic from "./HeroGraphic";
import { companyData } from "@/data/companyData";
import { SectionSpotlight } from "./ui/SectionSpotlight";

interface HeroProps {
  onOpenDemo?: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax arrojado e altamente chamativo na coluna de texto e CTAs
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const ySubheadline = useTransform(scrollYProgress, [0, 1], [0, 105]);
  const yCTA = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative overflow-hidden bg-canvas-light-1 dark:bg-canvas-dark-1 pt-6 pb-16 lg:pt-10 lg:pb-24 transition-colors"
    >
      {/* Background Spotlight & 72px Blueprint Grid (Portado de mindware-lp-org) */}
      <SectionSpotlight variant="hero" grid="hero" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ======================================================== */}
          {/* LEFT COLUMN: HEADLINE, SUBHEADLINE, COPY & CTA BUTTONS   */}
          {/* Contexto Oficial VIMORAIZ — Sem badge acima do título    */}
          {/* ======================================================== */}
          <motion.div
            style={{ opacity: opacityHero }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Primary Headline Oficial VIMORAIZ */}
            <motion.h1
              style={{ y: yHeadline }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-brand-slate dark:text-slate-200 tracking-[-0.035em] leading-[1.12]"
            >
              Contabilidade e Fiscalidade <br className="hidden sm:inline" />
              para empresas que querem <br className="hidden sm:inline" />
              <span className="text-brand-navy dark:text-brand-steel">crescer com segurança.</span>
            </motion.h1>

            {/* Subheadline Oficial */}
            <motion.h2
              style={{ y: ySubheadline }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl font-medium text-brand-blue dark:text-slate-400 tracking-tight mt-5"
            >
              Rigor, confiança e proximidade para o seu negócio
            </motion.h2>

            {/* Explanatory Body Copy Oficial VIMORAIZ */}
            <motion.p
              style={{ y: ySubheadline }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-[17px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed mt-4 max-w-xl"
            >
              Apoiamos empresas na organização contabilística, cumprimento fiscal perante a AGT, auditoria independente e tomada de decisões estratégicas, com soluções profissionais adaptadas à sua dimensão.
            </motion.p>

            {/* CTA Buttons - Azul Corporativo (Sem preto) */}
            <motion.div
              style={{ y: yCTA }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#contacto"
                className="group relative inline-flex items-center justify-center gap-3 bg-brand-navy hover:bg-brand-primary-hover text-white px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 cursor-pointer shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1.5 text-slate-300"
                />
              </a>

              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-2 hover:bg-slate-50 dark:hover:bg-surface-dark-hover text-brand-navy dark:text-slate-300 font-semibold text-sm border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:border-brand-blue dark:hover:border-white/20 active:scale-[0.98]"
              >
                <MessageCircle size={18} className="text-emerald-600 dark:text-emerald-400" />
                <span>Falar com Consultor</span>
              </a>
            </motion.div>

            {/* Trust Badges under CTA */}
            <motion.div
              style={{ y: yCTA }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-500" />
                <span>Conformidade AGT Garantida</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-brand-blue dark:text-brand-steel" />
                <span>Auditoria &amp; Diagnóstico</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText size={15} className="text-brand-blue dark:text-brand-steel" />
                <span>Relatórios de Gestão</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: INTERACTIVE GRAPHIC & 3D POP-OUT AVATAR     */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <HeroGraphic scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
