"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { toast } from "sonner";

const statusColors: Record<string, string> = {
  PENDING: "bg-vegYellow/20 text-vegYellow-dark border-vegYellow/40",
  CONFIRMED: "bg-vegGreen/20 text-vegGreen-dark border-vegGreen/40",
  PREPARING: "bg-vegOrange/20 text-vegOrange-dark border-vegOrange/40",
  READY: "bg-vegGreen-light/20 text-vegGreen-light border-vegGreen-light/40",
  DELIVERED: "bg-vegBrown/20 text-vegBrown-dark border-vegBrown/40",
  CANCELLED: "bg-vegRed/20 text-vegRed-dark border-vegRed/40",
};

const statusLabels: Record<string, string> = {
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

interface OrdersTableThemedProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orders: any[];
}

export default function OrdersTableThemed({ orders }: OrdersTableThemedProps) {
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

      toast.success("Status atualizado com sucesso!");
      window.location.reload();
    } catch {
      toast.error("Erro ao atualizar status");
    } finally {
      setUpdatingStatus(null);
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-vegGreen/20 shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-vegGreen/10 border-b border-vegGreen/20">
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Pedido
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Total
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Status
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Data
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-vegGreen/10">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-vegGreen/5 transition-colors duration-200"
              >
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <span className="font-mono text-xs sm:text-sm font-bold text-vegBrown-dark bg-vegYellow/20 px-2 sm:px-3 py-1 rounded-full">
                    #{order.id.slice(0, 8)}
                  </span>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <div>
                    <p className="font-semibold text-vegBrown-dark text-sm sm:text-base">
                      {order.customerName}
                    </p>
                    <p className="text-xs sm:text-sm text-vegBrown-light truncate max-w-[150px] sm:max-w-none">
                      {order.customerEmail}
                    </p>
                  </div>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-vegGreen">
                    R$ {Number(order.total).toFixed(2)}
                  </span>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    disabled={updatingStatus === order.id}
                    className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${statusColors[order.status as keyof typeof statusColors]}`}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {statusLabels[status as keyof typeof statusLabels]}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <span className="text-xs sm:text-sm text-vegBrown-light font-semibold">
                    {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                  </span>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <Link
                    href={`/admin/pedidos/${order.id}`}
                    className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-vegGreen/10 hover:bg-vegGreen text-vegGreen hover:text-background rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 font-semibold text-xs sm:text-sm border-2 border-vegGreen/20 hover:border-vegGreen"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
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
