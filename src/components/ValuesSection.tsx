"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Handshake,
  User,
  Lightbulb,
  FileText,
  Lock,
  Award,
  Users
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { VimoraizWatermark } from "@/components/ui/VimoraizWatermark";
import { SectionSpotlight } from "@/components/ui/SectionSpotlight";

// Mapeamento exato de ícones para os 10 valores conforme referência visual
const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Target,
  Handshake,
  User,
  Lightbulb,
  FileText,
  Lock,
  Award,
  Users
};

export const ValuesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>("01");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Motions dinâmicos no scroll em planos cruzados (Efeito 3D Multi-Plano)
  const watermarkY = useTransform(scrollYProgress, [0, 1], [-45, 65]);
  const watermarkRotate = useTransform(scrollYProgress, [0, 1], [-4, 5]);
  const watermarkScale = useTransform(scrollYProgress, [0.1, 0.6], [0.95, 1.05]);
  const watermarkOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.04, 0.09, 0.04]);
  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const row1Y = useTransform(scrollYProgress, [0.1, 0.8], [25, -20]);
  const row2Y = useTransform(scrollYProgress, [0.1, 0.8], [-15, 25]);

  return (
    <section
      ref={sectionRef}
      id="valores"
      className="py-24 bg-canvas-light-1 dark:bg-canvas-dark-1 relative overflow-hidden select-none border-t border-slate-100 dark:border-white/10 transition-colors"
    >
      {/* Background Spotlight sem grade (apenas iluminação suave) */}
      <SectionSpotlight variant="centered" grid="none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. TOPO: EYEBROW BAR EDITORIAL                                            */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-slate-100 dark:border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-primary-hover dark:text-brand-steel"
          >
            <motion.span
              style={{ scaleX: lineScaleX, transformOrigin: "left" }}
              className="w-8 h-[2px] bg-brand-primary-hover dark:bg-brand-steel rounded-full"
            />
            <span>02 &nbsp;/&nbsp; PILARES DE CONDUTA</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500"
          >
            VIMORAIZ · ANGOLA
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CABEÇALHO DOS 10 VALORES E MARCA D'ÁGUA COM PARALLAX                   */}
        {/* ========================================================================= */}
        <div className="relative pt-4 pb-4">
          {/* Marca d'água VIMORAIZ oficial flutuando no scroll */}
          <motion.div
            style={{
              y: watermarkY,
              rotate: watermarkRotate,
              scale: watermarkScale,
              opacity: watermarkOpacity,
            }}
            className="absolute -top-10 sm:-top-14 -right-4 sm:-right-8 pointer-events-none z-0 dark:opacity-20"
          >
            <VimoraizWatermark className="relative" />
          </motion.div>

          {/* Cabeçalho dos Valores */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10 sm:mb-12 relative z-10">
            <div>
              {/* Título Principal em 2 linhas */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-slate dark:text-slate-200 tracking-tight leading-[1.12] mb-4"
              >
                Os Nossos 10 Valores <br />
                Fundamentais
              </motion.h3>

              {/* Subtítulo Descritivo */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg"
              >
                São os princípios que orientam o nosso trabalho e <br className="hidden sm:inline" />
                fortalecem a relação com os nossos clientes.
              </motion.p>
            </div>
          </div>

          {/* Grid de 10 Cards em 5 Colunas x 2 Linhas com Desfasamento em Parallax */}
          <div
            className="relative z-10 space-y-4 lg:space-y-5"
            onMouseLeave={() => setActiveCard("01")}
          >
            {/* Linha 1 (Cards 01 a 05) */}
            <motion.div
              style={{ y: row1Y }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5"
            >
              {companyData.values.slice(0, 5).map((val, idx) => {
                const Icon = iconMap[val.iconName] || ShieldCheck;
                const isActive = activeCard === val.number;

                return (
                  <SpotlightCard
                    key={val.number}
                    number={val.number}
                    title={val.title}
                    description={val.description}
                    Icon={Icon}
                    isActive={isActive}
                    onHover={(id) => {
                      if (id) setActiveCard(id);
                    }}
                    index={idx}
                  />
                );
              })}
            </motion.div>

            {/* Linha 2 (Cards 06 a 10) com Segundo Escalão de Parallax */}
            <motion.div
              style={{ y: row2Y }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5"
            >
              {companyData.values.slice(5, 10).map((val, idx) => {
                const Icon = iconMap[val.iconName] || ShieldCheck;
                const isActive = activeCard === val.number;

                return (
                  <SpotlightCard
                    key={val.number}
                    number={val.number}
                    title={val.title}
                    description={val.description}
                    Icon={Icon}
                    isActive={isActive}
                    onHover={(id) => {
                      if (id) setActiveCard(id);
                    }}
                    index={idx + 5}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
