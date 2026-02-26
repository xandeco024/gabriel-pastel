import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Verificar autenticação e permissão de SUPER_ADMIN
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "SUPER_ADMIN") {
      return NextResponse.json(
        { error: "Não autorizado - apenas Super Admin" },
        { status: 401 },
      );
    }

    const { id } = await params;
    const { role } = await req.json();

    // Validar role
    const validRoles = ["CUSTOMER", "ADMIN", "SUPER_ADMIN"];
    if (!validRoles.includes(role)) {
      return NextResponse.json({ error: "Role inválido" }, { status: 400 });
    }

    // Atualizar usuário
    const user = await prisma.user.update({
      where: { id },
      data: { role },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Erro ao atualizar role:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar role do usuário" },
      { status: 500 },
    );
  }
}
