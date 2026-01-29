import { redirect } from "next/navigation";

export default function Page() {
  // O middleware vai detectar o idioma e redirecionar automaticamente
  // Mas caso alguém acesse diretamente /, redirecionamos para /en
  redirect("/en");
}
