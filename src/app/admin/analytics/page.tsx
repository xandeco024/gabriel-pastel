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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Análise e estatísticas do negócio</p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total de Pedidos</p>
              <p className="text-3xl font-bold mt-2">{totalOrders}</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Receita Total</p>
              <p className="text-3xl font-bold mt-2">
                R$ {Number(totalRevenue._sum.total || 0).toFixed(2)}
              </p>
            </div>
            <div className="bg-green-500 p-4 rounded-xl">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ticket Médio</p>
              <p className="text-3xl font-bold mt-2">
                R$ {Number(averageOrderValue._avg.total || 0).toFixed(2)}
              </p>
            </div>
            <div className="bg-purple-500 p-4 rounded-xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Produtos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Ingredientes */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Ingredientes Mais Populares
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topIngredients.map((item, index) => {
                const ingredient = ingredients.find(
                  (i) => i.id === item.ingredientId,
                );
                return (
                  <div
                    key={item.ingredientId}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-300">
                        #{index + 1}
                      </span>
                      <span className="text-gray-900 font-medium">
                        {ingredient?.name || "Desconhecido"}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      {item._count} usos
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top Pastéis */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Pastéis Mais Vendidos
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topPasteis.map((item, index) => {
                const pastel = pasteis.find(
                  (p) => p.id === item.premadePastelId,
                );
                return (
                  <div
                    key={item.premadePastelId}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-300">
                        #{index + 1}
                      </span>
                      <span className="text-gray-900 font-medium">
                        {pastel?.name || "Desconhecido"}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
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
