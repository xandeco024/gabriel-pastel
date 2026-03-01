import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa História",
  description:
    "Conheça a história do Gabriel Pastel: como nasceu a paixão por pastéis veganos artesanais, nossa parceria com o Armazém do Campo e nosso compromisso com ingredientes orgânicos e sustentabilidade.",
  keywords: [
    "história",
    "sobre nós",
    "Gabriel Pastel",
    "origem",
    "missão",
    "valores",
    "Armazém do Campo",
  ],
  openGraph: {
    title: "Nossa História | Gabriel Pastel",
    description: "Conheça a história e os valores por trás do Gabriel Pastel",
    images: ["/banner/banner1.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
