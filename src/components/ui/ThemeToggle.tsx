"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const emptySubscribe = () => () => {};

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!isMounted) {
    return (
      <div className={`w-9 h-9 rounded-lg border border-transparent ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-surface-dark-hover transition-colors flex items-center justify-center cursor-pointer ${className}`}
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      title={isDark ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
    >
      {isDark ? (
        <Sun size={19} className="text-amber-400 hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon size={19} className="text-slate-600 hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};
