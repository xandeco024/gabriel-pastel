import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import {
  Sparkles,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await requireAdmin();

  // Buscar estatísticas
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [
    todayOrders,
    todayRevenue,
    pendingOrders,
    totalCustomers,
    recentOrders,
  ] = await Promise.all([
    prisma.order.count({
      where: { createdAt: { gte: today } },
    }),
    prisma.order.aggregate({
      where: {
        createdAt: { gte: today },
        status: { in: ["CONFIRMED", "PREPARING", "READY", "DELIVERED"] },
      },
      _sum: { total: true },
    }),
    prisma.order.count({
      where: { status: { in: ["PENDING", "CONFIRMED"] } },
    }),
    prisma.user.count({
      where: { role: "CUSTOMER" },
    }),
    prisma.order.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    }),
  ]);

  const stats = [
    {
      label: "Pedidos Hoje",
      value: todayOrders,
      icon: TrendingUp,
      color: "vegGreen",
      href: "/admin/pedidos",
    },
    {
      label: "Receita Hoje",
      value: `R$ ${Number(todayRevenue._sum.total || 0).toFixed(2)}`,
      icon: DollarSign,
      color: "vegYellow",
      href: "/admin/analytics",
    },
    {
      label: "Pedidos Pendentes",
      value: pendingOrders,
      icon: Clock,
      color: "vegOrange",
      href: "/admin/pedidos?status=PENDING",
      alert: pendingOrders > 5,
    },
    {
      label: "Total de Clientes",
      value: totalCustomers,
      icon: Users,
      color: "vegBrown",
      href: "/admin/usuarios",
    },
  ];

  const statusColors: Record<string, string> = {
    PENDING: "bg-vegYellow/20 text-vegYellow-dark border-vegYellow/30",
    CONFIRMED: "bg-vegGreen/20 text-vegGreen-dark border-vegGreen/30",
    PREPARING: "bg-vegOrange/20 text-vegOrange-dark border-vegOrange/30",
    READY: "bg-vegGreen-light/20 text-vegGreen-light border-vegGreen-light/30",
    DELIVERED: "bg-vegBrown/20 text-vegBrown-dark border-vegBrown/30",
    CANCELLED: "bg-vegRed/20 text-vegRed-dark border-vegRed/30",
  };

  const statusLabels: Record<string, string> = {
    PENDING: "Pendente",
    CONFIRMED: "Confirmado",
    PREPARING: "Preparando",
    READY: "Pronto",
    DELIVERED: "Entregue",
    CANCELLED: "Cancelado",
  };

  return (
    <div className="space-y-12">
      {/* Header com estética do site */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-holtwood text-vegBrown-dark flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vegYellow" />
          Painel Administrativo
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-vegBrown-light">
          Bem-vindo,{" "}
          <span className="font-bold text-vegGreen">{session.user.name}</span>!
          Gerencie seu negócio com facilidade.
        </p>
      </div>

      {/* Quick Links - Menu de navegação estilo site */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link
          href="/admin/pedidos"
          className="group bg-gradient-to-br from-vegGreen/10 to-vegGreen/5 hover:from-vegGreen/20 hover:to-vegGreen/10 rounded-2xl p-6 border-2 border-vegGreen/20 hover:border-vegGreen shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <ShoppingBag className="w-10 h-10 text-vegGreen mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-holtwood text-vegBrown-dark">Pedidos</h3>
          <p className="text-sm text-vegBrown-light mt-1">Gerenciar pedidos</p>
        </Link>

        <Link
          href="/admin/ingredientes"
          className="group bg-gradient-to-br from-vegYellow/10 to-vegYellow/5 hover:from-vegYellow/20 hover:to-vegYellow/10 rounded-2xl p-6 border-2 border-vegYellow/20 hover:border-vegYellow shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="w-10 h-10 text-vegYellow mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-holtwood text-vegBrown-dark">
            Ingredientes
          </h3>
          <p className="text-sm text-vegBrown-light mt-1">CRUD completo</p>
        </Link>

        <Link
          href="/admin/pasteis"
          className="group bg-gradient-to-br from-vegOrange/10 to-vegOrange/5 hover:from-vegOrange/20 hover:to-vegOrange/10 rounded-2xl p-6 border-2 border-vegOrange/20 hover:border-vegOrange shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="w-10 h-10 text-vegOrange mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-holtwood text-vegBrown-dark">Pastéis</h3>
          <p className="text-sm text-vegBrown-light mt-1">Cardápio</p>
        </Link>

        <Link
          href="/admin/analytics"
          className="group bg-gradient-to-br from-vegBrown/10 to-vegBrown/5 hover:from-vegBrown/20 hover:to-vegBrown/10 rounded-2xl p-6 border-2 border-vegBrown/20 hover:border-vegBrown shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <TrendingUp className="w-10 h-10 text-vegBrown mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-holtwood text-vegBrown-dark">
            Analytics
          </h3>
          <p className="text-sm text-vegBrown-light mt-1">Estatísticas</p>
        </Link>
      </div>

      {/* Stats Cards com cores do site */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            vegGreen: "from-vegGreen/10 to-vegGreen/5 border-vegGreen/30",
            vegYellow: "from-vegYellow/10 to-vegYellow/5 border-vegYellow/30",
            vegOrange: "from-vegOrange/10 to-vegOrange/5 border-vegOrange/30",
            vegBrown: "from-vegBrown/10 to-vegBrown/5 border-vegBrown/30",
          };

          const iconColors = {
            vegGreen: "text-vegGreen",
            vegYellow: "text-vegYellow",
            vegOrange: "text-vegOrange",
            vegBrown: "text-vegBrown-dark",
          };

          return (
            <Link
              key={stat.label}
              href={stat.href}
              className={`group bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-2xl p-6 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                stat.alert ? "ring-4 ring-vegRed/30 animate-pulse" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-vegBrown-light uppercase tracking-wider">
                  {stat.label}
                </p>
                <Icon
                  className={`w-6 h-6 ${iconColors[stat.color as keyof typeof iconColors]} group-hover:scale-110 transition-transform`}
                />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-holtwood text-vegBrown-dark">
                {stat.value}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Pedidos Recentes com estética do site */}
      <div className="bg-gradient-to-br from-pastel to-background rounded-2xl sm:rounded-3xl border-2 border-vegGreen/20 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-vegGreen/10 to-vegYellow/10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b-2 border-vegGreen/20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-holtwood text-vegBrown-dark">
            Pedidos Recentes
          </h2>
        </div>
        <div className="p-4 sm:p-6">
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <Link
                key={order.id}
                href={`/admin/pedidos/${order.id}`}
                className="group block bg-background hover:bg-vegGreen/5 rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-vegGreen/10 hover:border-vegGreen/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-vegBrown-dark bg-vegYellow/20 px-2 sm:px-3 py-1 rounded-full">
                        #{order.id.slice(0, 8)}
                      </span>
                      <span
                        className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full border ${statusColors[order.status]}`}
                      >
                        {statusLabels[order.status]}
                      </span>
                    </div>
                    <p className="font-semibold text-vegBrown-dark text-sm sm:text-base">
                      {order.customerName}
                    </p>
                    <p className="text-xs sm:text-sm text-vegBrown-light truncate">
                      {order.customerEmail}
                    </p>
                  </div>
                  <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-vegGreen">
                      R$ {Number(order.total).toFixed(2)}
                    </p>
                    <p className="text-xs sm:text-sm text-vegBrown-light">
                      {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
