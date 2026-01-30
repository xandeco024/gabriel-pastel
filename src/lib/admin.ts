import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";

/**
 * Requer que o usuário esteja autenticado e seja ADMIN ou SUPER_ADMIN
 * Redireciona para login se não autenticado
 * Redireciona para perfil se for CUSTOMER
 */
export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/admin");
  }

  if (session.user.role === "CUSTOMER") {
    redirect("/perfil"); // Cliente não pode acessar admin
  }

  return session;
}

/**
 * Requer que o usuário seja SUPER_ADMIN
 * Redireciona para dashboard se for apenas ADMIN
 */
export async function requireSuperAdmin() {
  const session = await requireAdmin();

  if (session.user.role !== "SUPER_ADMIN") {
    redirect("/admin/dashboard"); // Admin normal não pode acessar
  }

  return session;
}

/**
 * Verifica se o usuário tem permissão de admin (server-side)
 */
export async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user.role === "ADMIN" || session?.user.role === "SUPER_ADMIN";
}

/**
 * Verifica se o usuário é super admin (server-side)
 */
export async function isSuperAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user.role === "SUPER_ADMIN";
}
