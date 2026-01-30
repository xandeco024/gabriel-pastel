import { requireAdmin } from "@/lib/admin";
import { Leaf } from "lucide-react";
import AdminHeaderSimple from "@/components/admin/AdminHeaderSimple";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Proteger toda a área admin
  const session = await requireAdmin();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative leaves - matching site theme */}
      <Leaf className="absolute top-20 left-10 w-16 h-16 text-vegGreen/5 rotate-12 animate-float-slow" />
      <Leaf className="absolute top-40 right-20 w-12 h-12 text-vegYellow/10 -rotate-12 animate-float-slower" />
      <Leaf className="absolute bottom-40 left-20 w-20 h-20 text-vegOrange/5 rotate-45 animate-float-slow" />
      <Leaf className="absolute bottom-20 right-10 w-14 h-14 text-vegGreen/10 -rotate-45 animate-float-slower" />

      <AdminHeaderSimple session={session} />

      <main className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
