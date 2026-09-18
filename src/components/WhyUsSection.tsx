"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Shield, Users, MessageSquare, Sliders, Cpu, Compass, ArrowRight } from "lucide-react";
import { companyData } from "@/data/companyData";
import { SectionSpotlight } from "@/components/ui/SectionSpotlight";

const pillarIcons: Record<string, React.ElementType> = {
  Shield,
  Users,
  MessageSquare,
  Sliders,
  Cpu,
  Compass
};

// Componente para contador numérico animado
const CounterNumber: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const current = start + (value - start) * easeProgress;

      setCount(value % 1 !== 0 ? Math.round(current * 10) / 10 : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
};

export const WhyUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax escalonado arrojado por colunas nos 6 pilares
  const col1Y = useTransform(scrollYProgress, [0.1, 0.7], [35, -15]);
  const col2Y = useTransform(scrollYProgress, [0.15, 0.75], [55, -25]);
  const col3Y = useTransform(scrollYProgress, [0.2, 0.8], [75, -35]);

  // Elevação e aproximação tridimensional do painel de KPIs
  const kpiScale = useTransform(scrollYProgress, [0.3, 0.6], [0.96, 1.01]);
  const kpiY = useTransform(scrollYProgress, [0.3, 0.85], [45, -25]);

  // Agrupamento em 3 colunas para o parallax diferencial
  const col1Pillars = [companyData.pillars[0], companyData.pillars[3]];
  const col2Pillars = [companyData.pillars[1], companyData.pillars[4]];
  const col3Pillars = [companyData.pillars[2], companyData.pillars[5]];

  return (
    <section
      ref={sectionRef}
      id="por-que"
      className="py-24 bg-canvas-light-1 dark:bg-canvas-dark-1 text-brand-slate dark:text-slate-200 relative overflow-hidden select-none border-t border-slate-100 dark:border-white/10 transition-colors"
    >
      {/* Background Spotlight sem grade (apenas iluminação suave) */}
      <SectionSpotlight variant="centered" grid="none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. TOPO: EYEBROW BAR (03 / DIFERENCIAIS ESTRATÉGICOS | VIMORAIZ · ANGOLA) */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-slate-100 dark:border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-primary-hover dark:text-brand-steel"
          >
            <span className="w-8 h-[2px] bg-brand-primary-hover dark:bg-brand-steel rounded-full" />
            <span>03 &nbsp;/&nbsp; DIFERENCIAIS ESTRATÉGICOS</span>
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
        {/* 2. CABEÇALHO EDITORIAL                                                    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-brand-slate dark:text-slate-200"
            >
              Mais do que cumprir obrigações. <br />
              <span className="text-brand-navy dark:text-brand-steel">Apoiamos decisões seguras.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
            >
              A contabilidade não deve ser apenas uma obrigação legal perante o Estado. Quando corretamente estruturada, é a ferramenta mais poderosa para controlar custos, projetar lucros e expandir a sua empresa em Angola.
            </motion.p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. OS 6 PILARES ESTRATÉGICOS COM PARALLAX POR COLUNA                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* Coluna 1 */}
          <motion.div style={{ y: col1Y }} className="space-y-6">
            {col1Pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.iconName] || Shield;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-xl bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-canvas-light-1 dark:bg-surface-dark-card-active border border-slate-200/80 dark:border-white/10 text-brand-navy dark:text-brand-steel flex items-center justify-center mb-5 shadow-xs">
                      <Icon size={20} className="stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-brand-slate dark:text-slate-200 mb-2.5 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Coluna 2 */}
          <motion.div style={{ y: col2Y }} className="space-y-6">
            {col2Pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.iconName] || Shield;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-xl bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-canvas-light-1 dark:bg-surface-dark-card-active border border-slate-200/80 dark:border-white/10 text-brand-navy dark:text-brand-steel flex items-center justify-center mb-5 shadow-xs">
                      <Icon size={20} className="stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-brand-slate dark:text-slate-200 mb-2.5 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Coluna 3 */}
          <motion.div style={{ y: col3Y }} className="space-y-6">
            {col3Pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.iconName] || Shield;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-xl bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-canvas-light-1 dark:bg-surface-dark-card-active border border-slate-200/80 dark:border-white/10 text-brand-navy dark:text-brand-steel flex items-center justify-center mb-5 shadow-xs">
                      <Icon size={20} className="stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-brand-slate dark:text-slate-200 mb-2.5 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 4. PAINEL EXECUTIVO DE MÉTRICAS / KPIS COM ELEVAÇÃO PARALLAX             */}
        {/* ========================================================================= */}
        <motion.div
          style={{ scale: kpiScale, y: kpiY }}
          className="p-8 sm:p-12 rounded-xl bg-brand-navy-dark dark:bg-surface-dark-deep text-white border border-brand-navy-border dark:border-white/10 shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10 dark:divide-white/10">
            {companyData.metrics.map((metric, i) => (
              <div key={metric.label} className={`text-center ${i > 0 ? "pt-6 lg:pt-0 lg:px-6" : "lg:pr-6"}`}>
                <div className="text-4xl sm:text-5xl font-extrabold text-white dark:text-slate-200 tracking-tight mb-2 font-mono">
                  <CounterNumber value={metric.value} suffix={metric.suffix} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                  {metric.label}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 max-w-[200px] mx-auto leading-snug">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 5. CTA INFORMATIVO E BOTÃO EXECUTIVO EM AZUL CORPORATIVO (SEM PRETO)      */}
        {/* ========================================================================= */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
            O seu negócio tem desafios específicos. O nosso trabalho começa por compreendê-los.
          </p>
          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-brand-navy hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <span>Falar com um Consultor</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
