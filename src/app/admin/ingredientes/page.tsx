import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil, Leaf } from "lucide-react";
import Image from "next/image";

export default async function IngredientesPage() {
  await requireAdmin();

  const ingredients = await prisma.ingredient.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-holtwood text-vegBrown-dark flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
          <Leaf className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vegGreen" />
          Gerenciar Ingredientes
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-vegBrown-light">
          Gerencie todos os ingredientes disponíveis para os pastéis
        </p>
        <Link
          href="/admin/ingredientes/novo"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-vegGreen hover:bg-vegYellow text-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-bold text-sm sm:text-base"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          Novo Ingrediente
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="group bg-white rounded-2xl border-2 border-vegGreen/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="relative h-48 bg-vegGreen/5">
              <Image
                src={ingredient.imageUrl}
                alt={ingredient.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-holtwood text-vegBrown-dark">
                {ingredient.name}
              </h3>
              <p className="text-sm text-vegBrown-light mt-2">
                {ingredient.description}
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {ingredient.isVegan && (
                  <span className="px-3 py-1 text-xs font-semibold bg-vegGreen/20 text-vegGreen rounded-full border border-vegGreen/30">
                    Vegano
                  </span>
                )}
                {ingredient.isOrganic && (
                  <span className="px-3 py-1 text-xs font-semibold bg-vegYellow/20 text-vegYellow-dark rounded-full border border-vegYellow/30">
                    Orgânico
                  </span>
                )}
                {!ingredient.isActive && (
                  <span className="px-3 py-1 text-xs font-semibold bg-vegRed/20 text-vegRed rounded-full border border-vegRed/30">
                    Inativo
                  </span>
                )}
              </div>
              <div className="mt-4">
                <Link
                  href={`/admin/ingredientes/${ingredient.id}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-vegGreen/10 hover:bg-vegGreen text-vegGreen hover:text-background text-sm rounded-xl transition-all duration-200 hover:scale-105 font-semibold border-2 border-vegGreen/20 hover:border-vegGreen"
                >
                  <Pencil className="w-4 h-4" />
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
