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
        className={`relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-pastel flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-[10%] py-10 sm:py-16 lg:py-20 my-6 sm:my-8 lg:my-12 overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Texto - aparece depois em mobile (por causa de flex-col-reverse) */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left mt-6 lg:mt-0">
          <h2 className="font-gluten text-3xl sm:text-4xl lg:text-5xl text-vegGreen leading-tight flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
            <Leaf className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0" />
            {t("title")}
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-vegBrown-dark/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("description1") }}
          />
          <p className="text-base sm:text-lg lg:text-xl text-vegBrown-dark/80 leading-relaxed">
            {t("description2")}
          </p>
          <div className="mt-2 sm:mt-4 flex justify-center lg:justify-start">
            <OrderNowBtn size="lg" />
          </div>
        </div>

        {/* Imagem - aparece primeiro em mobile (por causa de flex-col-reverse) */}
        <div className="relative w-full lg:w-[45%] flex items-center justify-center">
          <Image
            src="/homepage/armazem.png"
            alt="Produtos da Armazém do Campo"
            width={776}
            height={520}
            quality={100}
            className="w-full max-w-md lg:max-w-none h-auto drop-shadow-2xl rounded-xl sm:rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default ArmazemDoCampo;
