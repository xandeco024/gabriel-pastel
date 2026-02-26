"use client";

import "./Banner.css";

import Image from "next/image";
import OrderNowBtn from "@/components/ui/order-now-btn";
import { useTranslations } from "next-intl";

function Banner() {
  const t = useTranslations("home");

  return (
    <>
      <div className="relative w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] bg-vegYellow flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-[10%] mt-16 sm:mt-20 lg:mt-[90px] overflow-hidden">
        <div className="max-w-full lg:max-w-[623px] flex flex-col justify-center z-10 py-8 sm:py-12 lg:py-16 text-center lg:text-left">
          <h1 className="font-gluten text-2xl sm:text-3xl lg:text-[3rem] leading-tight mb-4 sm:mb-6 lg:mb-8 text-vegBrown-dark drop-shadow-sm">
            &ldquo;{t("title")}&rdquo;
          </h1>
          <p
            className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-center lg:text-justify leading-relaxed text-vegBrown-dark/90"
            dangerouslySetInnerHTML={{ __html: t.raw("subtitle") }}
          />
          <p
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-center lg:text-justify leading-relaxed text-vegBrown-dark/90 hidden sm:block"
            dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          />
          <div className="mt-2 sm:mt-4 flex justify-center lg:justify-start">
            <OrderNowBtn
              size="lg"
              hoverBgColor="hover:bg-vegYellow hover:border-white"
              hoverTextColor="hover:text-white"
            />
          </div>
        </div>

        {/* Container para splash e dude - responsivo */}
        <div className="relative lg:absolute lg:right-[5%] lg:bottom-0 h-[250px] sm:h-[300px] lg:h-[100%] w-full lg:w-[50%] flex items-end justify-center">
          {/* SVG Splash - cortado embaixo */}
          <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[100%] lg:w-[110%] h-[90%] lg:h-[95%] z-0"
            viewBox="0 0 924 793"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin slice"
          >
            <path
              d="M576.518 76.3252C552.68 82.8743 527.156 76.3649 509.367 59.1997L468.356 19.6274C443.802 -4.06466 405.744 -6.6023 378.262 13.6201L363.114 24.7667C352.951 32.2456 340.954 36.8381 328.395 38.0582L160.307 54.3867C122.48 58.0613 101.296 99.8021 120.661 132.503C135.889 158.218 126.314 191.447 99.7369 205.115L38 236.865C4.31244 254.19 -9.48077 295.171 6.87503 329.339L63.4289 447.485C70.4857 462.227 72.1614 478.974 68.1654 494.822L65.743 504.43C50.9822 562.972 113.482 610.725 166.087 581.097C185.972 569.897 210.12 569.302 230.533 579.508L286.149 607.315C297.179 612.829 306.557 621.16 313.332 631.464L398.435 760.876C431.228 810.743 507.384 799.329 524.115 742.038L547.706 661.261C556.659 630.607 585.223 609.897 617.142 610.921L851.263 618.425C909.532 620.293 944.417 554.283 910.048 507.193L786.71 338.207C769.474 314.592 768.73 282.752 784.844 258.357L875.268 121.468C910.892 67.5388 860.639 -1.73541 798.316 15.3876L576.518 76.3252Z"
              fill="#ff5500"
            />
          </svg>

          <Image
            src="/banner/dude.png"
            alt="Rapaz com pastéis"
            width={818}
            height={554}
            quality={100}
            className="relative h-[85%] sm:h-[90%] w-auto z-10"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
