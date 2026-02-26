import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { Prisma, OrderStatus } from "@/generated/prisma";
import Link from "next/link";
import { Sparkles, Filter } from "lucide-react";
import OrdersTableThemed from "@/components/admin/OrdersTableThemed";

export default async function PedidosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  await requireAdmin();
  const params = await searchParams;

  // Filtros
  const where: Prisma.OrderWhereInput = {};

  if (params.status && params.status !== "all") {
    where.status = params.status as OrderStatus;
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
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-holtwood text-vegBrown-dark flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vegYellow" />
          Gerenciar Pedidos
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-vegBrown-light">
          Acompanhe e gerencie todos os pedidos do seu negócio
        </p>
      </div>

      {/* Filtros com estética do site */}
      <div className="bg-gradient-to-br from-pastel to-background rounded-xl sm:rounded-2xl border-2 border-vegGreen/20 shadow-lg p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Filter className="w-5 h-5 sm:w-6 sm:h-6 text-vegGreen" />
          <h3 className="text-base sm:text-lg lg:text-xl font-holtwood text-vegBrown-dark">
            Filtrar por Status
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {filterButtons.map((btn) => {
            const isActive =
              (!params.status && btn.value === "all") ||
              params.status === btn.value;
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
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border-2 ${
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
