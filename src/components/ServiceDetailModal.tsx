"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight, ShieldCheck, Target, MessageCircle } from "lucide-react";
import { ServiceItem } from "@/types";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "includes" | "benefits" | "target">("overview");

  // Fechar com tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevenir scroll do body quando o modal está aberto
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [service]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá VIMORAIZ! Gostaria de obter uma proposta detalhada para o serviço de ${service.title} para a minha empresa.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop Sólido Escuro com Desfoque Minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy-dark/75 dark:bg-black/85 backdrop-blur-sm"
      />

      {/* Content Box do Modal Ampliado com w-max / 1040px */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full md:w-[min(94vw,1040px)] max-w-5xl bg-canvas-light-1 dark:bg-surface-dark-elevated rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 flex flex-col max-h-[90vh] transition-colors"
      >
        {/* Cabeçalho Minimalista */}
        <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-white/10 bg-canvas-light-1 dark:bg-surface-dark-elevated">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 dark:bg-surface-dark-pill text-slate-700 dark:text-slate-400 border border-transparent dark:border-white/10">
                  {service.category}
                </span>
                <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-500">
                  #{service.number}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate dark:text-slate-200 leading-snug">
                {service.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {/* Botão Fechar */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-surface-dark-hover flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
              aria-label="Fechar modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Abas Minimalistas com Sublinhado */}
        <div className="flex items-center gap-8 px-6 sm:px-8 border-b border-slate-100 dark:border-white/10 bg-canvas-light-1 dark:bg-surface-dark-elevated overflow-x-auto no-scrollbar">
          {[
            { id: "overview", label: "Visão Geral" },
            { id: "includes", label: "O Que Inclui" },
            { id: "benefits", label: "Benefícios Estratégicos" },
            { id: "target", label: "Público Indicado" }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-3.5 text-xs sm:text-sm font-semibold tracking-tight transition-colors relative whitespace-nowrap cursor-pointer ${
                  isActive ? "text-brand-slate dark:text-slate-200" : "text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-navy dark:bg-brand-steel"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Corpo do Conteúdo Espaçoso */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-canvas-light-2 dark:bg-canvas-dark-2 p-6 rounded-lg border border-slate-200/80 dark:border-white/10">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  Enquadramento Estratégico
                </span>
                <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-md bg-brand-surface dark:bg-surface-dark-card-active text-brand-navy dark:text-brand-steel flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900 dark:text-slate-200">Conformidade AGT</span>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed block mt-0.5">Validação rigorosa perante a legislação tributária angolana.</span>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-md bg-brand-surface dark:bg-surface-dark-card-active text-brand-navy dark:text-brand-steel flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target size={20} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900 dark:text-slate-200">Rigor Metodológico</span>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed block mt-0.5">Documentação e conciliações detalhadas com relatórios periódicos.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "includes" && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                Entregáveis e Procedimentos Incluídos
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium leading-snug"
                  >
                    <Check size={16} className="text-brand-primary-hover dark:text-brand-steel flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                Impacto Real para a sua Empresa
              </span>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-lg bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 flex flex-col justify-start"
                  >
                    <div className="w-7 h-7 rounded bg-slate-200/70 dark:bg-surface-dark-pill text-brand-navy dark:text-brand-steel flex items-center justify-center mb-3">
                      <Check size={15} className="text-brand-primary-hover dark:text-brand-steel" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-300 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "target" && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                Público-Alvo Indicado
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.targetAudience.map((audience, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-lg bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-primary-hover dark:bg-brand-steel flex-shrink-0" />
                    <span>{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rodapé Comercial com Botões em Azul Corporativo (Sem Preto) */}
        <div className="bg-slate-50 dark:bg-canvas-dark-1 p-6 sm:p-7 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
              Regime de Preço
            </span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              {service.pricingNote}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/244930335853?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direto</span>
            </a>

            <button
              onClick={() => {
                onSelectForQuote(service.title);
                onClose();
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-lg bg-brand-navy hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <span>Solicitar Proposta</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
