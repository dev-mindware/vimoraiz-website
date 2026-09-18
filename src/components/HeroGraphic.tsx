"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  MotionValue,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Calendar,
  Clock,
  LayoutGrid,
  Building2,
  Plus,
  User,
  CheckCircle2,
  ChevronDown,
  Shield,
} from "lucide-react";

interface HeroGraphicProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroGraphic({ scrollYProgress }: HeroGraphicProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // -------------------------------------------------------------------------
  // 1. SCROLL-DRIVEN PARALLAX (ALTA AMPLITUDE 3D)
  // -------------------------------------------------------------------------
  const fallbackScroll = useMotionValue(0);
  const progress = scrollYProgress || fallbackScroll;

  const yAvatar = useTransform(progress, [0, 1], [0, 55]);
  const scaleAvatar = useTransform(progress, [0, 1], [1, 1.06]);

  const yCalendar = useTransform(progress, [0, 1], [0, -85]);
  const rotateCalendar = useTransform(progress, [0, 1], [0, -6]);

  const yPrimavera = useTransform(progress, [0, 1], [0, -60]);
  const yBalancete = useTransform(progress, [0, 1], [0, 45]);

  const yGrowth = useTransform(progress, [0, 1], [0, -75]);
  const rotateGrowth = useTransform(progress, [0, 1], [0, 4]);

  const yAgt = useTransform(progress, [0, 1], [0, 70]);

  const yClock = useTransform(progress, [0, 1], [0, 95]);
  const rotateClock = useTransform(progress, [0, 1], [0, 8]);

  const yNodes = useTransform(progress, [0, 1], [0, 30]);

  // -------------------------------------------------------------------------
  // 2. INTERAÇÃO TRIDIMENSIONAL POR HOVER (3D TILT & MULTI-PLANE Z-DEPTH)
  // -------------------------------------------------------------------------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Molas físicas com amortecimento orgânico suave
  const springConfig = { damping: 25, stiffness: 220, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Rotação de perspectiva tridimensional
  const tiltRotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const tiltRotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  // Deslocamentos em eixos cruzados para realçar a separação 3D
  const avatarDepthX = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const cardsDepthX = useTransform(springX, [-0.5, 0.5], [14, -14]);

  const badgesDepthX = useTransform(springX, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleNodeClick = (nodeName: string) => {
    setActiveNode(nodeName);
    setToastMessage(`Módulo: ${nodeName} sincronizado com conformidade AGT`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-[560px] mx-auto select-none pt-2 pb-6 flex justify-center cursor-default"
    >
      {/* 3D TILT CANVAS: 540px wide x 500px tall */}
      <motion.div
        style={{
          rotateX: tiltRotateX,
          rotateY: tiltRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[540px] h-[500px]"
      >
        {/* ======================================================== */}
        {/* 1. DYNAMIC 3D POP-OUT AVATAR COM PARALLAX E DEPTH Z      */}
        {/* ======================================================== */}
        <motion.div
          style={{
            y: yAvatar,
            scale: scaleAvatar,
            x: avatarDepthX,
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[280px] h-[331px] pointer-events-none z-10"
        >
          <div className="relative w-full h-full drop-shadow-2xl">
            <Image
              src="/camarada_popout_wide.png"
              alt="Consultor Contabilístico VIMORAIZ Luanda"
              fill
              sizes="280px"
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 2. SATELLITE CARDS & BADGES COM CONTEXTO ANGOLANO        */}
        {/* ======================================================== */}

        {/* Calendar Badge (Top-Left) - Prazos Fiscais & AGT */}
        <motion.div
          style={{
            y: yCalendar,
            rotate: rotateCalendar,
            x: badgesDepthX,
            transform: "translateZ(85px)",
          }}
          className="absolute top-[75px] left-[85px] z-20 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.15 }}
            className="bg-white dark:bg-surface-dark-elevated rounded-[8px] shadow-md shadow-slate-200/80 dark:shadow-none border border-slate-100 dark:border-white/10 p-2 flex items-center justify-center hover:border-brand-blue/40 transition-colors"
          >
            <Calendar size={17} className="text-brand-navy dark:text-brand-steel stroke-[2.2]" />
          </motion.div>
        </motion.div>

        {/* Primavera ERP Pill (Mid-Left) - Software de Gestão em Angola */}
        <motion.div
          style={{
            y: yPrimavera,
            x: cardsDepthX,
            transform: "translateZ(75px)",
          }}
          className="absolute top-[135px] left-[16px] z-20 cursor-pointer"
        >
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.08 }}
            className="bg-white dark:bg-surface-dark-elevated px-3 py-1.5 rounded-[8px] shadow-xs border border-brand-blue/40 dark:border-white/10 flex items-center gap-1.5 hover:shadow-md transition-all"
          >
            <div className="w-4 h-4 rounded-full bg-brand-navy dark:bg-surface-dark-pill flex items-center justify-center text-white dark:text-brand-steel text-[9px] font-bold">
              P
            </div>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-300 tracking-tight">
              Primavera BSS
            </span>
          </motion.div>
        </motion.div>

        {/* Mini Balancete Card (Lower-Left) - Relatórios PGC & AGT */}
        <motion.div
          style={{
            y: yBalancete,
            x: cardsDepthX,
            transform: "translateZ(65px)",
          }}
          className="absolute top-[205px] left-[24px] z-20 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: -15 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-surface-dark-elevated rounded-[10px] shadow-lg shadow-slate-200/70 dark:shadow-none border border-slate-100 dark:border-white/10 p-2.5 w-[118px] space-y-2 hover:border-brand-blue/30 transition-all"
          >
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-700 dark:text-slate-300">
              <div className="w-3.5 h-3.5 rounded-[4px] bg-brand-surface dark:bg-surface-dark-deep border border-brand-border dark:border-white/15 flex items-center justify-center text-brand-navy dark:text-brand-steel">
                <LayoutGrid size={8} strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-200">Balancete PGC</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-700 dark:text-slate-300">
              <div className="w-3.5 h-3.5 rounded-[4px] bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={8} strokeWidth={2.5} />
              </div>
              <span className="text-slate-700 dark:text-slate-300">Dossiê AGT</span>
            </div>

            <div className="pt-1.5 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5">
              <div className="w-3.5 h-2.5 rounded-[3px] bg-brand-surface-subtle dark:bg-surface-dark-pill-active flex items-center justify-center" />
              <div className="h-1.5 bg-brand-mist dark:bg-surface-dark-deep rounded-[3px] flex-1" />
            </div>
            <div className="h-1 bg-slate-100 dark:bg-surface-dark-deep rounded-[3px] w-4/5" />
          </motion.div>
        </motion.div>

        {/* Growth & Tax Chart Card (Top-Right) - Balanço • PGC • IVA */}
        <motion.div
          style={{
            y: yGrowth,
            rotate: rotateGrowth,
            x: badgesDepthX,
            transform: "translateZ(90px)",
          }}
          className="absolute top-[60px] right-[20px] z-20 cursor-pointer"
        >
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ scale: 1.06 }}
            className="bg-white dark:bg-surface-dark-elevated rounded-[10px] shadow-xl shadow-slate-200/80 dark:shadow-none border border-slate-100 dark:border-white/10 overflow-hidden w-[148px] hover:border-brand-blue/30 transition-all"
          >
            <div className="bg-brand-navy dark:bg-canvas-dark-2 px-2.5 py-1.5 flex items-center justify-between text-slate-200">
              <span className="text-[9px] font-semibold tracking-tight text-slate-200">Balanço • PGC • IVA</span>
              <div className="flex items-center text-[8px] bg-white/20 dark:bg-white/10 px-1 py-0.5 rounded-[4px] text-slate-200">
                <span>Exercício</span>
                <ChevronDown size={8} className="ml-0.5" />
              </div>
            </div>

            <div className="p-2 h-15 w-full relative">
              <svg viewBox="0 0 100 45" className="w-full h-full overflow-visible">
                <path
                  d="M 0,38 Q 20,36 40,37 T 70,30 T 100,28"
                  fill="none"
                  stroke="var(--color-scrollbar-light-thumb)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className="dark:stroke-slate-700"
                />
                <path
                  d="M 0,32 Q 15,30 30,22 Q 45,28 55,14 Q 65,10 75,20 Q 85,15 100,6"
                  fill="none"
                  stroke="var(--color-brand-navy)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="dark:stroke-brand-steel"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Portal AGT Pill (Mid-Right) - Conformidade Tributária de Angola */}
        <motion.div
          style={{
            y: yAgt,
            x: cardsDepthX,
            transform: "translateZ(80px)",
          }}
          className="absolute top-[185px] right-[24px] z-20 cursor-pointer"
        >
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.08 }}
            className="bg-white dark:bg-surface-dark-elevated px-3 py-1.5 rounded-[8px] shadow-xs border border-emerald-500/40 dark:border-emerald-700/60 flex items-center gap-1.5 hover:border-emerald-600 transition-all"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[9px] font-bold">
              <Shield size={10} className="stroke-[2.5]" />
            </div>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-300 tracking-tight">
              Portal AGT
            </span>
          </motion.div>
        </motion.div>

        {/* Clock Badge (Lower-Right edge) - Cumprimento Pontual de Prazos */}
        <motion.div
          style={{
            y: yClock,
            rotate: rotateClock,
            x: badgesDepthX,
            transform: "translateZ(95px)",
          }}
          className="absolute top-[280px] right-[145px] z-20 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.18 }}
            className="bg-brand-navy dark:bg-surface-dark-elevated text-white dark:text-brand-steel p-1.5 rounded-[8px] shadow-md shadow-brand-navy/30 dark:shadow-none border dark:border-white/10 flex items-center justify-center"
          >
            <Clock size={17} className="stroke-[2.2]" />
          </motion.div>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. VISIBLE CONNECTING DOTTED LINES                       */}
        {/* ======================================================== */}
        <motion.div
          style={{
            y: yNodes,
            transform: "translateZ(20px)",
          }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 540 500"
          >
            {/* A. Straight line from bottom of circle/suit (270, 345) into Star Hub (270, 375) */}
            <path
              d="M 270,345 L 270,375"
              fill="none"
              stroke="var(--color-brand-border)"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              className="animate-dash-flow dark:stroke-white/15"
            />

            {/* B. Left connecting tree */}
            <path
              d="M 80,295 L 80,355 L 68,355 L 68,378"
              fill="none"
              stroke={activeNode === "Balancetes" ? "var(--color-brand-navy)" : "var(--color-brand-border)"}
              strokeWidth={activeNode === "Balancetes" ? "2" : "1.5"}
              strokeDasharray="4 4"
              className={activeNode === "Balancetes" ? "animate-dash-flow dark:stroke-brand-steel" : "dark:stroke-white/15"}
            />
            <path
              d="M 185,325 L 185,355 L 165,355 L 165,422"
              fill="none"
              stroke={activeNode === "Entidades" ? "var(--color-brand-navy)" : "var(--color-brand-border)"}
              strokeWidth={activeNode === "Entidades" ? "2" : "1.5"}
              strokeDasharray="4 4"
              className={activeNode === "Entidades" ? "animate-dash-flow dark:stroke-brand-steel" : "dark:stroke-white/15"}
            />
            <path
              d="M 68,355 L 185,355"
              fill="none"
              stroke="var(--color-brand-border)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="dark:stroke-white/15"
            />

            {/* C. Right connecting tree */}
            <path
              d="M 375,305 L 375,422"
              fill="none"
              stroke={activeNode === "Lançamentos" ? "var(--color-brand-navy)" : "var(--color-brand-border)"}
              strokeWidth={activeNode === "Lançamentos" ? "2" : "1.5"}
              strokeDasharray="4 4"
              className={activeNode === "Lançamentos" ? "animate-dash-flow dark:stroke-brand-steel" : "dark:stroke-white/15"}
            />
            <path
              d="M 450,220 L 450,355 L 472,355 L 472,378"
              fill="none"
              stroke={activeNode === "Consultor" ? "var(--color-brand-navy)" : "var(--color-brand-border)"}
              strokeWidth={activeNode === "Consultor" ? "2" : "1.5"}
              strokeDasharray="4 4"
              className={activeNode === "Consultor" ? "animate-dash-flow dark:stroke-brand-steel" : "dark:stroke-white/15"}
            />
            <path
              d="M 375,355 L 472,355"
              fill="none"
              stroke="var(--color-brand-border)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="dark:stroke-white/15"
            />
          </svg>

          {/* ======================================================== */}
          {/* 4. THE 5 NETWORK NODES (Contexto VIMORAIZ Angola)        */}
          {/* ======================================================== */}

          {/* NODE 1: Balancetes (Left, higher) */}
          <div className="absolute left-[68px] -translate-x-1/2 top-[378px] z-10 flex flex-col items-center pointer-events-auto">
            <motion.div
              whileHover={{ scale: 1.15 }}
              onClick={() => handleNodeClick("Balancetes")}
              className="w-6 h-6 rounded-[6px] bg-brand-navy dark:bg-surface-dark-elevated dark:border dark:border-white/10 text-white dark:text-brand-steel flex items-center justify-center shadow-xs cursor-pointer mb-1.5"
            >
              <LayoutGrid size={13} strokeWidth={2.4} />
            </motion.div>
            <motion.button
              onClick={() => handleNodeClick("Balancetes")}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-3 py-1.5 rounded-[8px] text-[11px] font-semibold tracking-tight transition-all cursor-pointer shadow-xs whitespace-nowrap ${
                activeNode === "Balancetes"
                  ? "bg-brand-surface-subtle dark:bg-surface-dark-pill-active text-brand-navy dark:text-brand-steel border border-brand-navy dark:border-brand-steel"
                  : "bg-brand-mist dark:bg-surface-dark-elevated hover:bg-brand-surface dark:hover:bg-surface-dark-hover-pill text-brand-navy dark:text-slate-300 border border-brand-border-dark dark:border-white/10"
              }`}
            >
              Balancetes
            </motion.button>
          </div>

          {/* NODE 2: Entidades (Mid-Left, lower) */}
          <div className="absolute left-[165px] -translate-x-1/2 top-[422px] z-10 flex flex-col items-center pointer-events-auto">
            <motion.div
              whileHover={{ scale: 1.15 }}
              onClick={() => handleNodeClick("Entidades")}
              className="w-6 h-6 rounded-[6px] bg-brand-navy dark:bg-surface-dark-elevated dark:border dark:border-white/10 text-white dark:text-brand-steel flex items-center justify-center shadow-xs cursor-pointer mb-1.5"
            >
              <Building2 size={13} strokeWidth={2.4} />
            </motion.div>
            <motion.button
              onClick={() => handleNodeClick("Entidades")}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-3 py-1.5 rounded-[8px] text-[11px] font-semibold tracking-tight transition-all cursor-pointer shadow-xs whitespace-nowrap ${
                activeNode === "Entidades"
                  ? "bg-brand-surface-subtle dark:bg-surface-dark-pill-active text-brand-navy dark:text-brand-steel border border-brand-navy dark:border-brand-steel"
                  : "bg-brand-mist dark:bg-surface-dark-elevated hover:bg-brand-surface dark:hover:bg-surface-dark-hover-pill text-brand-navy dark:text-slate-300 border border-brand-border-dark dark:border-white/10"
              }`}
            >
              Entidades
            </motion.button>
          </div>

          {/* NODE 3: Center Hub (VIMORAIZ Core) */}
          <div className="absolute left-[270px] -translate-x-1/2 top-[375px] z-20 flex flex-col items-center pointer-events-auto">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.12, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer group"
            >
              <div className="absolute -inset-2 bg-brand-navy/15 dark:bg-brand-steel/10 rounded-full blur-md" />

              <div className="relative w-17 h-17 sm:w-[72px] sm:h-[72px] rounded-full bg-white dark:bg-surface-dark-elevated shadow-xl shadow-brand-navy/20 dark:shadow-none border border-slate-100 dark:border-white/10 flex items-center justify-center transition-all group-hover:border-brand-navy/40 dark:group-hover:border-brand-steel/40">
                <span className="text-4xl sm:text-[42px] font-black text-brand-navy dark:text-brand-steel leading-none select-none font-serif transform translate-y-0.5">
                  *
                </span>
              </div>
            </motion.div>
          </div>

          {/* NODE 4: Lançamentos (Mid-Right, lower) */}
          <div className="absolute left-[375px] -translate-x-1/2 top-[422px] z-10 flex flex-col items-center pointer-events-auto">
            <motion.div
              whileHover={{ scale: 1.15 }}
              onClick={() => handleNodeClick("Lançamentos")}
              className="w-6 h-6 rounded-[6px] bg-brand-navy dark:bg-surface-dark-elevated dark:border dark:border-white/10 text-white dark:text-brand-steel flex items-center justify-center shadow-xs cursor-pointer mb-1.5"
            >
              <Plus size={13} strokeWidth={3} />
            </motion.div>
            <motion.button
              onClick={() => handleNodeClick("Lançamentos")}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-3 py-1.5 rounded-[8px] text-[11px] font-semibold tracking-tight transition-all cursor-pointer shadow-xs whitespace-nowrap ${
                activeNode === "Lançamentos"
                  ? "bg-brand-surface-subtle dark:bg-surface-dark-pill-active text-brand-navy dark:text-brand-steel border border-brand-navy dark:border-brand-steel"
                  : "bg-brand-mist dark:bg-surface-dark-elevated hover:bg-brand-surface dark:hover:bg-surface-dark-hover-pill text-brand-navy dark:text-slate-300 border border-brand-border-dark dark:border-white/10"
              }`}
            >
              Lançamentos
            </motion.button>
          </div>

          {/* NODE 5: Consultor (Far Right, higher) */}
          <div className="absolute left-[472px] -translate-x-1/2 top-[378px] z-10 flex flex-col items-center pointer-events-auto">
            <motion.div
              whileHover={{ scale: 1.15 }}
              onClick={() => handleNodeClick("Consultor")}
              className="w-6 h-6 rounded-[6px] bg-brand-navy dark:bg-surface-dark-elevated dark:border dark:border-white/10 text-white dark:text-brand-steel flex items-center justify-center shadow-xs cursor-pointer mb-1.5"
            >
              <User size={14} strokeWidth={2.4} />
            </motion.div>
            <motion.button
              onClick={() => handleNodeClick("Consultor")}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-3 py-1.5 rounded-[8px] text-[11px] font-semibold tracking-tight transition-all cursor-pointer shadow-xs whitespace-nowrap ${
                activeNode === "Consultor"
                  ? "bg-brand-surface-subtle dark:bg-surface-dark-pill-active text-brand-navy dark:text-brand-steel border border-brand-navy dark:border-brand-steel"
                  : "bg-brand-mist dark:bg-surface-dark-elevated hover:bg-brand-surface dark:hover:bg-surface-dark-hover-pill text-brand-navy dark:text-slate-300 border border-brand-border-dark dark:border-white/10"
              }`}
            >
              Consultor
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Feedback Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="bg-brand-slate/95 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-brand-navy">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
