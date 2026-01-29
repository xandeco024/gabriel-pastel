"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import {
  User,
  Package,
  Loader2,
  ShoppingCart,
  Sparkles,
  Heart,
} from "lucide-react";

export default function PerfilPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen mt-24 pt-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-vegGreen" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen mt-24 pt-24">
      <div className="container mx-auto px-4 md:px-60 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-4 justify-center">
            <User className="w-12 h-12 text-vegYellow" />
            MEU PERFIL
          </h1>
          <p className="text-xl text-vegBrown-light max-w-2xl mx-auto">
            Gerencie suas{" "}
            <span className="font-bold text-vegYellow">informações</span> e
            acompanhe seus{" "}
            <span className="font-bold text-vegGreen">pedidos</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card de Informações do Usuário */}
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 rounded-full bg-vegGreen/15 flex items-center justify-center mr-5 shadow-md">
                <User size={40} className="text-vegGreen" />
              </div>
              <div>
                <h2 className="text-3xl font-holtwood text-vegBrown-dark">
                  Olá, {session.user?.name || "Usuário"}!
                </h2>
                <p className="text-vegBrown-light text-base mt-1">
                  {session.user?.email}
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="bg-vegGreen/5 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-vegGreen mb-2">
                  Nome
                </h3>
                <p className="text-xl text-vegBrown-dark font-medium">
                  {session.user?.name || "Não informado"}
                </p>
              </div>
              <div className="bg-vegYellow/5 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-vegYellow mb-2">
                  Email
                </h3>
                <p className="text-xl text-vegBrown-dark font-medium">
                  {session.user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Card de Ações Rápidas */}
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-holtwood mb-8 text-vegBrown-dark flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-vegYellow" />
              Ações Rápidas
            </h2>

            <div className="space-y-5">
              <Link
                href="/perfil/pedidos"
                className="flex items-center p-5 bg-vegGreen/10 hover:bg-vegGreen/20 rounded-xl transition-all group shadow-sm hover:shadow-md hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-vegGreen/20 flex items-center justify-center mr-5 group-hover:bg-vegGreen group-hover:text-white transition-all shadow-md">
                  <Package
                    size={28}
                    className="text-vegGreen group-hover:text-white"
                  />
                </div>
                <div>
                  <h3 className="font-holtwood text-xl text-vegBrown-dark">
                    Meus Pedidos
                  </h3>
                  <p className="text-sm text-vegBrown-light">
                    Veja seu{" "}
                    <span className="font-bold text-vegGreen">
                      histórico de pedidos
                    </span>
                  </p>
                </div>
              </Link>

              <Link
                href="/monte-seu-pastel"
                className="flex items-center p-5 bg-vegYellow/10 hover:bg-vegYellow/20 rounded-xl transition-all group shadow-sm hover:shadow-md hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-vegYellow/20 flex items-center justify-center mr-5 group-hover:bg-vegYellow group-hover:text-white transition-all shadow-md">
                  <ShoppingCart
                    size={28}
                    className="text-vegYellow group-hover:text-white"
                  />
                </div>
                <div>
                  <h3 className="font-holtwood text-xl text-vegBrown-dark">
                    Fazer Pedido
                  </h3>
                  <p className="text-sm text-vegBrown-light">
                    Monte seu{" "}
                    <span className="font-bold text-vegYellow">
                      pastel personalizado
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-holtwood mb-8 text-vegBrown-dark text-center flex items-center gap-3 justify-center">
            <Heart className="w-10 h-10 text-vegYellow" />
            Seu Impacto Vegano
          </h2>
          <div className="bg-gradient-to-br from-vegGreen/15 via-vegYellow/10 to-vegGreen/15 rounded-2xl shadow-lg p-10 border-2 border-vegGreen/20 hover:shadow-2xl transition-shadow duration-300">
            <p className="text-center text-vegBrown-dark text-xl font-medium leading-relaxed">
              Cada pedido que você faz contribui para um{" "}
              <span className="font-bold text-vegGreen">
                mundo mais sustentável
              </span>{" "}
              e <span className="font-bold text-vegYellow">compassivo</span>! 🌱
            </p>
            <p className="text-center text-base text-vegBrown-light mt-6 bg-white/50 p-4 rounded-lg">
              Continue fazendo pedidos para ver suas{" "}
              <span className="font-bold text-vegGreen">
                estatísticas de impacto ambiental
              </span>{" "}
              aqui!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
