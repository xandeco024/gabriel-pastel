import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";

interface StatsCardsProps {
  todayOrders: number;
  todayRevenue: number;
  pendingOrders: number;
  totalCustomers: number;
}

export default function StatsCards({
  todayOrders,
  todayRevenue,
  pendingOrders,
  totalCustomers,
}: StatsCardsProps) {
  const stats = [
    {
      label: "Pedidos Hoje",
      value: todayOrders,
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      label: "Receita Hoje",
      value: `R$ ${todayRevenue.toFixed(2)}`,
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      label: "Pedidos Pendentes",
      value: pendingOrders,
      icon: Clock,
      color: "bg-yellow-500",
      alert: pendingOrders > 5,
    },
    {
      label: "Total de Clientes",
      value: totalCustomers,
      icon: Users,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-white rounded-lg shadow p-6 ${
            stat.alert ? "ring-2 ring-red-500" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
            <div className={`${stat.color} p-4 rounded-xl`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
