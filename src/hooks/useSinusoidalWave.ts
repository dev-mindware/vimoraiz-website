"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { WaveSlot, WaveDot } from "@/types";

interface UseSinusoidalWaveProps {
  totalItems: number;
  pauseDuration?: number;     // tempo de pausa no centro (padrão: 3500ms)
  transitionDuration?: number;// tempo de deslocamento fluido e lento entre linhas (padrão: 2600ms)
}

// 7 slots ao longo da onda senoidal de 0 a 1280 (idêntico a media_1789561352586.png)
export const WAVE_SLOTS: WaveSlot[] = [
  { x: 170, y: 100, size: 52 },  // Slot 0: Crista esquerda
  { x: 340, y: 216, size: 70 },  // Slot 1: Vale
  { x: 510, y: 100, size: 82 },  // Slot 2: Crista
  { x: 650, y: 216, size: 106 }, // Slot 3: VALE CENTRAL (Ativo no meio da tela)
  { x: 810, y: 100, size: 82 },  // Slot 4: Crista
  { x: 970, y: 216, size: 70 },  // Slot 5: Vale
  { x: 1130, y: 100, size: 56 }  // Slot 6: Crista direita
];

// 7 nós pretos circulares sólidos intercalados entre os avatares exatamente sobre a linha
export const CONNECTION_DOTS: WaveDot[] = [
  { x: 255, y: 158 },
  { x: 425, y: 158 },
  { x: 580, y: 158 },
  { x: 730, y: 158 },
  { x: 890, y: 158 },
  { x: 1050, y: 158 },
  { x: 1205, y: 158 }
];

// Função matemática que calcula a altura Y exata na curva senoidal para qualquer posição X
export function getSinusoidalY(x: number): number {
  return 158 + 58 * Math.sin((2 * Math.PI * (x - 255)) / 320);
}

// Suavização senoidal orgânica para uma sensação de flutuação e navegação suave entre as linhas
function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

export function useSinusoidalWave({
  totalItems,
  pauseDuration = 2200,
  transitionDuration = 900 // Transição ágil e fluida de 900ms
}: UseSinusoidalWaveProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPausedAtCenter, setIsPausedAtCenter] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0); // 0 a 1

  const animationFrameRef = useRef<number | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  // Executa uma transição fluida e lenta ao longo da onda
  const runTransition = useCallback((dir: 1 | -1, targetIdx?: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsPausedAtCenter(false);

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / transitionDuration, 1);
      const easedProgress = easeInOutSine(progress);

      setTransitionProgress(easedProgress * dir);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Transição concluída: atualiza activeIndex e reseta progresso
        setActiveIndex((prev) => {
          if (targetIdx !== undefined) return (targetIdx + totalItems) % totalItems;
          return (prev + dir + totalItems) % totalItems;
        });
        setTransitionProgress(0);
        isAnimatingRef.current = false;
        setIsPausedAtCenter(true); // Pausa no centro
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [totalItems, transitionDuration]);

  // Controles manuais
  const goToNext = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    runTransition(1);
  }, [runTransition]);

  const goToPrev = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    runTransition(-1);
  }, [runTransition]);

  const goToIndex = useCallback((index: number) => {
    if (index === activeIndex || isAnimatingRef.current) return;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    const dir = index > activeIndex ? 1 : -1;
    runTransition(dir, index);
  }, [activeIndex, runTransition]);

  // Auto-play loop: quando em repouso no centro (isPausedAtCenter), aguarda pauseDuration e avança
  useEffect(() => {
    if (!isPausedAtCenter || isHovered || totalItems <= 1) return;

    pauseTimerRef.current = setTimeout(() => {
      runTransition(1);
    }, pauseDuration);

    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [activeIndex, isPausedAtCenter, isHovered, totalItems, pauseDuration, runTransition]);

  // Cleanup na desmontagem
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return {
    activeIndex,
    isPausedAtCenter,
    transitionProgress,
    isHovered,
    setIsHovered,
    goToNext,
    goToPrev,
    goToIndex,
    slots: WAVE_SLOTS,
    dots: CONNECTION_DOTS
  };
}
