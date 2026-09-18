"use client";

import React from "react";
import { WaveDot } from "@/types";

interface WavePathProps {
  dots: WaveDot[];
  strokeColor?: string;
  dotColor?: string;
  className?: string;
}

export const WavePath: React.FC<WavePathProps> = ({
  dots,
  strokeColor,
  dotColor,
  className = ""
}) => {
  // Traçado senoidal paramétrico cúbico exato de 0 a 1280
  // y(x) = 158 + 58 * sin(2*PI * (x - 255) / 320)
  const pathD = `
    M 0 170
    C 60 170, 110 100, 170 100
    C 230 100, 275 216, 340 216
    C 405 216, 445 100, 510 100
    C 575 100, 605 216, 650 216
    C 715 216, 745 100, 810 100
    C 875 100, 905 216, 970 216
    C 1035 216, 1065 100, 1130 100
    C 1180 100, 1220 170, 1280 170
  `;

  return (
    <svg
      viewBox="0 0 1280 320"
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible select-none ${className}`}
    >
      {/* Linha Senoidal Pontilhada */}
      <path
        d={pathD}
        fill="none"
        stroke={strokeColor || "currentColor"}
        className={strokeColor ? "" : "text-slate-300 dark:text-slate-700"}
        strokeWidth="1.7"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />

      {/* Nós Circulares Intercalados entre os Avatares */}
      {dots.map((dot, idx) => (
        <circle
          key={idx}
          cx={dot.x}
          cy={dot.y}
          r="3.5"
          fill={dotColor || "currentColor"}
          className={dotColor ? "" : "text-slate-800 dark:text-slate-400"}
        />
      ))}
    </svg>
  );
};
