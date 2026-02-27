import { requireAdmin } from "@/lib/admin";
import { Leaf } from "lucide-react";
import AdminHeaderSimple from "@/components/admin/AdminHeaderSimple";
import { holtwood, gluten } from "@/assets/fonts";
import { SessionProvider } from "@/components/SessionProvider";
import { Toaster } from "sonner";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Proteger toda a área admin
  const session = await requireAdmin();

  return (
    <SessionProvider>
      <div
        className={`${holtwood.variable} ${gluten.variable} min-h-screen bg-background relative font-gluten`}
      >
        {/* Decorative leaves - matching site theme */}
        <Leaf className="absolute top-20 left-10 w-16 h-16 text-vegGreen/5 rotate-12 animate-float-slow" />
        <Leaf className="absolute top-40 right-20 w-12 h-12 text-vegYellow/10 -rotate-12 animate-float-slower" />
        <Leaf className="absolute bottom-40 left-20 w-20 h-20 text-vegOrange/5 rotate-45 animate-float-slow" />
        <Leaf className="absolute bottom-20 right-10 w-14 h-14 text-vegGreen/10 -rotate-45 animate-float-slower" />

        <AdminHeaderSimple session={session} />

        <main className="pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        <Toaster
          position="top-right"
          expand={true}
          richColors
          toastOptions={{
            style: {
              background: "white",
              border: "2px solid",
              color: "#2c221c",
            },
            classNames: {
              success: "border-[#10806e]",
              error: "border-[#ab3f3f]",
              warning: "border-[#f6a011]",
              info: "border-[#10806e]",
            },
          }}
        />
      </div>
    </SessionProvider>
  );
}
