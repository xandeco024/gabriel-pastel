import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import { holtwood, gluten } from "@/assets/fonts";
import "../globals.css";
import { SessionProvider } from "@/components/SessionProvider";
import { Toaster } from "sonner";
import { StructuredData } from "@/components/StructuredData";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params no Next.js 15
  const { locale } = await params;

  // Validar locale
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  // Buscar mensagens do idioma (sem passar locale, deixa o middleware fazer)
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${holtwood.variable} ${gluten.variable}`}>
      <head>
        <title>Gabriel Pastel</title>
        {/* hreflang alternates para SEO */}
        <link rel="alternate" hrefLang="pt" href="/pt" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="es" href="/es" />
        <link rel="alternate" hrefLang="x-default" href="/en" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#10806e" />
        <StructuredData />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider>
            <div id="root">{children}</div>
          </SessionProvider>
          <Toaster
            position="top-right"
            expand={true}
            richColors
            toastOptions={{
              style: {
                background: "white",
                border: "2px solid",
                color: "#2c221c",
              },
              classNames: {
                success: "border-[#10806e]",
                error: "border-[#ab3f3f]",
                warning: "border-[#f6a011]",
                info: "border-[#10806e]",
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
