import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Sparkles, Filter } from "lucide-react";
import OrdersTableThemed from "@/components/admin/OrdersTableThemed";

export default async function PedidosPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  await requireAdmin();

  // Filtros
  const where: any = {};

  if (searchParams.status && searchParams.status !== "all") {
    where.status = searchParams.status;
  }

  // Buscar pedidos
  const orders = await prisma.order.findMany({
    where,
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      orderItems: {
        include: {
          premadePastel: true,
          customPastel: {
            include: {
              ingredients: {
                include: {
                  ingredient: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const filterButtons = [
    { label: "Todos", value: "all", color: "vegBrown" },
    { label: "Pendentes", value: "PENDING", color: "vegYellow" },
    { label: "Confirmados", value: "CONFIRMED", color: "vegGreen" },
    { label: "Preparando", value: "PREPARING", color: "vegOrange" },
    { label: "Prontos", value: "READY", color: "vegGreen" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-4 justify-center">
          <Sparkles className="w-12 h-12 text-vegYellow" />
          Gerenciar Pedidos
        </h1>
        <p className="text-xl text-vegBrown-light">
          Acompanhe e gerencie todos os pedidos do seu negócio
        </p>
      </div>

      {/* Filtros com estética do site */}
      <div className="bg-gradient-to-br from-pastel to-background rounded-2xl border-2 border-vegGreen/20 shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-6 h-6 text-vegGreen" />
          <h3 className="text-xl font-holtwood text-vegBrown-dark">
            Filtrar por Status
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {filterButtons.map((btn) => {
            const isActive =
              (!searchParams.status && btn.value === "all") ||
              searchParams.status === btn.value;
            const colorClasses = {
              vegBrown: isActive
                ? "bg-vegBrown text-background"
                : "bg-vegBrown/10 text-vegBrown hover:bg-vegBrown/20",
              vegYellow: isActive
                ? "bg-vegYellow text-background"
                : "bg-vegYellow/10 text-vegYellow-dark hover:bg-vegYellow/20",
              vegGreen: isActive
                ? "bg-vegGreen text-background"
                : "bg-vegGreen/10 text-vegGreen hover:bg-vegGreen/20",
              vegOrange: isActive
                ? "bg-vegOrange text-background"
                : "bg-vegOrange/10 text-vegOrange hover:bg-vegOrange/20",
            };

            return (
              <Link
                key={btn.value}
                href={
                  btn.value === "all"
                    ? "/admin/pedidos"
                    : `/admin/pedidos?status=${btn.value}`
                }
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border-2 ${
                  isActive ? "border-transparent" : "border-transparent"
                } ${colorClasses[btn.color as keyof typeof colorClasses]}`}
              >
                {btn.label}
              </Link>
            );
          })}
        </div>
      </div>

      <OrdersTableThemed orders={orders} />
    </div>
  );
}
