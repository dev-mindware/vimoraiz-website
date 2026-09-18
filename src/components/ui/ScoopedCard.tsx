"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "@/types";

interface ScoopedCardProps {
  service: ServiceItem;
  index: number;
  onSelect: (service: ServiceItem) => void;
}

export const ScoopedCard: React.FC<ScoopedCardProps> = ({ service, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-testid="service-card"
      data-service-id={service.id}
      onClick={() => onSelect(service)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="service-card group relative flex-shrink-0 w-[260px] h-[340px] cursor-pointer select-none transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Corpo Principal do Card com Bordas Arredondadas Reduzidas */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 border border-transparent dark:border-white/10 shadow-md group-hover:shadow-xl group-hover:shadow-brand-navy/20 dark:group-hover:shadow-black/60 transition-all">
        {/* Imagem de Fundo com Escala no Hover */}
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="260px"
            className="object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:brightness-95 dark:brightness-[0.82] dark:group-hover:brightness-90 transition-all duration-500"
          />
        </div>

        {/* Sobreposição Escura Sólida (sem gradientes) para Leitura de Texto */}
        <div className="absolute inset-0 bg-black/55 dark:bg-black/65" />

        {/* Tag de Categoria Superior */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/60 dark:bg-black/80 text-white/90 border border-white/10">
            {service.category}
          </span>
        </div>

        {/* Título do Serviço na Base Esquerda */}
        <div className="absolute bottom-4 left-4 right-16 z-10">
          <span className="block text-xs font-bold tracking-wider uppercase mb-1 text-brand-border dark:text-brand-steel">
            {service.number}
          </span>
          <h3 className="text-sm font-bold leading-snug tracking-tight text-white transition-colors">
            {service.title}
          </h3>
        </div>
      </div>

      {/* RECORTE DO CANTO INFERIOR DIREITO (SCOOPED CORNER) COM O BOTÃO ↗ */}
      {/* Fundo do corte ajustado para tokens centralizados de canvas-light-2 e canvas-dark-2 */}
      <div className="absolute bottom-0 right-0 w-[58px] h-[58px] z-20 pointer-events-none">
        {/* Fundo de corte que casa com a cor da secção */}
        <div className="absolute inset-0 bg-canvas-light-2 dark:bg-canvas-dark-2 rounded-tl-[22px] transition-colors" />

        {/* Inverted fillet superior (arredondamento côncavo superior) */}
        <svg
          className="absolute -top-[20px] right-0 w-[20px] h-[20px] pointer-events-none text-canvas-light-2 dark:text-canvas-dark-2 fill-current transition-colors"
          viewBox="0 0 20 20"
        >
          <path d="M 20 20 A 20 20 0 0 0 0 0 L 20 0 Z" />
        </svg>

        {/* Inverted fillet esquerdo (arredondamento côncavo esquerdo) */}
        <svg
          className="absolute bottom-0 -left-[20px] w-[20px] h-[20px] pointer-events-none text-canvas-light-2 dark:text-canvas-dark-2 fill-current transition-colors"
          viewBox="0 0 20 20"
        >
          <path d="M 20 20 A 20 20 0 0 0 0 0 L 20 0 Z" />
        </svg>

        {/* O Botão Circular de Ação em Azul Corporativo VIMORAIZ (Sem amarelo) */}
        <div className="absolute bottom-1 right-1 w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all duration-300 shadow-sm bg-brand-navy text-white group-hover:bg-brand-primary-hover group-hover:scale-105">
          <ArrowUpRight
            size={22}
            className={`stroke-[2.4] transition-transform duration-300 ${
              isHovered ? "rotate-45" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
