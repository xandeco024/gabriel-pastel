"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Package,
  Loader2,
  Clock,
  Check,
  Truck,
  ChefHat,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { useTranslations } from "next-intl";

type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PREPARING"
  | "READY"
  | "DELIVERED"
  | "CANCELLED";

type Order = {
  id: string;
  status: OrderStatus;
  total: number;
  customerName: string;
  customerEmail: string;
  createdAt: string;
  orderItems: Array<{
    id: string;
    type: "CUSTOM" | "PREMADE";
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    customPastel?: {
      ingredients: Array<{
        ingredient: {
          id: string;
          name: string;
        };
      }>;
    };
    premadePastel?: {
      id: string;
      name: string;
      ingredients: Array<{
        ingredient: {
          id: string;
          name: string;
        };
      }>;
    };
  }>;
};

const statusStyles = {
  PENDING: {
    icon: Clock,
    label: "Pendente",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  CONFIRMED: {
    icon: Check,
    label: "Confirmado",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  PREPARING: {
    icon: ChefHat,
    label: "Preparando",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  READY: {
    icon: Package,
    label: "Pronto",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  DELIVERED: {
    icon: Truck,
    label: "Entregue",
    color: "text-vegGreen",
    bgColor: "bg-vegGreen/10",
    borderColor: "border-vegGreen/20",
  },
  CANCELLED: {
    icon: AlertCircle,
    label: "Cancelado",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
};

export default function PedidosPage() {
  const t = useTranslations("orders");
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [reordering, setReordering] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchOrders();
    }
  }, [session]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders");
      if (!response.ok) throw new Error("Failed to fetch orders");

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error(t("loadError"));
    } finally {
      setLoading(false);
    }
  };

  const handleReorder = async (order: Order) => {
    setReordering(order.id);

    try {
      // Preparar dados do pedido
      const orderData = {
        items: order.orderItems
          .map((item) => {
            if (item.type === "CUSTOM" && item.customPastel) {
              return {
                type: "CUSTOM" as const,
                ingredientIds: item.customPastel.ingredients.map(
                  (ing) => ing.ingredient.id,
                ),
                quantity: item.quantity,
              };
            } else if (item.type === "PREMADE" && item.premadePastel) {
              return {
                type: "PREMADE" as const,
                premadePastelId: item.premadePastel.id,
                quantity: item.quantity,
              };
            }
            return null;
          })
          .filter(Boolean),
        customerName: session?.user?.name || order.customerName,
        customerEmail: session?.user?.email || order.customerEmail,
      };

      // Criar novo pedido
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to reorder");
      }

      const newOrder = await response.json();

      toast.success(t("reorderSuccess"), {
        description: t("reorderSuccessDescription", {
          id: newOrder.id.substring(0, 8),
        }),
      });

      // Recarregar lista de pedidos
      fetchOrders();
    } catch (error) {
      console.error("Error reordering:", error);
      toast.error(t("reorderError"));
    } finally {
      setReordering(null);
    }
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen mt-24 pt-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-vegGreen" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen mt-24 pt-24">
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "var(--font-gluten)",
          },
        }}
      />

      <div className="container mx-auto px-4 md:px-60 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-4 justify-center">
            <Package className="w-12 h-12 text-vegYellow" />
            {t("title")}
          </h1>
          <p
            className="text-xl text-vegBrown-light max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t.raw("subtitle") }}
          />
        </div>

        {orders.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-16 text-center">
            <Package
              size={96}
              className="mx-auto mb-6 text-vegYellow/40"
              strokeWidth={1.5}
            />
            <h2 className="text-3xl font-holtwood mb-4 text-vegBrown-dark">
              {t("emptyTitle")}
            </h2>
            <p
              className="text-xl text-vegBrown-light mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.raw("emptyDescription") }}
            />
            <button
              onClick={() => router.push("/monte-seu-pastel")}
              className="bg-vegGreen hover:bg-vegGreen/90 text-white py-4 px-10 rounded-lg font-holtwood text-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              {t("makeFirstOrder")}
            </button>
          </div>
        ) : (
          <div className="space-y-8 max-w-4xl mx-auto">
            {orders.map((order) => {
              const statusInfo = statusStyles[order.status];
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={order.id}
                  className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${statusInfo.borderColor} hover:shadow-2xl transition-shadow duration-300`}
                >
                  {/* Header do Pedido */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-holtwood text-vegBrown-dark">
                          {t("orderNumber", { id: order.id.substring(0, 8) })}
                        </h3>
                        <span
                          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${statusInfo.color} ${statusInfo.bgColor} shadow-sm`}
                        >
                          <StatusIcon size={18} />
                          {t(`status.${order.status}`)}
                        </span>
                      </div>
                      <p className="text-base text-vegBrown-light">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-vegGreen drop-shadow-sm">
                        {formatPrice(Number(order.total))}
                      </p>
                    </div>
                  </div>

                  {/* Items do Pedido */}
                  <div className="space-y-4 py-6 border-t border-b border-gray-200">
                    {order.orderItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-vegGreen/5 p-4 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-vegBrown-dark text-lg">
                            {item.type === "CUSTOM" && item.customPastel ? (
                              <>
                                <span className="text-vegYellow text-xl">
                                  ●{" "}
                                </span>
                                {t("customPastel")}
                              </>
                            ) : item.type === "PREMADE" &&
                              item.premadePastel ? (
                              <>
                                <span className="text-vegGreen text-xl">
                                  ●{" "}
                                </span>
                                {item.premadePastel.name}
                              </>
                            ) : (
                              "Pastel"
                            )}
                          </p>
                          <p className="text-sm text-vegBrown-light mt-1 leading-relaxed">
                            {item.type === "CUSTOM" && item.customPastel
                              ? item.customPastel.ingredients
                                  .map((ing) => ing.ingredient.name)
                                  .join(", ")
                              : item.type === "PREMADE" && item.premadePastel
                                ? item.premadePastel.ingredients
                                    .map((ing) => ing.ingredient.name)
                                    .join(", ")
                                : ""}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-vegBrown-dark font-semibold">
                            {item.quantity}x{" "}
                            {formatPrice(Number(item.unitPrice))}
                          </p>
                          <p className="text-base font-bold text-vegGreen">
                            {formatPrice(Number(item.totalPrice))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ações */}
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => handleReorder(order)}
                      disabled={reordering === order.id}
                      className="flex items-center gap-2 px-6 py-3 bg-vegGreen/10 hover:bg-vegGreen hover:text-white text-vegGreen rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:scale-105"
                    >
                      {reordering === order.id ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          {t("processing")}
                        </>
                      ) : (
                        <>
                          <RefreshCw size={20} />
                          {t("orderAgain")}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
