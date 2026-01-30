"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { User, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AdminUserMenuProps {
  session: Session;
}

export default function AdminUserMenu({ session }: AdminUserMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative ml-2" ref={menuRef}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="group flex items-center justify-center w-12 h-12 bg-background border-[3px] border-vegOrange hover:border-vegYellow hover:bg-vegOrange/5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 relative"
        aria-label="Menu do usuário"
      >
        <User className="w-6 h-6 text-vegOrange group-hover:text-vegYellow transition-colors" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-vegOrange rounded-full border-2 border-background"></span>
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-background rounded-2xl shadow-2xl border-2 border-vegOrange/30 z-50 overflow-hidden animate-dropdown-in">
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
                  {session.user.role === "SUPER_ADMIN"
                    ? "Super Admin"
                    : "Admin"}
                </p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center gap-3 px-5 py-3 text-vegRed hover:bg-red-50 transition-all duration-200 group"
            >
              <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Sair</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
