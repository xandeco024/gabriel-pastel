import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  ShoppingBag,
  Leaf,
  Clock,
  Hash,
} from "lucide-react";
import OrderStatusUpdater from "@/components/admin/OrderStatusUpdater";

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

const statusDots: Record<string, string> = {
  PENDING: "bg-vegYellow",
  CONFIRMED: "bg-vegGreen",
  PREPARING: "bg-vegOrange",
  READY: "bg-vegGreen-light",
  DELIVERED: "bg-vegBrown-dark",
  CANCELLED: "bg-vegRed",
};

type StatusHistoryEntry = {
  status: string;
  timestamp: string;
  changedBy: string;
};

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;

  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      user: {
        select: { name: true, email: true },
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
  });

  if (!order) notFound();

  const statusHistory: StatusHistoryEntry[] = Array.isArray(order.statusHistory)
    ? (order.statusHistory as StatusHistoryEntry[])
    : [];

  const totalItems = order.orderItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Navegação de volta */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Link
          href="/admin/pedidos"
          className="inline-flex items-center gap-2 text-vegGreen hover:text-vegYellow font-semibold transition-colors group w-fit"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar aos Pedidos
        </Link>
        <div className="flex-1" />
        <span className="font-mono text-xs sm:text-sm font-bold text-vegBrown-dark bg-vegYellow/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit">
          #{order.id.slice(0, 8)}...{order.id.slice(-6)}
        </span>
      </div>

      {/* Título e status */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-holtwood text-vegBrown-dark flex items-center gap-3">
          <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-vegGreen hidden sm:block" />
          Detalhes do Pedido
        </h1>
        <div className="flex flex-wrap gap-3 items-center">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border-2 ${statusColors[order.status]}`}
          >
            <span
              className={`w-2 h-2 rounded-full ${statusDots[order.status]}`}
            />
            {statusLabels[order.status]}
          </span>
          <span className="text-sm text-vegBrown-light flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {new Date(order.createdAt).toLocaleString("pt-BR")}
          </span>
        </div>
      </div>

      {/* Grid principal - 2 colunas no desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Coluna esquerda - 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informações do Cliente */}
          <div className="bg-white rounded-2xl border-2 border-vegGreen/20 shadow-lg overflow-hidden">
            <div className="bg-vegGreen/10 px-5 sm:px-6 py-4 border-b border-vegGreen/20">
              <h2 className="text-base sm:text-xl font-holtwood text-vegBrown-dark flex items-center gap-2">
                <User className="w-5 h-5 text-vegGreen" />
                Informações do Cliente
              </h2>
            </div>
            <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-vegBrown-light uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  Nome
                </p>
                <p className="font-semibold text-vegBrown-dark">
                  {order.customerName}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-vegBrown-light uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </p>
                <p className="font-semibold text-vegBrown-dark text-sm break-all">
                  {order.customerEmail}
                </p>
              </div>
              {order.customerPhone && (
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-vegBrown-light uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Telefone
                  </p>
                  <p className="font-semibold text-vegBrown-dark">
                    {order.customerPhone}
                  </p>
                </div>
              )}
              <div className="space-y-1">
                <p className="text-xs font-semibold text-vegBrown-light uppercase tracking-wider flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5" />
                  Tipo de Cliente
                </p>
                {order.user ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vegGreen/10 border border-vegGreen/20 rounded-full text-xs font-semibold text-vegGreen">
                    <span className="w-2 h-2 rounded-full bg-vegGreen" />
                    Conta cadastrada
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vegBrown-light/20 border border-vegBrown-light/30 rounded-full text-xs font-semibold text-vegBrown-dark">
                    Convidado
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Itens do Pedido */}
          <div className="bg-white rounded-2xl border-2 border-vegGreen/20 shadow-lg overflow-hidden">
            <div className="bg-vegGreen/10 px-5 sm:px-6 py-4 border-b border-vegGreen/20">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-xl font-holtwood text-vegBrown-dark flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-vegGreen" />
                  Itens do Pedido
                </h2>
                <span className="text-xs font-semibold text-vegBrown-light bg-vegGreen/10 px-3 py-1 rounded-full">
                  {totalItems} {totalItems === 1 ? "unidade" : "unidades"}
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-5 space-y-4">
              {order.orderItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-background rounded-xl border-2 border-vegGreen/10 hover:border-vegGreen/25 transition-colors overflow-hidden"
                >
                  {item.type === "PREMADE" && item.premadePastel ? (
                    <div className="flex gap-4 p-4">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-vegGreen/5">
                        <Image
                          src={item.premadePastel.imageUrl}
                          alt={item.premadePastel.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <span className="inline-block px-2 py-0.5 bg-vegGreen/10 text-vegGreen text-xs font-semibold rounded-full border border-vegGreen/20 mb-1">
                              Pré-montado
                            </span>
                            <h3 className="font-holtwood text-vegBrown-dark text-base leading-tight">
                              {item.premadePastel.name}
                            </h3>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-xl font-bold text-vegGreen">
                              R$ {Number(item.totalPrice).toFixed(2)}
                            </p>
                            <p className="text-xs text-vegBrown-light">
                              {item.quantity}x R${" "}
                              {Number(item.unitPrice).toFixed(2)}
                            </p>
                          </div>
                        </div>
                        {item.premadePastel.description && (
                          <p className="text-sm text-vegBrown-light mt-1 line-clamp-2">
                            {item.premadePastel.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : item.type === "CUSTOM" && item.customPastel ? (
                    <div className="p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-vegYellow/20 text-vegYellow border border-vegYellow/30 text-xs font-semibold rounded-full mb-1">
                            Personalizado
                          </span>
                          <h3 className="font-holtwood text-vegBrown-dark text-base leading-tight">
                            Pastel #{idx + 1} — Monte Seu Pastel
                          </h3>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xl font-bold text-vegGreen">
                            R$ {Number(item.totalPrice).toFixed(2)}
                          </p>
                          <p className="text-xs text-vegBrown-light">
                            {item.quantity}x R${" "}
                            {Number(item.unitPrice).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.customPastel.ingredients.map(({ ingredient }) => (
                          <div
                            key={ingredient.id}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-vegGreen/5 rounded-full border border-vegGreen/15 text-xs font-semibold text-vegBrown-dark"
                          >
                            <div className="relative w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={ingredient.imageUrl}
                                alt={ingredient.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {ingredient.name}
                            {ingredient.isVegan && (
                              <Leaf className="w-3 h-3 text-vegGreen" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}

              {/* Total */}
              <div className="border-t-2 border-vegGreen/20 pt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-vegBrown-light uppercase tracking-wider">
                  Total do Pedido
                </span>
                <span className="text-2xl sm:text-3xl font-holtwood text-vegGreen">
                  R$ {Number(order.total).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita - 1/3 */}
        <div className="space-y-6">
          {/* Atualizador de status */}
          <OrderStatusUpdater orderId={order.id} currentStatus={order.status} />

          {/* Histórico de status */}
          {statusHistory.length > 0 && (
            <div className="bg-white rounded-2xl border-2 border-vegGreen/20 shadow-lg overflow-hidden">
              <div className="bg-vegGreen/10 px-5 sm:px-6 py-4 border-b border-vegGreen/20">
                <h2 className="text-base sm:text-lg font-holtwood text-vegBrown-dark flex items-center gap-2">
                  <Clock className="w-5 h-5 text-vegGreen" />
                  Histórico
                </h2>
              </div>
              <div className="p-4 sm:p-5">
                <div className="relative">
                  {/* Linha vertical */}
                  <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-vegGreen/20" />
                  <div className="space-y-0">
                    {statusHistory.map((entry, i) => (
                      <div key={i} className="relative flex gap-3 py-3">
                        <div
                          className={`relative z-10 w-6 h-6 rounded-full border-2 border-background flex-shrink-0 ${statusDots[entry.status] ?? "bg-vegBrown-light"}`}
                        />
                        <div className="flex-1 min-w-0 pb-1">
                          <p className="text-sm font-semibold text-vegBrown-dark">
                            {statusLabels[entry.status] ?? entry.status}
                          </p>
                          <p className="text-xs text-vegBrown-light">
                            {new Date(entry.timestamp).toLocaleString("pt-BR")}
                          </p>
                          <p className="text-xs text-vegBrown-light truncate">
                            por {entry.changedBy}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notas internas */}
          {order.notes && (
            <div className="bg-white rounded-2xl border-2 border-vegYellow/30 shadow-lg overflow-hidden">
              <div className="bg-vegYellow/10 px-5 sm:px-6 py-4 border-b border-vegYellow/20">
                <h2 className="text-base sm:text-lg font-holtwood text-vegBrown-dark">
                  Observações
                </h2>
              </div>
              <div className="p-5">
                <p className="text-sm text-vegBrown-dark whitespace-pre-wrap">
                  {order.notes}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
