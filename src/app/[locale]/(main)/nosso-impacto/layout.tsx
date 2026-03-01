import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Impacto",
  description:
    "Veja o impacto positivo da alimentação vegana: economia de água, redução de CO2, vidas animais salvas. Calcule seu próprio impacto pessoal ao escolher pastéis veganos!",
  keywords: [
    "impacto ambiental",
    "sustentabilidade",
    "veganismo",
    "economia de água",
    "redução CO2",
    "bem-estar animal",
  ],
  openGraph: {
    title: "Nosso Impacto | Gabriel Pastel",
    description:
      "Descubra o impacto positivo da alimentação vegana e sustentável",
    images: ["/banner/banner1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
