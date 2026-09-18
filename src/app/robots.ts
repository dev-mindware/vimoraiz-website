import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["Googlebot", "Googlebot-Image", "Bingbot", "Applebot"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["OAI-SearchBot", "PerplexityBot", "Claude-SearchBot"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://vimoraiz.com/sitemap.xml",
    host: "https://vimoraiz.com",
  };
}
