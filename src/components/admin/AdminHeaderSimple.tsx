import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { Leaf } from "lucide-react";
import AdminUserMenu from "./AdminUserMenu";

interface AdminHeaderSimpleProps {
  session: Session;
}

export default function AdminHeaderSimple({ session }: AdminHeaderSimpleProps) {
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
          <span className="text-vegOrange text-xs font-semibold tracking-[0.2em] -mt-1">
            PAINEL ADMIN
          </span>
        </div>
      </Link>

      {/* menu admin */}
      <nav className="flex items-center gap-6 mr-4">
        <Link
          href="/admin/dashboard"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          DASHBOARD
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/admin/pedidos"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          PEDIDOS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/admin/ingredientes"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          INGREDIENTES
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/admin/pasteis"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          PASTÉIS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/admin/analytics"
          className="relative text-lg font-semibold text-vegGreen hover:text-vegYellow transition-all duration-300 group"
        >
          ANALYTICS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vegYellow group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Voltar ao site */}
        <Link
          href="/home"
          className="px-4 py-2 bg-gradient-to-r from-vegGreen to-vegGreen-light text-background rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-sm"
        >
          ← VOLTAR AO SITE
        </Link>

        {/* User Menu */}
        <AdminUserMenu session={session} />
      </nav>
    </header>
  );
}
