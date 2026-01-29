import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Configurações para produção - descomente apenas quando for fazer deploy
  // output: 'export',
  // basePath: '/gabriel-pastel',
};

export default withNextIntl(nextConfig);
