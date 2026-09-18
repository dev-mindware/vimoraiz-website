"use client";

import { useState, useCallback, MouseEvent } from "react";

interface SpotlightState {
  mouseX: number;
  mouseY: number;
  isHovered: boolean;
}

export function useSpotlight() {
  const [state, setState] = useState<SpotlightState>({
    mouseX: 0,
    mouseY: 0,
    isHovered: false
  });

  const onMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setState({
      mouseX: e.clientX - rect.left,
      mouseY: e.clientY - rect.top,
      isHovered: true
    });
  }, []);

  const onMouseEnter = useCallback(() => {
    setState((prev) => ({ ...prev, isHovered: true }));
  }, []);

  const onMouseLeave = useCallback(() => {
    setState((prev) => ({ ...prev, isHovered: false }));
  }, []);

  return {
    ...state,
    spotlightProps: {
      onMouseMove,
      onMouseEnter,
      onMouseLeave
    }
  };
}
