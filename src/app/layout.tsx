import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://gabriel-pastel.vercel.app"),
  title: {
    template: "%s | Gabriel Pastel - Pastéis Veganos Artesanais",
    default: "Gabriel Pastel - Pastéis Veganos Artesanais e Deliciosos",
  },
  description:
    "Gabriel Pastel: pastéis veganos artesanais feitos com ingredientes frescos e orgânicos. Monte seu pastel personalizado ou escolha entre nossos sabores especiais. Delivery rápido e sustentável! 🥟",
  keywords: [
    "Gabriel Pastel",
    "pastel vegano",
    "pastel artesanal",
    "comida vegana",
    "pastel delivery",
    "pastelaria vegana",
    "food vegan",
    "pastel personalizado",
    "ingredientes orgânicos",
    "Armazém do Campo",
    "pastel saudável",
    "pastelaria",
    "monte seu pastel",
  ],
  authors: [{ name: "Gabriel Pastel" }],
  creator: "Gabriel Pastel",
  publisher: "Gabriel Pastel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES"],
    url: "https://gabriel-pastel.vercel.app",
    siteName: "Gabriel Pastel",
    title: "Gabriel Pastel - Pastéis Veganos Artesanais",
    description:
      "Pastéis veganos artesanais feitos com ingredientes frescos e orgânicos. Monte seu pastel do seu jeito!",
    images: [
      {
        url: "/banner/banner1.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Pastel - Pastéis Veganos Deliciosos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Pastel - Pastéis Veganos Artesanais",
    description:
      "Pastéis veganos artesanais feitos com ingredientes frescos e orgânicos. Monte seu pastel do seu jeito!",
    images: ["/banner/banner1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
