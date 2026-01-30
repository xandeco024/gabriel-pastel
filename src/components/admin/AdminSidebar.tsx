"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  UtensilsCrossed,
  Users,
  BarChart3,
} from "lucide-react";
import { Session } from "next-auth";

interface AdminSidebarProps {
  session: Session;
}

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Pedidos",
    href: "/admin/pedidos",
    icon: ShoppingBag,
  },
  {
    label: "Ingredientes",
    href: "/admin/ingredientes",
    icon: Package,
  },
  {
    label: "Pastéis",
    href: "/admin/pasteis",
    icon: UtensilsCrossed,
  },
  {
    label: "Usuários",
    href: "/admin/usuarios",
    icon: Users,
    superAdminOnly: true,
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
];

export default function AdminSidebar({ session }: AdminSidebarProps) {
  const pathname = usePathname();
  const isSuperAdmin = session.user.role === "SUPER_ADMIN";

  const filteredItems = menuItems.filter(
    (item) => !item.superAdminOnly || isSuperAdmin,
  );

  return (
    <div className="w-64 bg-white shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-green-600">Gabriel Pastel</h2>
        <p className="text-sm text-gray-600 mt-1">Painel Admin</p>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-700 font-semibold">
              {session.user.name?.[0]?.toUpperCase() || "A"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {session.user.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {session.user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
