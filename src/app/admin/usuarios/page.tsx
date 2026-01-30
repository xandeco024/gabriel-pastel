import { requireSuperAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import UserManagementTable from "@/components/admin/UserManagementTable";

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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Usuários</h1>
          <p className="text-gray-600 mt-1">
            Gerencie usuários e permissões (Super Admin apenas)
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          ⚠️ <strong>Atenção:</strong> Apenas Super Admins podem gerenciar roles
          de usuários. Use com cuidado!
        </p>
      </div>

      <UserManagementTable users={users} />
    </div>
  );
}
