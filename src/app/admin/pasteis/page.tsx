import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil, Cookie } from "lucide-react";
import Image from "next/image";

export default async function PasteisPage() {
  await requireAdmin();

  const pasteis = await prisma.premadePastel.findMany({
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-holtwood text-vegBrown-dark flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
          <Cookie className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-vegOrange" />
          Pastéis Pré-montados
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-vegBrown-light">
          Gerencie os pastéis do cardápio
        </p>
        <Link
          href="/admin/pasteis/novo"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-vegOrange hover:bg-vegYellow text-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-bold text-sm sm:text-base"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          Novo Pastel
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {pasteis.map((pastel) => (
          <div
            key={pastel.id}
            className="group bg-white rounded-xl sm:rounded-2xl border-2 border-vegOrange/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="relative h-40 sm:h-48 bg-vegOrange/5">
              <Image
                src={pastel.imageUrl}
                alt={pastel.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-holtwood text-vegBrown-dark">
                  {pastel.name}
                </h3>
                <span className="text-base sm:text-lg font-bold text-vegGreen whitespace-nowrap">
                  R$ {Number(pastel.price).toFixed(2)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-vegBrown-light mt-2 line-clamp-2">
                {pastel.description}
              </p>
              <div className="mt-3">
                <p className="text-xs font-semibold text-vegBrown-dark mb-1">
                  Ingredientes:
                </p>
                <div className="flex flex-wrap gap-1">
                  {pastel.ingredients.map((pi) => (
                    <span
                      key={pi.id}
                      className="px-2 py-0.5 text-xs bg-vegGreen/10 text-vegGreen rounded-full border border-vegGreen/20"
                    >
                      {pi.ingredient.name}
                    </span>
                  ))}
                </div>
              </div>
              {!pastel.isActive && (
                <div className="mt-3">
                  <span className="px-2 py-1 text-xs font-semibold bg-vegRed/20 text-vegRed rounded-full border border-vegRed/30">
                    Inativo
                  </span>
                </div>
              )}
              <div className="mt-4">
                <Link
                  href={`/admin/pasteis/${pastel.id}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-vegOrange/10 hover:bg-vegOrange text-vegOrange hover:text-background text-sm rounded-xl transition-all duration-200 hover:scale-105 font-semibold border-2 border-vegOrange/20 hover:border-vegOrange"
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
