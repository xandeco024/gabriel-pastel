import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/request";

export default createMiddleware({
  // Lista de todos os locales suportados
  locales,

  // Idioma padrão: inglês (fallback universal)
  defaultLocale,

  // Detectar locale automaticamente do header Accept-Language do navegador
  // Isso vai detectar o idioma preferido do usuário automaticamente
  localeDetection: true,

  // Estratégia de prefixo: sempre mostrar o locale na URL
  localePrefix: "always",
});

export const config = {
  // Aplicar middleware em todas as rotas exceto:
  matcher: [
    // Incluir todas as rotas
    "/((?!api|_next|_vercel|admin|.*\\..*).*)",
    // Incluir rotas dinâmicas com locale
    "/(pt|en|es)/:path*",
  ],
};
