import { redirect } from "next/navigation";

export default function LocaleAdminRedirect() {
  // Redirecionar qualquer acesso /[locale]/admin para /admin
  redirect("/admin/dashboard");
}
