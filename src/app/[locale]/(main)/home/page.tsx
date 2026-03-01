import React from "react";
import Banner from "@/components/Banner/Banner";
import Ticker from "@/components/Ticker/Ticker";
import PastelYourWay from "@/components/pastel-your-way/pastel-your-way";
import ArmazemDoCampo from "@/components/armazem-do-campo/armazem-do-campo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Gabriel Pastel: os melhores pastéis veganos artesanais do Brasil. Ingredientes frescos e orgânicos do Armazém do Campo. Monte seu pastel personalizado ou escolha nossos sabores especiais. Delivery rápido! 🥟",
  keywords: [
    "pastel vegano",
    "pastel artesanal",
    "comida vegana",
    "delivery",
    "Gabriel Pastel",
  ],
  openGraph: {
    title: "Gabriel Pastel - Pastéis Veganos Artesanais",
    description:
      "Os melhores pastéis veganos do Brasil. Monte seu pastel do seu jeito!",
    images: ["/banner/banner1.png"],
  },
};

export default function Page() {
  return (
    <div>
      <Banner />
      <Ticker />
      <PastelYourWay />
      <ArmazemDoCampo />
    </div>
  );
}
