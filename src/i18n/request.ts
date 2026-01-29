import { getRequestConfig } from "next-intl/server";

// Idiomas suportados
export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

// Idioma padrão (inglês como fallback)
export const defaultLocale: Locale = "en";

// Nomes dos idiomas para exibir no seletor
export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

// Configuração de moeda por locale
export const currencyByLocale: Record<Locale, string> = {
  pt: "BRL",
  en: "USD",
  es: "USD",
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Pegar o locale do request (funciona com middleware)
  const locale = await requestLocale;
  
  // Se não tiver locale ou não for válido, usar o padrão
  if (!locale || !locales.includes(locale as Locale)) {
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default,
    };
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
