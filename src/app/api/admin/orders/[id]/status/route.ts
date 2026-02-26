import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Verificar autenticação e permissão de admin
    const session = await getServerSession(authOptions);

    if (
      !session ||
      (session.user.role !== "ADMIN" && session.user.role !== "SUPER_ADMIN")
    ) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { id } = await params;
    const { status } = await req.json();

    // Validar status
    const validStatuses = [
      "PENDING",
      "CONFIRMED",
      "PREPARING",
      "READY",
      "DELIVERED",
      "CANCELLED",
    ];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Status inválido" }, { status: 400 });
    }

    // Buscar pedido atual
    const currentOrder = await prisma.order.findUnique({
      where: { id },
      select: { statusHistory: true },
    });

    if (!currentOrder) {
      return NextResponse.json(
        { error: "Pedido não encontrado" },
        { status: 404 },
      );
    }

    // Criar histórico de mudança
    const statusHistory = Array.isArray(currentOrder.statusHistory)
      ? currentOrder.statusHistory
      : [];

    statusHistory.push({
      status,
      timestamp: new Date().toISOString(),
      changedBy: session.user.email,
    });

    // Atualizar pedido
    const order = await prisma.order.update({
      where: { id },
      data: {
        status,
        statusHistory,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar status" },
      { status: 500 },
    );
  }
}
