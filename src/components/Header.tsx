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
    <header className="w-full h-16 sm:h-20 lg:h-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-background via-pastel to-background flex items-center justify-between shadow-lg backdrop-blur-sm z-[1000] top-0 fixed border-b-2 border-vegGreen/10">
      {/* Decorative elements - hidden on mobile */}
      <Leaf className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 text-vegGreen/10 rotate-12" />
      <Leaf className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-vegGreen/10 -rotate-12" />

      {/* logo e nome */}
      <Link href="/home" className="flex items-center gap-2 sm:gap-3 lg:gap-4 group">
        <div className="relative">
          <Image
            src="/icon.png"
            width={104}
            height={110}
            alt="Logo Gabriel Pastel"
            quality={100}
            className="h-[45px] w-[42px] sm:h-[55px] sm:w-[52px] lg:h-[70px] lg:w-[66px] transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
          />
          <div className="absolute inset-0 bg-vegYellow/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-vegGreen text-xl sm:text-2xl lg:text-4xl font-holtwood tracking-wide group-hover:text-vegYellow transition-colors duration-300">
            GABRIEL PASTEL
          </span>
          <span className="text-vegGreen-light text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] -mt-0.5 sm:-mt-1 uppercase">
            {t("vegan100")}
          </span>
        </div>
      </Link>

      {/* Desktop menu */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-6 mr-4">
        <Link
          href="/home"
          className="relative text-base xl:text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          {t("home").toUpperCase()}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/nossa-historia"
          className="relative text-base xl:text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
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
              className="relative text-base xl:text-lg font-semibold text-vegOrange hover:text-vegYellow transition-all duration-300 group"
            >
              {t("admin").toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
        <Link
          href="/nosso-impacto"
          className="relative text-base xl:text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
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
                <div className="absolute right-0 mt-3 w-72 max-w-[calc(100vw-2rem)] bg-background rounded-2xl shadow-2xl border-2 border-vegGreen/20 z-50 overflow-hidden animate-dropdown-in">
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

      {/* Mobile Controls */}
      <div className="flex lg:hidden items-center gap-2 sm:gap-3">
        {/* Order Button - smaller on mobile */}
        <OrderNowBtn size="md" />

        {/* Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 bg-background border-[3px] border-vegGreen hover:border-vegYellow rounded-lg transition-all duration-300"
          aria-label="Menu de navegação"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-vegGreen" />
          ) : (
            <Menu className="w-5 h-5 text-vegGreen" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer - Renderizado via portal */}
      {typeof window !== "undefined" &&
        mobileMenuOpen &&
        createPortal(
          <div className="lg:hidden fixed inset-0 z-[1001]">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer - 80% da tela, começa do topo */}
            <nav
              className="absolute top-0 right-0 w-[80%] max-w-xs h-full bg-pastel shadow-2xl border-l-2 border-vegGreen/30 overflow-y-auto animate-slide-in-right flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Spacer para ficar abaixo do header */}
            <div className="h-16 sm:h-20 flex-shrink-0" />

            {/* User Header */}
            {session ? (
              <div className="bg-gradient-to-r from-vegGreen/10 to-vegYellow/10 p-4 border-b border-vegGreen/20">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-vegGreen to-vegGreen-light flex items-center justify-center text-background font-bold text-lg shadow-md">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-bold text-vegBrown-dark truncate">
                      {session.user?.name}
                    </p>
                    <p className="text-xs text-vegBrown-light truncate">
                      {session.user?.email}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-vegGreen/10 to-vegYellow/10 p-4 border-b border-vegGreen/20">
                <p className="font-bold text-vegBrown-dark">Bem-vindo!</p>
                <p className="text-xs text-vegBrown-light">Faça login para acessar sua conta</p>
              </div>
            )}

            <div className="p-3 space-y-0.5">
              {/* Navigation Links */}
              <Link
                href="/home"
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("home").toUpperCase()}
              </Link>
              <Link
                href="/nossa-historia"
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("ourStory").toUpperCase()}
              </Link>
              <Link
                href="/nosso-impacto"
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("ourImpact").toUpperCase()}
              </Link>

              {/* Divider */}
              <div className="border-t border-vegGreen/20 my-3"></div>

              {/* User Actions */}
              {session ? (
                <>
                  <Link
                    href="/perfil"
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    {t("profile")}
                  </Link>
                  <Link
                    href="/perfil/pedidos"
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {t("myOrders")}
                  </Link>

                  {/* Admin Link */}
                  {(session.user?.role === "ADMIN" ||
                    session.user?.role === "SUPER_ADMIN") && (
                    <Link
                      href="/admin/dashboard"
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegOrange hover:bg-vegOrange/10 rounded-lg transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      {t("adminPanel")}
                    </Link>
                  )}

                  <div className="border-t border-vegGreen/20 my-2"></div>

                  <button
                    type="button"
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegRed hover:bg-vegRed/10 rounded-lg transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    {t("logout")}
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("signin");
                      setAuthModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
                  >
                    <LogIn className="w-4 h-4" />
                    {t("login")}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("signup");
                      setAuthModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-background bg-gradient-to-r from-vegGreen to-vegGreen-light hover:from-vegYellow hover:to-vegOrange rounded-lg transition-all shadow-md"
                  >
                    <UserPlus className="w-4 h-4" />
                    {t("createAccount")}
                  </button>
                </>
              )}

              {/* Divider */}
              <div className="border-t border-vegGreen/20 my-2"></div>

              {/* Language Selector in Mobile Menu */}
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-vegBrown-light mb-1.5 uppercase tracking-wide">
                  Idioma
                </p>
                <LanguageSelector />
              </div>
            </div>

            {/* Spacer flexível */}
            <div className="flex-1" />

            {/* Footer com montanhas */}
            <div className="mt-auto">
              <svg
                viewBox="0 0 320 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMax slice"
              >
                {/* Monte de trás */}
                <path
                  d="M0 80V35C40 28 80 22 120 20C160 18 200 22 240 30C280 38 300 42 320 40V80Z"
                  fill="#064d40"
                />
                {/* Monte do meio */}
                <path
                  d="M0 80V50C50 44 90 40 130 38C170 36 210 40 250 48C290 56 310 58 320 56V80Z"
                  fill="#087a68"
                />
                {/* Monte da frente */}
                <path
                  d="M0 80V65C40 62 80 60 120 58C160 56 200 54 240 56C280 58 300 62 320 64V80Z"
                  fill="#10806e"
                />
              </svg>
            </div>
          </nav>
        </div>,
          document.body,
        )}

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
