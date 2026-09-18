"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Check,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import { SectionSpotlight } from "@/components/ui/SectionSpotlight";

import { useQuote } from "@/context/QuoteContext";

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = "" }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { selectedService: contextService } = useQuote();
  const effectiveService = initialService || contextService || "";

  // Motions dinâmicos no scroll para a secção de contacto
  const leftX = useTransform(scrollYProgress, [0.1, 0.45], [-40, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0.15, 0.5], [40, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const trustCardY = useTransform(scrollYProgress, [0.2, 0.8], [25, -15]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: effectiveService,
    message: "",
    website: "", // Honeypot antispam
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [prevService, setPrevService] = useState(effectiveService);
  if (effectiveService !== prevService) {
    setPrevService(effectiveService);
    if (effectiveService) {
      setFormData((prev) => ({ ...prev, service: effectiveService }));
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ocorreu um erro ao submeter o formulário.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        website: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    } catch (err: unknown) {
      const errorStr =
        err instanceof Error ? err.message : "Erro de conexão ao enviar pedido.";
      setErrorMessage(errorStr);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="py-24 sm:py-28 bg-canvas-light-1 dark:bg-canvas-dark-1 relative overflow-hidden border-t border-slate-100 dark:border-white/10 select-none"
    >
      {/* Background Spotlight sem grade (apenas iluminação suave) */}
      <SectionSpotlight variant="centered" grid="none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================================= */}
          {/* COLUNA ESQUERDA: INFORMAÇÃO INSTITUCIONAL & CANAIS DIRETOS                */}
          {/* ========================================================================= */}
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow Editorial */}
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-brand-steel mb-4">
                <span className="w-8 h-[2px] bg-brand-primary-hover dark:bg-brand-steel rounded-full" />
                <span>04 &nbsp;/&nbsp; CONTACTOS &amp; ORÇAMENTO</span>
              </div>

              {/* Título Principal */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-slate dark:text-slate-200 tracking-tight leading-[1.12] mb-5">
                Vamos falar sobre <br />
                o seu negócio.
              </h2>

              {/* Parágrafo de Contexto */}
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                Precisa de apoio contabilístico contínuo, auditoria fiscal perante a AGT ou regularização de pendências? Envie os dados da sua empresa. A nossa equipa analisará o pedido e apresentará uma proposta estruturada e personalizada.
              </p>

              {/* Cartões Executivos de Contacto */}
              <div className="space-y-3.5 mb-8">
                {/* 1. Morada / Sede Física */}
                <div className="p-4 rounded-xl bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-brand-blue/40 dark:hover:border-white/20 hover:shadow-sm hover:translate-x-1 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface dark:bg-surface-dark-card-active text-brand-navy dark:text-brand-steel flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MapPin size={19} className="stroke-[2.2]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Morada
                      </span>
                      <span className="text-[10px] bg-slate-200/70 dark:bg-surface-dark-pill text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-semibold border border-transparent dark:border-white/10">
                        Sede Física
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 block">
                      {companyData.location}
                    </span>
                  </div>
                </div>

                {/* 2. Telefone & WhatsApp */}
                <div className="p-4 rounded-xl bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-500/40 hover:shadow-sm hover:translate-x-1 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Phone size={19} className="stroke-[2.2]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Telefone / WhatsApp
                      </span>
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">
                        Atendimento Imediato
                      </span>
                    </div>
                    <a
                      href={companyData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{companyData.phoneFormatted}</span>
                    </a>
                  </div>
                </div>

                {/* 3. Correio Eletrónico */}
                <div className="p-4 rounded-xl bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-brand-blue/40 dark:hover:border-white/20 hover:shadow-sm hover:translate-x-1 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface dark:bg-surface-dark-card-active text-brand-navy dark:text-brand-steel flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Mail size={19} className="stroke-[2.2]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Correio Eletrónico
                      </span>
                      <span className="text-[10px] bg-sky-100 dark:bg-surface-dark-pill text-sky-800 dark:text-brand-steel px-2 py-0.5 rounded font-semibold border border-transparent dark:border-white/10">
                        Resposta em 24h
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 block">
                      {companyData.emails.primary}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">
                      {companyData.emails.secondary}
                    </span>
                  </div>
                </div>

                {/* 4. Horário de Atendimento */}
                <div className="p-4 rounded-xl bg-canvas-light-2 dark:bg-canvas-dark-2 border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-slate-300 dark:hover:border-white/20 hover:shadow-sm hover:translate-x-1 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-surface-dark-pill text-slate-700 dark:text-slate-400 flex items-center justify-center flex-shrink-0 shadow-xs border border-transparent dark:border-white/10">
                    <Clock size={19} className="stroke-[2.2]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Horário de Funcionamento
                      </span>
                      <span className="text-[10px] bg-slate-200/70 dark:bg-surface-dark-pill text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-semibold border border-transparent dark:border-white/10">
                        WAT (UTC+1)
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200 block">
                      {companyData.schedule}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Institucional de Sigilo & Proteção de Dados com Parallax */}
            <motion.div
              style={{ y: trustCardY }}
              className="p-4 sm:p-5 rounded-xl bg-brand-mist dark:bg-canvas-dark-2 border border-brand-border-dark dark:border-white/10 flex items-start gap-3.5 shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                <ShieldCheck size={18} className="stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy dark:text-brand-steel uppercase tracking-wider block mb-1">
                  Sigilo Profissional &amp; Proteção de Dados
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Toda a informação contabilística e documentação partilhada é tratada sob rigoroso segredo profissional e em conformidade estrita com a legislação angolana.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================================= */}
          {/* COLUNA DIREITA: FORMULÁRIO COMERCIAL REFINADO                             */}
          {/* ========================================================================= */}
          <motion.div
            style={{ x: rightX, opacity: rightOpacity }}
            className="lg:col-span-7"
          >
            <div className="bg-canvas-light-2 dark:bg-canvas-dark-2 rounded-2xl p-7 sm:p-10 border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-200/60 dark:shadow-black/40">
              {/* Header do Formulário com Badge Executivo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-6 border-b border-slate-200/80 dark:border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-brand-slate dark:text-slate-200 tracking-tight">
                    Solicitar Orçamento Online
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Entraremos em contacto no prazo máximo de 24 horas úteis.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 text-xs font-semibold text-brand-navy dark:text-brand-steel shadow-xs">
                  <Check size={13} className="text-emerald-600 dark:text-emerald-400 stroke-[3]" />
                  <span>Sem Custos Iniciais</span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200">
                    Pedido Enviado com Sucesso!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Obrigado pelo seu contacto, <strong>{formData.name}</strong>. A nossa equipa técnica em Luanda já recebeu os detalhes da sua empresa e apresentará uma proposta estruturada brevemente.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        phone: "",
                        email: "",
                        service: "",
                        message: "",
                        website: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-surface-dark-hover text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all cursor-pointer shadow-xs"
                  >
                    Enviar outro pedido
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Antispam invisível para utilizadores reais */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="opacity-0 absolute -z-10 w-0 h-0 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Banner de Erro em caso de falha de validação ou envio */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="Ex: Dr. Virgílio Morais"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-navy dark:focus:border-brand-steel focus:ring-4 focus:ring-brand-navy/10 dark:focus:ring-brand-steel/15 outline-none transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Empresa / Organização *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="Ex: Minha Empresa, LDA"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-navy dark:focus:border-brand-steel focus:ring-4 focus:ring-brand-navy/10 dark:focus:ring-brand-steel/15 outline-none transition-all shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: 930 335 853"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-navy dark:focus:border-brand-steel focus:ring-4 focus:ring-brand-navy/10 dark:focus:ring-brand-steel/15 outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contacto@suaempresa.ao"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-navy dark:focus:border-brand-steel focus:ring-4 focus:ring-brand-navy/10 dark:focus:ring-brand-steel/15 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Serviço Pretendido
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 focus:border-brand-navy dark:focus:border-brand-steel focus:ring-4 focus:ring-brand-navy/10 dark:focus:ring-brand-steel/15 outline-none transition-all shadow-xs"
                    >
                      <option value="" className="dark:bg-canvas-dark-1 dark:text-slate-200">Selecione o serviço pretendido...</option>
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.title} className="dark:bg-canvas-dark-1 dark:text-slate-200">
                          {svc.number} - {svc.title}
                        </option>
                      ))}
                      <option value="Outro / Pacote Sob Medida" className="dark:bg-canvas-dark-1 dark:text-slate-200">Outro / Pacote Sob Medida</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Mensagem / Detalhes da sua Necessidade
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descreva a atividade da sua empresa, regime fiscal ou o tipo de apoio necessário..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-canvas-light-1 dark:bg-canvas-dark-1 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-navy dark:focus:border-brand-steel focus:ring-4 focus:ring-brand-navy/10 dark:focus:ring-brand-steel/15 outline-none transition-all resize-none shadow-xs"
                    />
                  </div>

                  {/* Grupo de Ação: Azul Corporativo + WhatsApp */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-lg bg-brand-navy hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>A processar envio...</span>
                      ) : (
                        <>
                          <span>Solicitar Orçamento</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    <a
                      href={companyData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp Direto</span>
                    </a>
                  </div>

                  {/* Nota de Garantia Inferior */}
                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      ✓ Análise técnica por consultor sénior &nbsp;·&nbsp; Resposta garantida em 24 horas úteis
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
