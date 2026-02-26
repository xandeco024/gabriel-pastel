"use client";

import OrderNowBtn from "./ui/order-now-btn";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import AuthModal from "./AuthModal";
import LanguageSelector from "./LanguageSelector";
import {
  User,
  ShoppingBag,
  LogOut,
  LogIn,
  UserPlus,
  Leaf,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const { data: session, status } = useSession();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("nav");

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquear scroll quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
    setUserMenuOpen(false);
  };

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuOpen]);

  return (
    <header className="w-full h-24 px-16 bg-gradient-to-r from-background via-pastel to-background flex items-center justify-between shadow-lg backdrop-blur-sm z-[1000] top-0 fixed border-b-2 border-vegGreen/10">
      {/* Decorative elements */}
      <Leaf className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 text-vegGreen/10 rotate-12" />
      <Leaf className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-vegGreen/10 -rotate-12" />

      {/* logo e nome */}
      <Link href="/home" className="flex items-center gap-4 group">
        <div className="relative">
          <Image
            src="/icon.png"
            width={104}
            height={110}
            alt="Logo Gabriel Pastel"
            quality={100}
            className="h-[70px] w-[66px] transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
          />
          <div className="absolute inset-0 bg-vegYellow/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-vegGreen text-4xl font-holtwood tracking-wide group-hover:text-vegYellow transition-colors duration-300">
            GABRIEL PASTEL
          </span>
          <span className="text-vegGreen-light text-xs font-semibold tracking-[0.2em] -mt-1 uppercase">
            {t("vegan100")}
          </span>
        </div>
      </Link>

      {/* menu */}
      <nav className="flex items-center gap-6 mr-4">
        <Link
          href="/home"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          {t("home").toUpperCase()}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/nossa-historia"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          {t("ourStory").toUpperCase()}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>
        {/* Link Admin - apenas para ADMIN e SUPER_ADMIN */}
        {session &&
          (session.user?.role === "ADMIN" ||
            session.user?.role === "SUPER_ADMIN") && (
            <Link
              href="/admin/dashboard"
              className="relative text-lg font-semibold text-vegOrange hover:text-vegYellow transition-all duration-300 group"
            >
              {t("admin").toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
        <Link
          href="/nosso-impacto"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          {t("ourImpact").toUpperCase()}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>

        <div className="ml-2">
          <OrderNowBtn size="xl" />
        </div>

        {/* User Menu Dropdown */}
        <div className="relative ml-2" ref={menuRef}>
          {status === "loading" ? (
            <div className="w-12 h-12 rounded-full border-[3px] border-vegGreen/30 animate-pulse"></div>
          ) : (
            <>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="group flex items-center justify-center w-12 h-12 bg-background border-[3px] border-vegGreen hover:border-vegYellow hover:bg-vegGreen/5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 relative"
                aria-label="Menu do usuário"
              >
                <User className="w-6 h-6 text-vegGreen group-hover:text-vegYellow transition-colors" />
                {session && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-vegGreen rounded-full border-2 border-background"></span>
                )}
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-background rounded-2xl shadow-2xl border-2 border-vegGreen/20 z-50 overflow-hidden animate-dropdown-in">
                  {session ? (
                    <>
                      <div className="bg-gradient-to-br from-vegGreen/10 to-vegYellow/5 p-5 border-b-2 border-vegGreen/20">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-vegGreen to-vegGreen-light flex items-center justify-center text-background font-bold text-xl shadow-md">
                            {session.user?.name?.charAt(0).toUpperCase() || "U"}
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <p className="font-bold text-vegGreen text-lg truncate">
                              {session.user?.name}
                            </p>
                            <p className="text-sm text-vegGreen-light/70 truncate">
                              {session.user?.email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        <Link
                          href="/perfil"
                          className="flex items-center gap-3 px-5 py-3 text-vegGreen hover:bg-vegGreen/10 transition-all duration-200 group"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User className="w-5 h-5 group-hover:text-vegYellow group-hover:scale-110 transition-all" />
                          <span className="font-semibold">{t("profile")}</span>
                        </Link>
                        <Link
                          href="/perfil/pedidos"
                          className="flex items-center gap-3 px-5 py-3 text-vegGreen hover:bg-vegGreen/10 transition-all duration-200 group"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <ShoppingBag className="w-5 h-5 group-hover:text-vegYellow group-hover:scale-110 transition-all" />
                          <span className="font-semibold">{t("myOrders")}</span>
                        </Link>
                        {/* Link do Painel Admin - Apenas para ADMIN e SUPER_ADMIN */}
                        {(session.user?.role === "ADMIN" ||
                          session.user?.role === "SUPER_ADMIN") && (
                          <>
                            <div className="border-t border-vegGreen/10 my-2"></div>
                            <Link
                              href="/admin/dashboard"
                              className="flex items-center gap-3 px-5 py-3 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-all duration-200 group"
                              onClick={() => setUserMenuOpen(false)}
                            >
                              <Settings className="w-5 h-5 group-hover:text-purple-900 group-hover:scale-110 transition-all" />
                              <span className="font-semibold">
                                {t("adminPanel")}
                              </span>
                            </Link>
                          </>
                        )}
                        <div className="border-t border-vegGreen/10 my-2"></div>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-3 px-5 py-3 text-vegRed hover:bg-red-50 transition-all duration-200 group"
                        >
                          <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="font-semibold">{t("logout")}</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setAuthMode("signin");
                          setAuthModalOpen(true);
                          setUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-5 py-3 text-vegGreen hover:bg-vegGreen/10 transition-all duration-200 group"
                      >
                        <LogIn className="w-5 h-5 group-hover:text-vegYellow group-hover:scale-110 transition-all" />
                        <span className="font-semibold">{t("login")}</span>
                      </button>
                      <button
                        onClick={() => {
                          setAuthMode("signup");
                          setAuthModalOpen(true);
                          setUserMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-5 py-3 text-background bg-gradient-to-r from-vegGreen to-vegGreen-light hover:from-vegYellow hover:to-vegOrange transition-all duration-300 group mx-3 my-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02]"
                      >
                        <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>{t("createAccount")}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Language Selector */}
        <LanguageSelector />
      </nav>

      {/* Auth Modal - Renderizado via portal para evitar problemas de z-index */}
      {typeof window !== "undefined" &&
        createPortal(
          <AuthModal
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            initialMode={authMode}
          />,
          document.body,
        )}
    </header>
  );
}
