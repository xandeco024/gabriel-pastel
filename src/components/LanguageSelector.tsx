"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/request";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSelector({ scrolled = true }: { scrolled?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: Locale) => {
    // Substituir locale na URL
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão circular estilo Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center gap-1.5 h-12 px-3 rounded-full transition-all duration-300 hover:scale-105"
        aria-label="Selecionar idioma"
      >
        <Globe className={`w-5 h-5 text-vegGreen transition-colors ${scrolled ? "group-hover:text-vegYellow" : "group-hover:text-vegBrown-dark"}`} />
        <span className={`font-bold text-sm text-vegGreen transition-colors uppercase ${scrolled ? "group-hover:text-vegYellow" : "group-hover:text-vegBrown-dark"}`}>
          {locale}
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 bg-background rounded-2xl shadow-2xl border-2 border-vegGreen/20 overflow-hidden z-50 animate-dropdown-in">
          <div className="bg-gradient-to-br from-vegGreen/10 to-vegYellow/5 px-4 py-3 border-b-2 border-vegGreen/20">
            <p className="font-bold text-vegGreen text-sm flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Idioma / Language
            </p>
          </div>
          <div className="py-2">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full px-4 py-3 text-left hover:bg-vegGreen/10 transition-all duration-200 flex items-center justify-between group ${
                  locale === loc
                    ? "bg-vegGreen/5 text-vegGreen font-semibold"
                    : "text-vegBrown-dark"
                }`}
              >
                <span className="group-hover:text-vegYellow transition-colors">
                  {localeNames[loc]}
                </span>
                {locale === loc && <Check className="w-5 h-5 text-vegGreen" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
