import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gabriel-pastel.vercel.app";
  const locales = ["pt", "en", "es"];

  // Páginas principais
  const pages = [
    "",
    "/home",
    "/monte-seu-pastel",
    "/nossa-historia",
    "/nosso-impacto",
    "/perfil",
    "/perfil/pedidos",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Adicionar cada página em cada idioma
  locales.forEach((locale) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" || page === "/home" ? "daily" : "weekly",
        priority: page === "" || page === "/home" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page}`]),
          ),
        },
      });
    });
  });

  return sitemap;
}
