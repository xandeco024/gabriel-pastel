"use client";

import { useState } from "react";
import { toast } from "sonner";

const roleColors = {
  CUSTOMER: "bg-gray-100 text-gray-800",
  ADMIN: "bg-blue-100 text-blue-800",
  SUPER_ADMIN: "bg-purple-100 text-purple-800",
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
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Nome
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Role
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Pedidos
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Cadastro
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">
                    {user.name || "Sem nome"}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600">{user.email}</p>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={user.role}
                    onChange={(e) => updateRole(user.id, e.target.value)}
                    disabled={updatingRole === user.id}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border-0 cursor-pointer ${roleColors[user.role as keyof typeof roleColors]}`}
                  >
                    <option value="CUSTOMER">Cliente</option>
                    <option value="ADMIN">Admin</option>
                    <option value="SUPER_ADMIN">Super Admin</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">
                    {user._count.orders} pedidos
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">
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
