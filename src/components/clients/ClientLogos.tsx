"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

// 1. AAI - Associação Angolana de Internet
export const ClientLogoAAI: React.FC<LogoProps> = ({ className = "h-14" }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-auto max-w-full`}
      aria-label="Logótipo Associação Angolana de Internet"
    >
      {/* Tronco Central / Circuito Amarelo (Ouro) */}
      <g stroke="#EAB308" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M140 120 V50" />
        <path d="M140 75 L160 45" />
        <path d="M160 45 V25" />
        <path d="M140 95 L120 70 V35" />
        <circle cx="140" cy="22" r="5" fill="#EAB308" stroke="none" />
        <circle cx="160" cy="22" r="5" fill="#EAB308" stroke="none" />
        <circle cx="120" cy="30" r="5" fill="#EAB308" stroke="none" />
        <circle cx="148" cy="58" r="4" fill="#EAB308" stroke="none" />
      </g>

      {/* Ramo Esquerdo / Circuito Preto (Preto da Bandeira - Adapta para Dark) */}
      <g className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M125 120 V95 L95 65" />
        <path d="M95 65 V40 L70 20" />
        <path d="M95 65 L70 90 L50 75" />
        <path d="M70 90 V110" />
        <circle cx="70" cy="18" r="5" className="fill-slate-900 dark:fill-slate-100" stroke="none" />
        <circle cx="50" cy="72" r="5" className="fill-slate-900 dark:fill-slate-100" stroke="none" />
        <circle cx="70" cy="112" r="5" className="fill-slate-900 dark:fill-slate-100" stroke="none" />
        <circle cx="95" cy="36" r="4.5" className="fill-slate-900 dark:fill-slate-100" stroke="none" />
      </g>

      {/* Ramo Direito / Circuito Vermelho (Vermelho da Bandeira) */}
      <g stroke="#DC2626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M155 120 V95 L185 65" />
        <path d="M185 65 V40 L210 20" />
        <path d="M185 65 L210 90 L230 75" />
        <path d="M210 90 V110" />
        <circle cx="210" cy="18" r="5" fill="#DC2626" stroke="none" />
        <circle cx="230" cy="72" r="5" fill="#DC2626" stroke="none" />
        <circle cx="210" cy="112" r="5" fill="#DC2626" stroke="none" />
        <circle cx="185" cy="36" r="4.5" fill="#DC2626" stroke="none" />
      </g>

      {/* Linha de Base */}
      <line x1="90" y1="124" x2="190" y2="124" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="5" strokeLinecap="round" />

      {/* Tipografia: AAI */}
      <text
        x="140"
        y="162"
        textAnchor="middle"
        className="fill-slate-900 dark:fill-white font-extrabold tracking-[0.25em]"
        style={{ fontSize: "36px", fontFamily: "var(--font-heading), sans-serif" }}
      >
        AAI
      </text>

      {/* Subtítulo: Associação Angolana de Internet */}
      <text
        x="140"
        y="184"
        textAnchor="middle"
        className="fill-slate-600 dark:fill-slate-400 font-medium tracking-tight"
        style={{ fontSize: "11px", fontFamily: "var(--font-sans), sans-serif" }}
      >
        Associação Angolana de Internet
      </text>
    </svg>
  );
};

// 2. ADHEPA - Comércio e Prestação de Serviços, Lda.
export const ClientLogoAdhepa: React.FC<LogoProps> = ({ className = "h-14" }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-auto max-w-full`}
      aria-label="Logótipo ADHEPA"
    >
      <defs>
        <linearGradient id="adhepaCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Globo Elíptico 3D Pontilhado */}
      <g transform="translate(140, 68) scale(0.95)">
        {/* Hemisfério Superior Esquerdo (Ciano / Azul Celeste) */}
        <ellipse cx="-35" cy="-22" rx="4" ry="3.5" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="-20" cy="-26" rx="4.5" ry="4" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="-3" cy="-28" rx="5" ry="4.5" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="14" cy="-26" rx="4.5" ry="4" fill="url(#adhepaCyanGrad)" />

        <ellipse cx="-42" cy="-10" rx="4.5" ry="4" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="-26" cy="-12" rx="5" ry="4.5" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="-8" cy="-14" rx="5.5" ry="5" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="10" cy="-13" rx="5" ry="4.5" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="28" cy="-9" rx="4.5" ry="4" fill="url(#adhepaCyanGrad)" />

        <ellipse cx="-45" cy="4" rx="4" ry="3.5" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="-28" cy="2" rx="5" ry="4.5" fill="url(#adhepaCyanGrad)" />
        <ellipse cx="-10" cy="1" rx="5.5" ry="5" fill="url(#adhepaCyanGrad)" />

        {/* Faixa Central Suave e Hemisfério Inferior Direito (Pontos Escuros / Marinho) */}
        <ellipse cx="8" cy="2" rx="5.5" ry="5" className="fill-slate-800 dark:fill-slate-300" />
        <ellipse cx="28" cy="5" rx="5" ry="4.5" className="fill-slate-800 dark:fill-slate-300" />
        <ellipse cx="44" cy="9" rx="4.5" ry="4" className="fill-slate-800 dark:fill-slate-300" />

        <ellipse cx="-22" cy="16" rx="4.5" ry="4" className="fill-slate-800 dark:fill-slate-300" />
        <ellipse cx="-4" cy="16" rx="5.5" ry="5" className="fill-slate-800 dark:fill-slate-300" />
        <ellipse cx="15" cy="17" rx="5.5" ry="5" className="fill-slate-800 dark:fill-slate-300" />
        <ellipse cx="34" cy="19" rx="5" ry="4.5" className="fill-slate-800 dark:fill-slate-300" />

        <ellipse cx="-12" cy="28" rx="4" ry="3.5" className="fill-slate-800 dark:fill-slate-300" />
        <ellipse cx="4" cy="29" rx="4.5" ry="4" className="fill-slate-800 dark:fill-slate-300" />
        <ellipse cx="22" cy="28" rx="4" ry="3.5" className="fill-slate-800 dark:fill-slate-300" />
      </g>

      {/* Tipografia Futurista / Geométrica: ADHEPA */}
      <text
        x="140"
        y="152"
        textAnchor="middle"
        className="fill-slate-900 dark:fill-white font-extrabold tracking-[0.28em]"
        style={{ fontSize: "28px", fontFamily: "var(--font-heading), sans-serif" }}
      >
        ADHEPA
      </text>

      {/* Subtítulo Estilizado: Comércio de Prestação de Serviços, Lda. */}
      <text
        x="140"
        y="174"
        textAnchor="middle"
        className="fill-slate-600 dark:fill-slate-400 font-medium italic tracking-normal"
        style={{ fontSize: "11px", fontFamily: "Georgia, serif" }}
      >
        Comércio de Prestação de Serviços, Lda.
      </text>
    </svg>
  );
};

// 3. NF & F LDA - Natércia Ferreira & Filhos (Ambriz - Bengo)
export const ClientLogoNFF: React.FC<LogoProps> = ({ className = "h-14" }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-auto max-w-full`}
      aria-label="Logótipo NF & F LDA"
    >
      <g transform="translate(140, 100)">
        {/* Anéis Elípticos Concêntricos Externos */}
        <ellipse cx="0" cy="0" rx="120" ry="72" stroke="#4A8537" strokeWidth="2.2" opacity="0.45" fill="none" />
        <ellipse cx="0" cy="0" rx="108" ry="64" stroke="#4A8537" strokeWidth="2.5" opacity="0.60" fill="none" />
        <ellipse cx="0" cy="0" rx="96" ry="56" stroke="#4A8537" strokeWidth="2.8" opacity="0.75" fill="none" />
        <ellipse cx="0" cy="0" rx="84" ry="48" stroke="#4A8537" strokeWidth="3" opacity="0.90" fill="none" />

        {/* Medalhão Oval Central Verde Corporativo */}
        <ellipse cx="0" cy="0" rx="72" ry="40" fill="#4A8537" />

        {/* Tipografia Central: NF & F LDA */}
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          fill="#FFFFFF"
          className="font-black tracking-wider"
          style={{ fontSize: "21px", fontFamily: "var(--font-heading), sans-serif" }}
        >
          NF &amp; F <tspan fontSize="12px" fontWeight="700">LDA</tspan>
        </text>

        {/* Subtítulo: Sede Social Ambriz Bengo */}
        <text
          x="0"
          y="18"
          textAnchor="middle"
          fill="#F0FDF4"
          className="font-bold tracking-tight"
          style={{ fontSize: "9.5px", fontFamily: "var(--font-sans), sans-serif" }}
        >
          Sede Social Ambriz · Bengo
        </text>
      </g>
    </svg>
  );
};

// 4. J.F.X - Comércio Geral e Prestação de Serviços (SU), LDA
export const ClientLogoJFX: React.FC<LogoProps> = ({ className = "h-14" }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-auto max-w-full`}
      aria-label="Logótipo JFX Comércio Geral"
    >
      <g transform="translate(140, 70)">
        {/* Monograma Escudo / Losango Tecnológico Interligado */}
        <rect x="-32" y="-32" width="64" height="64" rx="14" transform="rotate(45)" className="stroke-brand-navy dark:stroke-brand-blue" strokeWidth="3.5" fill="none" />
        <rect x="-24" y="-24" width="48" height="48" rx="10" transform="rotate(45)" fill="currentColor" className="text-brand-navy/10 dark:text-brand-blue/20" />
        
        {/* Símbolo Central em Fita */}
        <path d="M-14 -10 L0 10 L14 -10" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="0" cy="-6" r="4" fill="#0284C7" />
      </g>

      <text
        x="140"
        y="152"
        textAnchor="middle"
        className="fill-slate-900 dark:fill-white font-extrabold tracking-[0.25em]"
        style={{ fontSize: "28px", fontFamily: "var(--font-heading), sans-serif" }}
      >
        J.F.X
      </text>

      <text
        x="140"
        y="174"
        textAnchor="middle"
        className="fill-slate-600 dark:fill-slate-400 font-medium tracking-tight"
        style={{ fontSize: "11px", fontFamily: "var(--font-sans), sans-serif" }}
      >
        Comércio Geral &amp; Serviços (SU), LDA
      </text>
    </svg>
  );
};

// 5. Zenith Logística & Navegação, SA
export const ClientLogoZenith: React.FC<LogoProps> = ({ className = "h-14" }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-auto max-w-full`}
      aria-label="Logótipo Zenith Logística e Navegação"
    >
      <g transform="translate(140, 70)">
        {/* Bússola / Proa Marítima Geométrica */}
        <circle cx="0" cy="0" r="34" className="stroke-slate-300 dark:stroke-white/20" strokeWidth="2" strokeDasharray="3 3" fill="none" />
        <path d="M0 -30 L8 -6 L30 0 L8 6 L0 30 L-8 6 L-30 0 L-8 -6 Z" fill="#0284C7" />
        <path d="M0 -30 L0 0 L30 0 Z" fill="#0369A1" opacity="0.6" />
        <path d="M0 30 L0 0 L-30 0 Z" fill="#0369A1" opacity="0.6" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
      </g>

      <text
        x="140"
        y="152"
        textAnchor="middle"
        className="fill-slate-900 dark:fill-white font-extrabold tracking-[0.3em]"
        style={{ fontSize: "25px", fontFamily: "var(--font-heading), sans-serif" }}
      >
        ZENITH
      </text>

      <text
        x="140"
        y="174"
        textAnchor="middle"
        className="fill-slate-600 dark:fill-slate-400 font-medium tracking-tight"
        style={{ fontSize: "11px", fontFamily: "var(--font-sans), sans-serif" }}
      >
        Logística &amp; Navegação, SA
      </text>
    </svg>
  );
};

// 6. Kwanza Digital Solutions, LDA
export const ClientLogoKwanza: React.FC<LogoProps> = ({ className = "h-14" }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-auto max-w-full`}
      aria-label="Logótipo Kwanza Digital Solutions"
    >
      <g transform="translate(140, 70)">
        {/* Cubo Isométrico / Nós de Rede Tech */}
        <path d="M0 -30 L26 -15 L26 15 L0 30 L-26 15 L-26 -15 Z" className="stroke-cyan-600 dark:stroke-cyan-400" strokeWidth="2.5" fill="none" />
        <path d="M0 0 L26 -15 M0 0 L-26 -15 M0 0 L0 30" className="stroke-cyan-600 dark:stroke-cyan-400" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="5" fill="#06B6D4" />
        <circle cx="26" cy="-15" r="4" fill="#3B82F6" />
        <circle cx="-26" cy="-15" r="4" fill="#3B82F6" />
        <circle cx="0" cy="30" r="4" fill="#3B82F6" />
      </g>

      <text
        x="140"
        y="152"
        textAnchor="middle"
        className="fill-slate-900 dark:fill-white font-extrabold tracking-[0.22em]"
        style={{ fontSize: "24px", fontFamily: "var(--font-heading), sans-serif" }}
      >
        KWANZA
      </text>

      <text
        x="140"
        y="174"
        textAnchor="middle"
        className="fill-slate-600 dark:fill-slate-400 font-medium tracking-tight"
        style={{ fontSize: "11px", fontFamily: "var(--font-sans), sans-serif" }}
      >
        Digital Solutions, LDA
      </text>
    </svg>
  );
};
