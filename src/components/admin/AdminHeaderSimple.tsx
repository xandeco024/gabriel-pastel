"use client";

import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { Leaf, Menu, X, LayoutDashboard, ShoppingBag, Carrot, Cookie, BarChart3, Home, LogOut } from "lucide-react";
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
        <Link href="/home" className="flex items-center gap-2 sm:gap-3 xl:gap-4 group">
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
            className="px-3 2xl:px-4 py-2 bg-gradient-to-r from-vegGreen to-vegGreen-light text-background rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-xs 2xl:text-sm"
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
        <div className="xl:hidden fixed inset-0 z-[1001] bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <nav
            className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-pastel shadow-2xl opacity-100 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do drawer com info do usuário */}
            <div className="bg-gradient-to-br from-vegOrange/10 to-vegYellow/5 p-5 border-b-2 border-vegOrange/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vegOrange to-vegYellow flex items-center justify-center text-background font-bold text-xl shadow-md">
                  {session.user?.name?.charAt(0).toUpperCase() || "A"}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-bold text-vegBrown-dark text-lg truncate">
                    {session.user?.name}
                  </p>
                  <p className="text-xs text-vegBrown-light truncate">
                    {session.user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin"}
                  </p>
                </div>
              </div>
            </div>

            {/* Links de navegação */}
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-vegGreen hover:bg-vegGreen/10 hover:text-vegYellow transition-all font-semibold"
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                );
              })}

              <div className="border-t border-vegGreen/20 my-4"></div>

              <Link
                href="/home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-vegGreen text-background hover:bg-vegGreen-light transition-all font-semibold"
              >
                <Home className="w-5 h-5" />
                VOLTAR AO SITE
              </Link>

              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-vegRed hover:bg-vegRed/10 transition-all font-semibold"
              >
                <LogOut className="w-5 h-5" />
                SAIR
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
