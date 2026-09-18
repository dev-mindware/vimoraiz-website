"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData";
import { useSinusoidalWave, getSinusoidalY } from "@/hooks/useSinusoidalWave";
import { WavePath } from "@/components/ui/WavePath";
import { SectionSpotlight } from "@/components/ui/SectionSpotlight";

export const TestimonialsWave: React.FC = () => {
  const total = testimonialsData.length;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax suave da onda senoidal durante o scroll
  const waveY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const {
    activeIndex,
    isPausedAtCenter,
    transitionProgress,
    setIsHovered,
    goToNext,
    goToPrev,
    goToIndex,
    slots,
    dots
  } = useSinusoidalWave({
    totalItems: total,
    pauseDuration: 2200,
    transitionDuration: 900
  });

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="testemunhos"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-24 bg-canvas-light-2 dark:bg-canvas-dark-2 relative overflow-hidden select-none border-t border-slate-200/70 dark:border-white/10"
    >
      {/* Background Spotlight sem grade (apenas iluminação suave) */}
      <SectionSpotlight variant="subtle" grid="none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================================= */}
        {/* 1. CABEÇALHO CENTRAL IDÊNTICO À IMAGEM DE REFERÊNCIA 1                    */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-brand-slate dark:text-slate-200 tracking-tight mb-4"
          >
            O Que Dizem os Nossos Clientes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6"
          >
            Histórias reais de parceiros que confiam a sua organização fiscal e contabilística à VIMORAIZ. Veja como os nossos serviços transformaram as suas empresas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-brand-navy hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm cursor-pointer active:scale-[0.98]"
            >
              Agendar Reunião
            </a>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ONDA SENOIDAL COM FLUTUAÇÃO EM PARALLAX NO SCROLL                      */}
        {/* ========================================================================= */}
        <motion.div
          style={{ y: waveY }}
          className="relative w-full max-w-[1100px] mx-auto h-[320px] flex items-center justify-center"
        >
          {/* SVG Reutilizável com a Curva Senoidal e os 7 Nós */}
          <WavePath dots={dots} />

          {/* Renderização dos 7 Avatares com Interpolação Matemática sobre a Linha */}
          <div className="absolute inset-0 w-full h-full">
            {slots.map((baseSlot, slotIndex) => {
              const dataIndex = (activeIndex + slotIndex - 3 + total * 10) % total;
              const item = testimonialsData[dataIndex];
              const isCenterSlot = slotIndex === 3;

              let currentX = baseSlot.x;
              let currentSize = baseSlot.size;
              let opacity = 1;

              if (transitionProgress !== 0) {
                const progressAbs = Math.abs(transitionProgress);

                if (transitionProgress > 0) {
                  if (slotIndex === 0) {
                    currentX = baseSlot.x + (0 - baseSlot.x) * progressAbs;
                    currentSize = baseSlot.size + (35 - baseSlot.size) * progressAbs;
                    opacity = Math.max(0, 1 - progressAbs * 1.5);
                  } else {
                    const prevSlot = slots[slotIndex - 1];
                    currentX = baseSlot.x + (prevSlot.x - baseSlot.x) * progressAbs;
                    currentSize = baseSlot.size + (prevSlot.size - baseSlot.size) * progressAbs;
                  }
                } else {
                  if (slotIndex === slots.length - 1) {
                    currentX = baseSlot.x + (1280 - baseSlot.x) * progressAbs;
                    currentSize = baseSlot.size + (35 - baseSlot.size) * progressAbs;
                    opacity = Math.max(0, 1 - progressAbs * 1.5);
                  } else {
                    const nextSlot = slots[slotIndex + 1];
                    currentX = baseSlot.x + (nextSlot.x - baseSlot.x) * progressAbs;
                    currentSize = baseSlot.size + (nextSlot.size - baseSlot.size) * progressAbs;
                  }
                }
              }

              const currentY = getSinusoidalY(currentX);

              return (
                <div
                  key={`${slotIndex}-${item.id}`}
                  onClick={() => goToIndex(dataIndex)}
                  style={{
                    left: `${(currentX / 1280) * 100}%`,
                    top: `${(currentY / 320) * 100}%`,
                    opacity,
                    transform: "translate(-50%, -50%)"
                  }}
                  className="absolute cursor-pointer group z-10"
                >
                  <div className="relative flex items-center justify-center">
                    {/* HALO DUPLO NO AVATAR CENTRAL */}
                    {isCenterSlot && isPausedAtCenter && (
                      <div className="absolute -inset-3.5 rounded-full border border-dashed border-testimonial-crimson/60 animate-pulse-subtle pointer-events-none" />
                    )}

                    {/* Container Circular da Foto */}
                    <div
                      style={{
                        width: currentSize,
                        height: currentSize,
                        borderColor: isCenterSlot ? "var(--color-testimonial-crimson)" : item.ringColor
                      }}
                      className={`relative rounded-full overflow-hidden border-2 shadow-md dark:shadow-black/50 group-hover:scale-110 transition-all duration-300 ${
                        isCenterSlot ? "ring-2 ring-red-100 dark:ring-red-950 ring-offset-2 dark:ring-offset-canvas-dark-2" : ""
                      }`}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="110px"
                        className="object-cover dark:brightness-95"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. DEPOIMENTO REVELADO COM CONTROLES < E >                                */}
        {/* ========================================================================= */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
          {/* Seta Esquerda < */}
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 bg-canvas-light-1 dark:bg-surface-dark-elevated shadow-xs flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-surface-dark-hover hover:border-slate-300 dark:hover:border-white/20 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Card Central com Depoimento Revelado */}
          <div className="flex-1 text-center min-h-[120px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-2 max-w-2xl"
              >
                {/* Estrelas */}
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(currentTestimonial.stars)].map((_, i) => (
                    <Star key={i} size={15} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                {/* Autor & Empresa */}
                <div className="pt-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200">
                    {currentTestimonial.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">
                    {currentTestimonial.role} • <strong className="text-brand-navy dark:text-brand-steel font-semibold">{currentTestimonial.company}</strong>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Seta Direita > */}
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 bg-canvas-light-1 dark:bg-surface-dark-elevated shadow-xs flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-surface-dark-hover hover:border-slate-300 dark:hover:border-white/20 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
