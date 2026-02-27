"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";

const statusColors: Record<string, string> = {
  PENDING: "bg-vegYellow/20 text-vegYellow border-vegYellow/40",
  CONFIRMED: "bg-vegGreen/20 text-vegGreen border-vegGreen/40",
  PREPARING: "bg-vegOrange/20 text-vegOrange border-vegOrange/40",
  READY: "bg-vegGreen-light/20 text-vegGreen-light border-vegGreen-light/40",
  DELIVERED: "bg-vegBrown/20 text-vegBrown-dark border-vegBrown/40",
  CANCELLED: "bg-vegRed/20 text-vegRed border-vegRed/40",
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
  { value: "PENDING", label: "Pendente" },
  { value: "CONFIRMED", label: "Confirmado" },
  { value: "PREPARING", label: "Preparando" },
  { value: "READY", label: "Pronto" },
  { value: "DELIVERED", label: "Entregue" },
  { value: "CANCELLED", label: "Cancelado" },
];

interface OrderStatusUpdaterProps {
  orderId: string;
  currentStatus: string;
}

export default function OrderStatusUpdater({
  orderId,
  currentStatus,
}: OrderStatusUpdaterProps) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (newStatus: string) => {
    if (newStatus === status || loading) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error();
      setStatus(newStatus);
      toast.success("Status atualizado!", {
        description: `Pedido marcado como ${statusLabels[newStatus]}`,
      });
      router.refresh();
    } catch {
      toast.error("Erro ao atualizar status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-vegGreen/20 shadow-lg overflow-hidden">
      <div className="bg-vegGreen/10 px-6 py-4 border-b border-vegGreen/20">
        <h2 className="text-base sm:text-lg font-holtwood text-vegBrown-dark flex items-center gap-2">
          <RefreshCw
            className={`w-5 h-5 text-vegGreen ${loading ? "animate-spin" : ""}`}
          />
          Atualizar Status
        </h2>
      </div>
      <div className="p-4 sm:p-5 space-y-4">
        {/* Status atual */}
        <div className="space-y-1.5">
          <p className="text-xs text-vegBrown-light font-semibold uppercase tracking-wider">
            Status atual
          </p>
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 ${statusColors[status]}`}
          >
            <span className="w-2 h-2 rounded-full bg-current" />
            {statusLabels[status]}
          </span>
        </div>

        {/* Botões de mudança */}
        <div className="space-y-2">
          <p className="text-xs text-vegBrown-light font-semibold uppercase tracking-wider">
            Alterar para
          </p>
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleUpdate(opt.value)}
              disabled={loading || opt.value === status}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                opt.value === status
                  ? `${statusColors[opt.value]} opacity-70 cursor-default`
                  : "bg-background border-vegGreen/10 text-vegBrown-dark hover:border-vegGreen/40 hover:bg-vegGreen/5 hover:scale-[1.02]"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {opt.value === status ? `✓ ${opt.label}` : opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
