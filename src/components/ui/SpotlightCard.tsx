"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSpotlight } from "@/hooks/useSpotlight";

interface SpotlightCardProps {
  number: string;
  title: string;
  description: string;
  Icon: React.ElementType;
  isActive?: boolean;
  onHover?: (id: string | null) => void;
  index: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  number,
  title,
  description,
  Icon,
  isActive = false,
  onHover,
  index
}) => {
  const { isHovered, spotlightProps } = useSpotlight();
  const isDark = isActive || isHovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      {...spotlightProps}
      onMouseEnter={() => {
        spotlightProps.onMouseEnter();
        if (onHover) onHover(number);
      }}
      onMouseLeave={() => {
        spotlightProps.onMouseLeave();
        if (onHover) onHover(null);
      }}
      className={`group relative p-6 sm:p-7 rounded-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden min-h-[250px] sm:min-h-[260px] ${
        isDark
          ? "bg-brand-navy-card dark:bg-surface-dark-card-active border border-brand-navy-border dark:border-white/20 shadow-xl shadow-brand-navy-card/25 dark:shadow-black/30 -translate-y-1 z-10"
          : "bg-canvas-light-1 dark:bg-canvas-dark-2 border border-slate-100 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200 dark:hover:border-white/20"
      }`}
    >
      {/* Top Row: Squircle Badge (Left) + Number (Right) */}
      <div className="flex items-center justify-between relative z-10 mb-6">
        <div
          className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            isDark
              ? "bg-brand-navy-badge dark:bg-surface-dark-pill text-white dark:text-brand-steel border border-white/15 dark:border-white/15 shadow-sm"
              : "bg-brand-mist dark:bg-surface-dark-pill text-brand-slate dark:text-brand-steel border border-slate-100/60 dark:border-white/10"
          }`}
        >
          <Icon className="w-5 h-5" strokeWidth={1.8} />
        </div>

        <span
          className={`text-xs font-mono font-medium transition-colors duration-300 ${
            isDark ? "text-slate-400" : "text-slate-400 dark:text-slate-500"
          }`}
        >
          {number}
        </span>
      </div>

      {/* Middle Content: Title + Description */}
      <div className="relative z-10 flex-1 flex flex-col justify-start">
        <h4
          className={`text-base font-bold tracking-tight mb-2.5 transition-colors duration-300 ${
            isDark ? "text-white dark:text-slate-200" : "text-brand-slate dark:text-slate-200"
          }`}
        >
          {title}
        </h4>

        <p
          className={`text-xs leading-relaxed font-normal transition-colors duration-300 ${
            isDark ? "text-slate-300 dark:text-slate-400" : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Bottom Row: Left-aligned Arrow */}
      <div className="relative z-10 pt-5">
        <ArrowRight
          className={`w-4 h-4 transition-all duration-300 ${
            isDark
              ? "text-white/90 dark:text-brand-steel translate-x-0.5"
              : "text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-brand-steel group-hover:translate-x-1"
          }`}
        />
      </div>
    </motion.div>
  );
};
