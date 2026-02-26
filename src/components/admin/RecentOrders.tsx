import Link from "next/link";
import { Eye } from "lucide-react";

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800",
  CONFIRMED: "bg-blue-100 text-blue-800",
  PREPARING: "bg-orange-100 text-orange-800",
  READY: "bg-green-100 text-green-800",
  DELIVERED: "bg-gray-100 text-gray-800",
  CANCELLED: "bg-red-100 text-red-800",
};

const statusLabels = {
  PENDING: "Pendente",
  CONFIRMED: "Confirmado",
  PREPARING: "Preparando",
  READY: "Pronto",
  DELIVERED: "Entregue",
  CANCELLED: "Cancelado",
};

interface RecentOrdersProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orders: any[];
}

export default function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pedido
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cliente
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-mono text-sm font-medium">
                  #{order.id.slice(0, 8)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <p className="font-medium text-gray-900">
                    {order.customerName}
                  </p>
                  <p className="text-sm text-gray-500">{order.customerEmail}</p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="font-semibold text-gray-900">
                  R$ {Number(order.total).toFixed(2)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}
                >
                  {statusLabels[order.status as keyof typeof statusLabels]}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link
                  href={`/admin/pedidos/${order.id}`}
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                >
                  <Eye className="w-4 h-4" />
                  Ver
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
