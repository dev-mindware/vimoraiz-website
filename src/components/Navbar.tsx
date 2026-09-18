"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { companyData } from "@/data/companyData";

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#valores", label: "Valores" },
    { href: "#servicos", label: "Serviços" },
    { href: "#por-que", label: "Diferenciais" },
    { href: "#testemunhos", label: "Testemunhos" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-canvas-light-1/95 dark:bg-canvas-dark-1/95 backdrop-blur-md border-b border-slate-100 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Logótipo Oficial VIMORAIZ */}
        <Link href="#inicio" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 select-none"
          >
            <div className="relative w-8 h-8 flex-shrink-0 drop-shadow-xs">
              <Image
                src="/brand-logo.png"
                alt="VIMORAIZ Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex items-baseline font-extrabold tracking-tight text-2xl text-brand-navy dark:text-slate-200 transition-colors">
              <span>vimoraiz</span>
              <span className="text-brand-blue dark:text-brand-steel text-xl ml-0.5 font-bold">.</span>
            </div>
          </motion.div>
        </Link>

        {/* Links de Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand-navy dark:hover:text-slate-200 transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue dark:bg-brand-steel transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Ações Rápidas no Canto Direito (Sem telefone desktop, botão em Azul Corporativo) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Botão Solicitar Orçamento - Azul Corporativo VIMORAIZ */}
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-primary-hover text-white font-semibold text-xs tracking-wide transition-colors shadow-xs active:scale-95 cursor-pointer"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-surface-dark-hover transition-colors"
          aria-label="Alternar Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Gaveta Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 dark:border-white/10 bg-canvas-light-1 dark:bg-canvas-dark-2 px-6 py-5 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3 font-semibold text-slate-700 dark:text-slate-300 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-brand-blue dark:hover:text-brand-steel"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex flex-col gap-2.5">
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold text-center border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                <span>WhatsApp: {companyData.phoneFormatted}</span>
              </a>

              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-brand-navy text-white text-xs font-semibold text-center hover:bg-brand-primary-hover transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
