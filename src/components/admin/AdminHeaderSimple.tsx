"use client";

import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import {
  Leaf,
  Menu,
  X,
  LayoutDashboard,
  ShoppingBag,
  Carrot,
  Cookie,
  BarChart3,
  Home,
  LogOut,
} from "lucide-react";
import AdminUserMenu from "./AdminUserMenu";
import { useState } from "react";
import { signOut } from "next-auth/react";

interface AdminHeaderSimpleProps {
  session: Session;
}

export default function AdminHeaderSimple({ session }: AdminHeaderSimpleProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/admin/dashboard", label: "DASHBOARD", icon: LayoutDashboard },
    { href: "/admin/pedidos", label: "PEDIDOS", icon: ShoppingBag },
    { href: "/admin/ingredientes", label: "INGREDIENTES", icon: Carrot },
    { href: "/admin/pasteis", label: "PASTÉIS", icon: Cookie },
    { href: "/admin/analytics", label: "ANALYTICS", icon: BarChart3 },
  ];

  return (
    <>
      <header className="w-full h-16 sm:h-20 xl:h-24 px-4 sm:px-6 xl:px-16 bg-gradient-to-r from-background via-pastel to-background flex items-center justify-between shadow-lg backdrop-blur-sm z-[1000] top-0 fixed border-b-2 border-vegGreen/10">
        {/* Decorative elements - hidden on mobile */}
        <Leaf className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 xl:w-8 xl:h-8 text-vegGreen/10 rotate-12 hidden sm:block" />
        <Leaf className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 xl:w-8 xl:h-8 text-vegGreen/10 -rotate-12 hidden sm:block" />

        {/* logo e nome */}
        <Link
          href="/home"
          className="flex items-center gap-2 sm:gap-3 xl:gap-4 group"
        >
          <div className="relative">
            <Image
              src="/icon.png"
              width={104}
              height={110}
              alt="Logo Gabriel Pastel"
              quality={100}
              className="h-[45px] w-[42px] sm:h-[55px] sm:w-[52px] xl:h-[70px] xl:w-[66px] transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
            />
            <div className="absolute inset-0 bg-vegYellow/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-vegGreen text-lg sm:text-2xl xl:text-4xl font-holtwood tracking-wide group-hover:text-vegYellow transition-colors duration-300">
              GABRIEL PASTEL
            </span>
            <span className="text-vegOrange text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] -mt-0.5 sm:-mt-1">
              PAINEL ADMIN
            </span>
          </div>
        </Link>

        {/* Desktop menu admin - apenas em telas xl (1280px+) */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 mr-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm 2xl:text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Voltar ao site */}
          <Link
            href="/home"
            className="px-3 2xl:px-4 py-2 bg-vegGreen hover:bg-vegYellow text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-xs 2xl:text-sm"
          >
            ← VOLTAR
          </Link>

          {/* User Menu - apenas desktop */}
          <AdminUserMenu session={session} />
        </nav>

        {/* Mobile/Tablet controls - botão do menu (aparece abaixo de 1280px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-vegGreen/10 hover:bg-vegGreen/20 transition-colors"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-vegGreen" />
          ) : (
            <Menu className="w-6 h-6 text-vegGreen" />
          )}
        </button>
      </header>

      {/* Mobile/Tablet drawer (aparece abaixo de 1280px) */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 z-[1001] bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav
            className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-pastel shadow-2xl border-l-2 border-vegGreen/30 overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Spacer para ficar abaixo do header */}
            <div className="h-16 sm:h-20 flex-shrink-0" />

            {/* Header do drawer com info do usuário */}
            <div className="bg-vegGreen/10 p-4 border-b border-vegGreen/20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-vegGreen to-vegGreen-light flex items-center justify-center text-background font-bold text-lg shadow-md">
                  {session.user?.name?.charAt(0).toUpperCase() || "A"}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-bold text-vegBrown-dark truncate">
                    {session.user?.name}
                  </p>
                  <p className="text-xs text-vegOrange font-semibold truncate">
                    {session.user.role === "SUPER_ADMIN"
                      ? "Super Admin"
                      : "Admin"}
                  </p>
                </div>
              </div>
            </div>

            {/* Links de navegação */}
            <div className="p-3 space-y-0.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}

              <div className="border-t border-vegGreen/20 my-3"></div>

              <Link
                href="/home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegBrown-dark hover:bg-vegGreen/10 hover:text-vegGreen rounded-lg transition-all"
              >
                <Home className="w-4 h-4" />
                VOLTAR AO SITE
              </Link>

              <div className="border-t border-vegGreen/20 my-2"></div>

              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-vegRed hover:bg-vegRed/10 rounded-lg transition-all"
              >
                <LogOut className="w-4 h-4" />
                SAIR
              </button>
            </div>

            {/* Spacer flexível */}
            <div className="flex-1" />

            {/* Footer com montanhas - igual ao drawer do Header */}
            <div className="mt-auto">
              <svg
                viewBox="0 0 320 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMax slice"
              >
                <path
                  d="M0 80V35C40 28 80 22 120 20C160 18 200 22 240 30C280 38 300 42 320 40V80Z"
                  fill="#064d40"
                />
                <path
                  d="M0 80V50C50 44 90 40 130 38C170 36 210 40 250 48C290 56 310 58 320 56V80Z"
                  fill="#087a68"
                />
                <path
                  d="M0 80V65C40 62 80 60 120 58C160 56 200 54 240 56C280 58 300 62 320 64V80Z"
                  fill="#10806e"
                />
              </svg>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
