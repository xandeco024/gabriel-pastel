import { requireSuperAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import UserManagementTable from "@/components/admin/UserManagementTable";
import { Users } from "lucide-react";

export default async function UsuariosPage() {
  await requireSuperAdmin();

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      _count: {
        select: {
          orders: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-holtwood text-vegBrown-dark flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
          <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vegGreen" />
          Usuários
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-vegBrown-light">
          Gerencie usuários e permissões (Super Admin apenas)
        </p>
      </div>

      <div className="bg-vegYellow/10 border-2 border-vegYellow/30 rounded-xl sm:rounded-2xl p-4 sm:p-5">
        <p className="text-sm sm:text-base text-vegBrown-dark">
          <strong>Atenção:</strong> Apenas Super Admins podem gerenciar roles
          de usuários. Use com cuidado!
        </p>
      </div>

      <UserManagementTable users={users} />
    </div>
  );
}
