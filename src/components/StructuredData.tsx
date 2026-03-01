import React from "react";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://gabriel-pastel.vercel.app/#restaurant",
        name: "Gabriel Pastel",
        description:
          "Pastéis veganos artesanais feitos com ingredientes frescos e orgânicos. Monte seu pastel personalizado ou escolha entre nossos sabores especiais.",
        url: "https://gabriel-pastel.vercel.app",
        telephone: "+5511951138721",
        email: "alepbravo1702@gmail.com",
        logo: {
          "@type": "ImageObject",
          url: "https://gabriel-pastel.vercel.app/icon.png",
        },
        image: "https://gabriel-pastel.vercel.app/banner/banner1.png",
        servesCuisine: ["Vegan", "Brazilian", "Fast Food"],
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua dos bobos, 0",
          addressLocality: "Rochdale, Osasco",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        menu: "https://gabriel-pastel.vercel.app/pt/monte-seu-pastel",
        acceptsReservations: false,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "12:00",
            closes: "22:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday", "Saturday"],
            opens: "12:00",
            closes: "00:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "12:00",
            closes: "22:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://gabriel-pastel.vercel.app/#website",
        url: "https://gabriel-pastel.vercel.app",
        name: "Gabriel Pastel",
        description: "Pastéis veganos artesanais e deliciosos",
        publisher: {
          "@id": "https://gabriel-pastel.vercel.app/#organization",
        },
        inLanguage: ["pt-BR", "en-US", "es-ES"],
      },
      {
        "@type": "Organization",
        "@id": "https://gabriel-pastel.vercel.app/#organization",
        name: "Gabriel Pastel",
        url: "https://gabriel-pastel.vercel.app",
        telephone: "+5511951138721",
        email: "alepbravo1702@gmail.com",
        logo: {
          "@type": "ImageObject",
          url: "https://gabriel-pastel.vercel.app/icon.png",
        },
        sameAs: [
          "https://www.instagram.com/xandeco420/",
          "https://www.tiktok.com/@cozinhadoromilto",
          "https://www.youtube.com/@xandeco420",
          "https://api.whatsapp.com/send/?phone=%2B5511951138721",
        ],
      },
      {
        "@type": "FoodEstablishment",
        name: "Gabriel Pastel",
        description:
          "Pastelaria vegana com ingredientes orgânicos do Armazém do Campo",
        servesCuisine: "Vegan",
        telephone: "+5511951138721",
        email: "alepbravo1702@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua dos bobos, 0",
          addressLocality: "Rochdale, Osasco",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        hasMenu: {
          "@type": "Menu",
          hasMenuSection: [
            {
              "@type": "MenuSection",
              name: "Monte Seu Pastel",
              description:
                "Crie seu pastel personalizado com nossos ingredientes frescos",
              hasMenuItem: {
                "@type": "MenuItem",
                name: "Pastel Personalizado",
                description:
                  "Monte seu pastel com os ingredientes que preferir",
                nutrition: {
                  "@type": "NutritionInformation",
                  calories: "100% plant-based",
                },
              },
            },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Gabriel Pastel",
        description: "Pastéis veganos artesanais",
        telephone: "+5511951138721",
        email: "alepbravo1702@gmail.com",
        image: "https://gabriel-pastel.vercel.app/banner/banner1.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua dos bobos, 0",
          addressLocality: "Rochdale, Osasco",
          addressRegion: "SP",
          postalCode: "06243-000",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -23.5329,
          longitude: -46.7917,
        },
        openingHours: "Mo-Th 12:00-22:00, Fr-Sa 12:00-00:00, Su 12:00-22:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
