"use client";

import "./armazem-do-campo.css";

import Image from "next/image";
import OrderNowBtn from "@/components/ui/order-now-btn";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

function ArmazemDoCampo() {
  const t = useTranslations("home.armazem");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("armazem-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        id="armazem-section"
        className={`relative w-full min-h-[600px] bg-pastel flex items-center justify-between px-[10%] py-20 my-12 overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-[45%] flex flex-col justify-center space-y-6">
          <h2 className="font-gluten text-5xl text-vegGreen leading-tight flex items-center gap-4">
            <Leaf className="w-12 h-12" />
            {t("title")}
          </h2>
          <p
            className="text-xl text-vegBrown-dark/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("description1") }}
          />
          <p className="text-xl text-vegBrown-dark/80 leading-relaxed">
            {t("description2")}
          </p>
          <div className="mt-4">
            <OrderNowBtn />
          </div>
        </div>

        <div className="relative w-[45%] flex items-center justify-center">
          <Image
            src="/homepage/armazem.png"
            alt="Produtos da Armazém do Campo"
            width={776}
            height={520}
            quality={100}
            className="w-full h-auto drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default ArmazemDoCampo;
