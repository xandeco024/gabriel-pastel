"use client";

import { useState } from "react";
import { toast } from "sonner";

const roleColors = {
  CUSTOMER: "bg-vegBrown/10 text-vegBrown-dark border-vegBrown/30",
  ADMIN: "bg-vegGreen/10 text-vegGreen border-vegGreen/30",
  SUPER_ADMIN: "bg-vegOrange/10 text-vegOrange border-vegOrange/30",
};

const roleLabels = {
  CUSTOMER: "Cliente",
  ADMIN: "Admin",
  SUPER_ADMIN: "Super Admin",
};

interface User {
  id: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: Date;
  _count: {
    orders: number;
  };
}

interface UserManagementTableProps {
  users: User[];
}

export default function UserManagementTable({
  users,
}: UserManagementTableProps) {
  const [updatingRole, setUpdatingRole] = useState<string | null>(null);

  const updateRole = async (userId: string, newRole: string) => {
    if (
      !confirm(
        `Tem certeza que deseja alterar o role deste usuário para ${roleLabels[newRole as keyof typeof roleLabels]}?`,
      )
    ) {
      return;
    }

    setUpdatingRole(userId);

    try {
      const res = await fetch(`/api/admin/users/${userId}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      if (!res.ok) throw new Error();

      toast.success("Role atualizado com sucesso!");
      window.location.reload();
    } catch {
      toast.error("Erro ao atualizar role");
    } finally {
      setUpdatingRole(null);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pastel to-background rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-vegGreen/20 shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-gradient-to-r from-vegGreen/10 to-vegYellow/10 border-b-2 border-vegGreen/20">
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Nome
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Email
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Role
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Pedidos
              </th>
              <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-holtwood text-vegBrown-dark uppercase tracking-wider">
                Cadastro
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-vegGreen/10">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-vegGreen/5 transition-colors duration-200">
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <p className="font-semibold text-vegBrown-dark text-sm sm:text-base">
                    {user.name || "Sem nome"}
                  </p>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <p className="text-xs sm:text-sm text-vegBrown-light">{user.email}</p>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <select
                    value={user.role}
                    onChange={(e) => updateRole(user.id, e.target.value)}
                    disabled={updatingRole === user.id}
                    className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full border-2 cursor-pointer transition-all hover:scale-105 ${roleColors[user.role as keyof typeof roleColors]}`}
                  >
                    <option value="CUSTOMER">Cliente</option>
                    <option value="ADMIN">Admin</option>
                    <option value="SUPER_ADMIN">Super Admin</option>
                  </select>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <span className="text-xs sm:text-sm text-vegGreen font-semibold bg-vegGreen/10 px-2 py-1 rounded-full">
                    {user._count.orders} pedidos
                  </span>
                </td>
                <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                  <span className="text-xs sm:text-sm text-vegBrown-light font-semibold">
                    {new Date(user.createdAt).toLocaleDateString("pt-BR")}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
