import { redirect } from "next/navigation";

export default function AdminPage() {
  // Redirecionar para dashboard
  redirect("/admin/dashboard");
}
