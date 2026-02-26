import type { Metadata } from "next";
import React from "react";
// fonts are applied in the root layout
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Gabriel Pastel",
    default: "Gabriel Pastel",
  },
  description: "O pastel que te leva até o céu! (do jeito bom)",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
