import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { BarChart3, TrendingUp, DollarSign } from "lucide-react";

export default async function AnalyticsPage() {
  await requireAdmin();

  // Estatísticas gerais
  const [
    totalOrders,
    totalRevenue,
    averageOrderValue,
    topIngredients,
    topPasteis,
  ] = await Promise.all([
    prisma.order.count(),
    prisma.order.aggregate({
      where: {
        status: { in: ["CONFIRMED", "PREPARING", "READY", "DELIVERED"] },
      },
      _sum: { total: true },
    }),
    prisma.order.aggregate({
      where: {
        status: { in: ["CONFIRMED", "PREPARING", "READY", "DELIVERED"] },
      },
      _avg: { total: true },
    }),
    // Top ingredientes mais usados
    prisma.customPastelIngredient.groupBy({
      by: ["ingredientId"],
      _count: true,
      orderBy: {
        _count: {
          ingredientId: "desc",
        },
      },
      take: 5,
    }),
    // Top pastéis mais vendidos
    prisma.orderItem.groupBy({
      by: ["premadePastelId"],
      where: {
        premadePastelId: { not: null },
      },
      _sum: {
        quantity: true,
      },
      orderBy: {
        _sum: {
          quantity: "desc",
        },
      },
      take: 5,
    }),
  ]);

  // Buscar detalhes dos ingredientes top
  const ingredientIds = topIngredients.map((i) => i.ingredientId);
  const ingredients = await prisma.ingredient.findMany({
    where: { id: { in: ingredientIds } },
    select: { id: true, name: true },
  });

  // Buscar detalhes dos pastéis top
  const pastelIds = topPasteis
    .map((p) => p.premadePastelId)
    .filter((id) => id !== null) as string[];
  const pasteis = await prisma.premadePastel.findMany({
    where: { id: { in: pastelIds } },
    select: { id: true, name: true },
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-holtwood text-vegBrown-dark flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
          <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vegYellow" />
          Analytics
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-vegBrown-light">
          Análise e estatísticas do negócio
        </p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-pastel to-background rounded-xl sm:rounded-2xl border-2 border-vegGreen/20 shadow-lg hover:shadow-xl transition-all p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-vegBrown-light font-semibold uppercase tracking-wider">Total de Pedidos</p>
              <p className="text-2xl sm:text-3xl font-holtwood text-vegBrown-dark mt-2">{totalOrders}</p>
            </div>
            <div className="bg-vegGreen p-3 sm:p-4 rounded-xl">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pastel to-background rounded-xl sm:rounded-2xl border-2 border-vegYellow/20 shadow-lg hover:shadow-xl transition-all p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-vegBrown-light font-semibold uppercase tracking-wider">Receita Total</p>
              <p className="text-2xl sm:text-3xl font-holtwood text-vegBrown-dark mt-2">
                R$ {Number(totalRevenue._sum.total || 0).toFixed(2)}
              </p>
            </div>
            <div className="bg-vegYellow p-3 sm:p-4 rounded-xl">
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pastel to-background rounded-xl sm:rounded-2xl border-2 border-vegOrange/20 shadow-lg hover:shadow-xl transition-all p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-vegBrown-light font-semibold uppercase tracking-wider">Ticket Médio</p>
              <p className="text-2xl sm:text-3xl font-holtwood text-vegBrown-dark mt-2">
                R$ {Number(averageOrderValue._avg.total || 0).toFixed(2)}
              </p>
            </div>
            <div className="bg-vegOrange p-3 sm:p-4 rounded-xl">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Produtos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Top Ingredientes */}
        <div className="bg-gradient-to-br from-pastel to-background rounded-xl sm:rounded-2xl border-2 border-vegGreen/20 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-vegGreen/10 to-vegYellow/10 px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-vegGreen/20">
            <h2 className="text-base sm:text-lg lg:text-xl font-holtwood text-vegBrown-dark">
              Ingredientes Mais Populares
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {topIngredients.map((item, index) => {
                const ingredient = ingredients.find(
                  (i) => i.id === item.ingredientId,
                );
                return (
                  <div
                    key={item.ingredientId}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-vegGreen/30">
                        #{index + 1}
                      </span>
                      <span className="text-vegBrown-dark font-medium text-sm sm:text-base">
                        {ingredient?.name || "Desconhecido"}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-vegGreen bg-vegGreen/10 px-2 sm:px-3 py-1 rounded-full">
                      {item._count} usos
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top Pastéis */}
        <div className="bg-gradient-to-br from-pastel to-background rounded-xl sm:rounded-2xl border-2 border-vegOrange/20 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-vegOrange/10 to-vegYellow/10 px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-vegOrange/20">
            <h2 className="text-base sm:text-lg lg:text-xl font-holtwood text-vegBrown-dark">
              Pastéis Mais Vendidos
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {topPasteis.map((item, index) => {
                const pastel = pasteis.find(
                  (p) => p.id === item.premadePastelId,
                );
                return (
                  <div
                    key={item.premadePastelId}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-vegOrange/30">
                        #{index + 1}
                      </span>
                      <span className="text-vegBrown-dark font-medium text-sm sm:text-base">
                        {pastel?.name || "Desconhecido"}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-vegOrange bg-vegOrange/10 px-2 sm:px-3 py-1 rounded-full">
                      {item._sum.quantity} vendidos
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
