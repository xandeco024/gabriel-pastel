import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monte Seu Pastel",
  description:
    "Crie seu pastel vegano personalizado! Escolha entre diversos ingredientes frescos e orgânicos do Armazém do Campo. Monte a combinação perfeita para você!",
  keywords: [
    "monte seu pastel",
    "pastel personalizado",
    "criar pastel",
    "ingredientes veganos",
    "pastel sob medida",
  ],
  openGraph: {
    title: "Monte Seu Pastel | Gabriel Pastel",
    description:
      "Crie seu pastel vegano personalizado com ingredientes frescos e orgânicos!",
    images: ["/flavours/carne-de-jaca.avif"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
