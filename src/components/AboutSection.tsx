"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionSpotlight } from "./ui/SectionSpotlight";

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax fotográfico e dinâmico na fotografia da equipa
  const photoY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 1]);

  // Parallax reverso na badge flutuante de "+12 Anos de Rigor"
  const badgeFloatY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  // Parallax suave nos números em marca d'água 01 e 02
  const num1Y = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const num2Y = useTransform(scrollYProgress, [0, 1], [-10, 20]);

  // Animação da linha divisória decorativa
  const lineProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const dividerScaleY = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-24 bg-canvas-light-2 dark:bg-canvas-dark-2 relative overflow-hidden select-none transition-colors"
    >
      {/* Background Spotlight sem grade (apenas iluminação suave) */}
      <SectionSpotlight variant="subtle" grid="none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. TOPO: EYEBROW BAR (01 / SOBRE A VIMORAIZ | LUANDA · ANGOLA)             */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-slate-200/80 dark:border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-primary-hover dark:text-brand-steel"
          >
            <motion.span
              style={{ scaleX: lineProgress, transformOrigin: "left" }}
              className="w-8 h-[2px] bg-brand-primary-hover dark:bg-brand-steel rounded-full"
            />
            <span>01 &nbsp;/&nbsp; SOBRE A VIMORAIZ</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500"
          >
            LUANDA · ANGOLA
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CORPO SUPERIOR: TÍTULO + PARÁGRAFO + FOTO COM LOGÓTIPO VIMORAIZ        */}
        {/* (Foto com Parallax Fotográfico Tridimensional)                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
          {/* Coluna Esquerda: Título, Texto e Tags de Especialidades */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold text-brand-slate dark:text-slate-200 tracking-tight leading-[1.12] mb-6"
            >
              Um parceiro de confiança <br />
              para o seu negócio em Angola.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-xl"
            >
              A <strong className="text-slate-900 dark:text-slate-200 font-semibold">VIMORAIZ</strong> é uma sociedade angolana especializada em Contabilidade, Fiscalidade e Auditoria. O nosso objetivo é estabelecer relações duradouras com empresas que procuram mais do que o simples cumprimento de obrigações: procuram organização, segurança fiscal e apoio estratégico para tomar melhores decisões.
            </motion.p>

            {/* Linha Azul e Lista de Especialidades */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-primary-hover dark:text-brand-steel"
            >
              <span className="w-8 h-[2px] bg-brand-primary-hover dark:bg-brand-steel flex-shrink-0" />
              <div className="flex flex-wrap items-center gap-2">
                <span>CONTABILIDADE</span>
                <span className="text-slate-400 dark:text-slate-600">·</span>
                <span>FISCALIDADE</span>
                <span className="text-slate-400 dark:text-slate-600">·</span>
                <span>AUDITORIA</span>
                <span className="text-slate-400 dark:text-slate-600">·</span>
                <span>CONSULTORIA</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna Direita: Fotografia Oficial do Escritório VIMORAIZ com Parallax */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              style={{ y: photoY, scale: photoScale }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full aspect-[414/252] rounded-xl overflow-hidden shadow-xl shadow-slate-200/80 dark:shadow-none border border-slate-200/70 dark:border-white/10 group"
            >
              <Image
                src="/images/about-vimoraiz-office.png"
                alt="Profissional da VIMORAIZ em análise contabilística no escritório de Luanda"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105 dark:brightness-[0.92] dark:contrast-[1.05]"
                priority
              />
            </motion.div>

            {/* Selo Executivo Flutuante em Eixo Oposto (Parallax 3D) */}
            <motion.div
              style={{ y: badgeFloatY, rotate: badgeRotate }}
              className="absolute -bottom-6 -left-4 sm:-left-6 z-20 hidden sm:flex items-center gap-3 bg-canvas-light-1/95 dark:bg-surface-dark-elevated/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-300/40 dark:shadow-none"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-navy dark:bg-surface-dark-card-active text-white dark:text-brand-steel flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
                +12
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold text-brand-navy dark:text-brand-steel uppercase tracking-wider block">
                  Anos de Rigor
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block">
                  Excelência Contabilística em Angola
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BLOCO MISSÃO & VISÃO COM NÚMEROS 01 E 02 EM MARCA D'ÁGUA               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-12 pb-16 border-t border-slate-200/80 dark:border-white/10 relative">
          {/* Divisória Vertical Animada no Scroll */}
          <motion.div
            style={{ scaleY: dividerScaleY, transformOrigin: "top" }}
            className="hidden md:block absolute top-12 bottom-16 left-1/2 w-[1.5px] bg-brand-primary-hover/20 dark:bg-white/10 -translate-x-1/2"
          />

          {/* Coluna 01: MISSÃO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-6 lg:gap-8"
          >
            {/* Número em Marca d'Água 01 com Parallax */}
            <motion.span
              style={{ y: num1Y }}
              className="text-5xl sm:text-6xl font-bold font-mono text-brand-border/70 dark:text-white/10 select-none flex-shrink-0 leading-none"
            >
              01
            </motion.span>

            {/* Conteúdo da Missão */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary-hover dark:text-brand-steel block">
                MISSÃO
              </span>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-brand-slate dark:text-slate-200 leading-snug">
                Prestar serviços de Contabilidade, Fiscalidade e Auditoria com rigor, profissionalismo e responsabilidade.
              </p>
              {/* Linha azul sublinhada */}
              <div className="pt-2">
                <span className="block w-8 h-[2.5px] bg-brand-primary-hover dark:bg-brand-steel" />
              </div>
            </div>
          </motion.div>

          {/* Coluna 02: VISÃO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start gap-6 lg:gap-8"
          >
            {/* Número em Marca d'Água 02 com Parallax */}
            <motion.span
              style={{ y: num2Y }}
              className="text-5xl sm:text-6xl font-bold font-mono text-brand-border/70 dark:text-white/10 select-none flex-shrink-0 leading-none"
            >
              02
            </motion.span>

            {/* Conteúdo da Visão */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary-hover dark:text-brand-steel block">
                VISÃO
              </span>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-brand-slate dark:text-slate-200 leading-snug">
                Ser uma empresa de referência em Angola nas áreas de Contabilidade, Fiscalidade e Auditoria.
              </p>
              {/* Linha azul sublinhada */}
              <div className="pt-2">
                <span className="block w-8 h-[2.5px] bg-brand-primary-hover dark:bg-brand-steel" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
