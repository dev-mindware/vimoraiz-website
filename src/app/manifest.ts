import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VIMORAIZ · Contabilidade, Fiscalidade e Auditoria",
    short_name: "VIMORAIZ",
    description:
      "Apoiamos empresas na organização contabilística, cumprimento fiscal perante a AGT e auditoria independente em Luanda, Angola.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#1b3d5c",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/brand-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
