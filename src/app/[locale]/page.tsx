import { redirect } from "next/navigation";

export default async function LocaleRootPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await params no Next.js 15
  const { locale } = await params;

  // Redirecionar para /home
  redirect(`/${locale}/home`);
}
