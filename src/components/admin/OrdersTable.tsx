"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { toast } from "sonner";

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

const statusOptions = [
  "PENDING",
  "CONFIRMED",
  "PREPARING",
  "READY",
  "DELIVERED",
  "CANCELLED",
];

interface OrdersTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orders: any[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  const updateStatus = async (orderId: string, newStatus: string) => {
    setUpdatingStatus(orderId);

    try {
      const res = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error();

      toast.success("Status atualizado!");
      window.location.reload();
    } catch {
      toast.error("Erro ao atualizar status");
    } finally {
      setUpdatingStatus(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Pedido
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Cliente
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Total
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Data
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="font-mono text-sm font-semibold">
                    #{order.id.slice(0, 8)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{order.customerName}</p>
                    <p className="text-sm text-gray-500">
                      {order.customerEmail}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold">
                    R$ {Number(order.total).toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    disabled={updatingStatus === order.id}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border-0 cursor-pointer ${statusColors[order.status as keyof typeof statusColors]}`}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {statusLabels[status as keyof typeof statusLabels]}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                  </span>
                </td>
                <td className="px-6 py-4">
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
    </div>
  );
}
