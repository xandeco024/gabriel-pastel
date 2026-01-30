import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Pastéis Pré-montados
          </h1>
          <p className="text-gray-600 mt-1">Gerencie os pastéis do cardápio</p>
        </div>
        <Link
          href="/admin/pasteis/novo"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Novo Pastel
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pasteis.map((pastel) => (
          <div
            key={pastel.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="relative h-48 bg-gray-200">
              <Image
                src={pastel.imageUrl}
                alt={pastel.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900">
                  {pastel.name}
                </h3>
                <span className="text-lg font-bold text-green-600">
                  R$ {Number(pastel.price).toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{pastel.description}</p>
              <div className="mt-3">
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  Ingredientes:
                </p>
                <div className="flex flex-wrap gap-1">
                  {pastel.ingredients.map((pi) => (
                    <span
                      key={pi.id}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                    >
                      {pi.ingredient.name}
                    </span>
                  ))}
                </div>
              </div>
              {!pastel.isActive && (
                <div className="mt-3">
                  <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                    Inativo
                  </span>
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/admin/pasteis/${pastel.id}`}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
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
