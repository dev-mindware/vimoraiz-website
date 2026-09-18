import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/companyData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-light dark:bg-footer-dark text-white border-t border-white/10 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Coluna 1: Marca e Identidade */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/brand-logo.png"
                  alt="VIMORAIZ Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white dark:text-slate-200">
                vimoraiz<span className="text-brand-blue dark:text-brand-steel">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white dark:text-slate-200 font-semibold">VIMORAIZ – PRESTAÇÃO DE SERVIÇOS (SU), LDA</strong>. Soluções profissionais de topo em Contabilidade, Fiscalidade e Auditoria em Angola.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-200/90 dark:text-slate-400 pt-1">
              <ShieldCheck size={16} className="text-brand-blue dark:text-brand-steel" />
              <span>Conformidade com o PGC e Normas AGT</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white dark:text-slate-200 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#inicio" className="hover:text-white dark:hover:text-slate-200 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white dark:hover:text-slate-200 transition-colors">Sobre Nós</a></li>
              <li><a href="#valores" className="hover:text-white dark:hover:text-slate-200 transition-colors">Valores</a></li>
              <li><a href="#servicos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Serviços</a></li>
              <li><a href="#por-que" className="hover:text-white dark:hover:text-slate-200 transition-colors">Diferenciais</a></li>
              <li><a href="#testemunhos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Testemunhos</a></li>
              <li><a href="#contacto" className="hover:text-white dark:hover:text-slate-200 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços Principais */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white dark:text-slate-200 uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#servicos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Contabilidade Geral</a></li>
              <li><a href="#servicos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Fiscalidade & AGT</a></li>
              <li><a href="#servicos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Auditoria Contabilística</a></li>
              <li><a href="#servicos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Auditoria Fiscal</a></li>
              <li><a href="#servicos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Regularização de Pendências</a></li>
              <li><a href="#servicos" className="hover:text-white dark:hover:text-slate-200 transition-colors">Consultoria e Apoio à Gestão</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contacto em Luanda */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white dark:text-slate-200 uppercase tracking-wider">
              Angola
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-blue dark:text-brand-steel flex-shrink-0 mt-0.5" />
                <span>{companyData.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-brand-blue dark:text-brand-steel flex-shrink-0" />
                <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-slate-200 transition-colors">
                  {companyData.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-brand-blue dark:text-brand-steel flex-shrink-0" />
                <a href={`mailto:${companyData.emails.primary}`} className="hover:text-white dark:hover:text-slate-200 transition-colors">
                  {companyData.emails.primary}
                </a>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                {companyData.schedule}
              </p>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright, Créditos Mindware e Botão Voltar ao Topo */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VIMORAIZ – PRESTAÇÃO DE SERVIÇOS (SU), LDA. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Desenvolvido por{" "}
              <a
                href="https://mindware.ao"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-blue dark:text-brand-steel hover:text-white dark:hover:text-white hover:underline transition-colors ml-0.5 inline-flex items-center gap-1"
              >
                Mindware
              </a>
            </span>

            <a href="#inicio" className="flex items-center gap-1 text-slate-400 hover:text-white dark:hover:text-slate-200 transition-colors">
              <span>Voltar ao topo</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
