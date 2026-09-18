import React from "react";

export type GridVariant = "hero" | "subtle" | "none";

interface SectionSpotlightProps {
  variant?: "hero" | "centered" | "dual" | "subtle" | "bottom";
  grid?: GridVariant;
  /** Compatibilidade: se omitido grid, showGrid=false desativa; showGrid=true ativa hero */
  showGrid?: boolean;
  className?: string;
}

export const SectionSpotlight: React.FC<SectionSpotlightProps> = ({
  variant = "centered",
  grid,
  showGrid,
  className = "",
}) => {
  // Padrão: 'none' (sem grade). Somente exibe grade se explicitamente configurado.
  const resolvedGrid: GridVariant =
    grid ?? (showGrid === true ? "hero" : "none");

  let backgroundStyle = "";

  switch (variant) {
    case "hero":
      backgroundStyle =
        "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(65, 114, 155, 0.22), transparent 70%), radial-gradient(ellipse 40% 30% at 85% 20%, rgba(91, 157, 217, 0.12), transparent 70%)";
      break;
    case "dual":
      backgroundStyle =
        "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(65, 114, 155, 0.16), transparent 70%), radial-gradient(ellipse 50% 50% at 90% 100%, rgba(91, 157, 217, 0.10), transparent 70%)";
      break;
    case "bottom":
      backgroundStyle =
        "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(65, 114, 155, 0.18), transparent 70%)";
      break;
    case "subtle":
      backgroundStyle =
        "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(65, 114, 155, 0.10), transparent 70%)";
      break;
    case "centered":
    default:
      backgroundStyle =
        "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(65, 114, 155, 0.15), transparent 70%)";
      break;
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Radial Spotlight Layer (Gradiente suave de iluminação ambiental) */}
      <div
        className="absolute inset-0"
        style={{
          background: backgroundStyle,
        }}
      />

      {/* Grade Blueprint 72px — Padrão Hero */}
      {resolvedGrid === "hero" && (
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      )}

      {/* Grade Blueprint 72px — Modo Muito Mais Sutil (Serviços) */}
      {resolvedGrid === "subtle" && (
        <div
          className="absolute inset-0 opacity-[0.010] dark:opacity-[0.016]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      )}
    </div>
  );
};
