"use client";

import "./pastel-your-way.css";

import Image from "next/image";
import OrderNowBtn from "@/components/ui/order-now-btn";
import { Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

function PastelYourWay() {
  const t = useTranslations("home.pastelYourWay");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("pastel-your-way");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcula progresso quando a seção está na viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1,
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executa uma vez no mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcula as rotações baseadas no progresso do scroll
  // Quando desce (scrollProgress aumenta), rotaciona para a DIREITA (valores positivos)
  const rotation1 = scrollProgress * -20; // Trás: 0° até -20° (mais à esquerda)
  const rotation2 = scrollProgress * 0; // Meio: sempre 0°
  const rotation3 = scrollProgress * 20; // Frente: 0° até 20° (mais à direita)

  return (
    <>
      <div
        id="pastel-your-way"
        className="relative w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] bg-background flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-[10%] py-10 sm:py-16 lg:py-20 my-6 sm:my-8 lg:my-12 overflow-hidden"
      >
        {/* Container dos pastéis - aparece primeiro em mobile */}
        <div className="relative w-full lg:w-[45%] flex items-center justify-center order-first lg:order-first mb-6 lg:mb-0">
          {/* Splash SVG decorativo laranja dramático - atrás dos pastéis */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] max-h-[300px] sm:max-h-[450px] lg:max-h-[600px]"
            viewBox="0 0 924 793"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 0 }}
          >
            <path
              d="M576.518 76.3252C552.68 82.8743 527.156 76.3649 509.367 59.1997L468.356 19.6274C443.802 -4.06466 405.744 -6.6023 378.262 13.6201L363.114 24.7667C352.951 32.2456 340.954 36.8381 328.395 38.0582L160.307 54.3867C122.48 58.0613 101.296 99.8021 120.661 132.503C135.889 158.218 126.314 191.447 99.7369 205.115L38 236.865C4.31244 254.19 -9.48077 295.171 6.87503 329.339L63.4289 447.485C70.4857 462.227 72.1614 478.974 68.1654 494.822L65.743 504.43C50.9822 562.972 113.482 610.725 166.087 581.097C185.972 569.897 210.12 569.302 230.533 579.508L286.149 607.315C297.179 612.829 306.557 621.16 313.332 631.464L398.435 760.876C431.228 810.743 507.384 799.329 524.115 742.038L547.706 661.261C556.659 630.607 585.223 609.897 617.142 610.921L851.263 618.425C909.532 620.293 944.417 554.283 910.048 507.193L786.71 338.207C769.474 314.592 768.73 282.752 784.844 258.357L875.268 121.468C910.892 67.5388 860.639 -1.73541 798.316 15.3876L576.518 76.3252Z"
              fill="#ff5500"
            />
          </svg>

          {/* Container dos pastéis em leque */}
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[500px] flex items-center justify-center">
            {/* Pastel 1 - Trás */}
            <Image
              src="/Pastel-1.png"
              alt="Pastel"
              width={500}
              height={500}
              quality={100}
              className="absolute transition-all duration-700 ease-out w-[200px] sm:w-[350px] lg:w-[500px] h-auto"
              style={{
                transform: `rotate(${rotation1}deg)`,
                transformOrigin: "center bottom",
                filter: "drop-shadow(8px 8px 12px rgba(0, 0, 0, 0.3))",
                zIndex: 1,
              }}
            />

            {/* Pastel 2 - Meio */}
            <Image
              src="/Pastel-1.png"
              alt="Pastel"
              width={500}
              height={500}
              quality={100}
              className="absolute transition-all duration-700 ease-out w-[200px] sm:w-[350px] lg:w-[500px] h-auto"
              style={{
                transform: `rotate(${rotation2}deg)`,
                transformOrigin: "center bottom",
                filter: "drop-shadow(8px 8px 12px rgba(0, 0, 0, 0.3))",
                zIndex: 2,
              }}
            />

            {/* Pastel 3 - Frente */}
            <Image
              src="/Pastel-1.png"
              alt="Pastel"
              width={500}
              height={500}
              quality={100}
              className="absolute transition-all duration-700 ease-out w-[200px] sm:w-[350px] lg:w-[500px] h-auto"
              style={{
                transform: `rotate(${rotation3}deg)`,
                transformOrigin: "center bottom",
                filter: "drop-shadow(8px 8px 12px rgba(0, 0, 0, 0.3))",
                zIndex: 3,
              }}
            />
          </div>
        </div>

        {/* Texto - aparece depois em mobile */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
          <h2 className="font-gluten text-3xl sm:text-4xl lg:text-5xl text-vegGreen leading-tight flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
            <Utensils className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            {t("title")}
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-vegBrown-dark/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          />
          <p className="text-base sm:text-lg lg:text-xl text-vegBrown-dark/80 leading-relaxed font-semibold">
            {t("tagline")}
          </p>
          <div className="mt-2 sm:mt-4 flex justify-center lg:justify-start">
            <OrderNowBtn size="lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PastelYourWay;
