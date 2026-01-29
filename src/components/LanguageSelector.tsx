"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/request";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
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
      {/* Botão */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-vegGreen/10 transition-colors"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-5 h-5 text-vegGreen" />
        <span className="font-semibold text-sm uppercase">{locale}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl border-2 border-vegGreen/20 overflow-hidden z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`w-full px-4 py-3 text-left hover:bg-vegGreen/10 transition-colors flex items-center justify-between ${
                locale === loc
                  ? "bg-vegGreen/5 text-vegGreen font-semibold"
                  : "text-gray-700"
              }`}
            >
              <span>{localeNames[loc]}</span>
              {locale === loc && <span className="text-vegGreen">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
