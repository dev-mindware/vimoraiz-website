"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Check, ArrowRight, Mail, User } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [practiceSize, setPracticeSize] = useState("10-50");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-canvas-light-1 dark:bg-surface-dark-elevated rounded-xl shadow-2xl p-6 sm:p-8 border border-slate-100 dark:border-white/10 z-10 overflow-hidden"
          >
            {/* Top Accent Solid in Navy */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-navy-dark" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-surface-dark-hover transition-colors"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-brand-navy dark:text-brand-steel text-sm font-semibold mb-2">
                  <Sparkles size={16} />
                  <span>Demonstração Personalizada</span>
                </div>

                <h3 className="text-2xl font-bold text-brand-slate dark:text-slate-200 tracking-tight">
                  Conheça a VIMORAIZ na Prática
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-6">
                  Descubra como estruturamos a sua contabilidade e garantimos conformidade total com a AGT.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="text"
                        placeholder="Dr. Virgílio Morais"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-canvas-dark-1 text-sm focus:outline-none focus:border-brand-blue dark:focus:border-brand-steel focus:ring-2 focus:ring-brand-blue/20 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      E-mail Corporativo
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="email"
                        placeholder="contacto@empresa.ao"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-canvas-dark-1 text-sm focus:outline-none focus:border-brand-blue dark:focus:border-brand-steel focus:ring-2 focus:ring-brand-blue/20 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Dimensão da Empresa
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["1-10", "10-50", "50+"].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setPracticeSize(size)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                            practiceSize === size
                              ? "bg-brand-mist dark:bg-surface-dark-card-active border-brand-blue dark:border-brand-steel text-brand-navy dark:text-brand-steel font-semibold shadow-xs"
                              : "border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20"
                          }`}
                        >
                          {size} Colaboradores
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-lg bg-brand-navy hover:bg-brand-primary-hover text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Agendar Demonstração</span>
                    <ArrowRight size={16} className="text-slate-300" />
                  </motion.button>

                  <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2">
                    Sem custos iniciais · Tratamento confidencial dos seus dados.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <Check size={32} className="stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200">
                  Demonstração Solicitada com Sucesso!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                  Entraremos em contacto no prazo máximo de 24 horas úteis com os detalhes personalizados para a sua empresa.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
