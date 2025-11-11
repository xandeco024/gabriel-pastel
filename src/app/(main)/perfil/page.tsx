'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { User, Package, Loader2 } from 'lucide-react'

export default function PerfilPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen mt-24 pt-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-vegGreen" />
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen mt-24 pt-24">
      <div className="container mx-auto px-4 md:px-60 py-12">
        <h1 className="text-4xl font-holtwood mb-12 text-vegBrown-dark text-center">
          MEU PERFIL
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card de Informações do Usuário */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-vegGreen/10 flex items-center justify-center mr-4">
                <User size={32} className="text-vegGreen" />
              </div>
              <div>
                <h2 className="text-2xl font-holtwood text-vegBrown-dark">
                  Olá, {session.user?.name || 'Usuário'}!
                </h2>
                <p className="text-vegBrown-light">{session.user?.email}</p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div>
                <h3 className="text-sm font-medium text-vegBrown-light mb-1">Nome</h3>
                <p className="text-lg text-vegBrown-dark">{session.user?.name || 'Não informado'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-vegBrown-light mb-1">Email</h3>
                <p className="text-lg text-vegBrown-dark">{session.user?.email}</p>
              </div>
            </div>
          </div>

          {/* Card de Ações Rápidas */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-holtwood mb-6 text-vegBrown-dark">Ações Rápidas</h2>

            <div className="space-y-4">
              <Link
                href="/perfil/pedidos"
                className="flex items-center p-4 bg-vegGreen/5 hover:bg-vegGreen/10 rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-vegGreen/10 flex items-center justify-center mr-4 group-hover:bg-vegGreen/20 transition-colors">
                  <Package size={24} className="text-vegGreen" />
                </div>
                <div>
                  <h3 className="font-holtwood text-lg text-vegBrown-dark">Meus Pedidos</h3>
                  <p className="text-sm text-vegBrown-light">Veja seu histórico de pedidos</p>
                </div>
              </Link>

              <Link
                href="/monte-seu-pastel"
                className="flex items-center p-4 bg-vegYellow/5 hover:bg-vegYellow/10 rounded-lg transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-vegYellow/10 flex items-center justify-center mr-4 group-hover:bg-vegYellow/20 transition-colors">
                  <Package size={24} className="text-vegYellow" />
                </div>
                <div>
                  <h3 className="font-holtwood text-lg text-vegBrown-dark">Fazer Pedido</h3>
                  <p className="text-sm text-vegBrown-light">Monte seu pastel personalizado</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-holtwood mb-6 text-vegBrown-dark text-center">
            Seu Impacto Vegano
          </h2>
          <div className="bg-gradient-to-r from-vegGreen/10 to-vegYellow/10 rounded-xl shadow-md p-8">
            <p className="text-center text-vegBrown-light">
              Cada pedido que você faz contribui para um mundo mais sustentável e compassivo! 🌱
            </p>
            <p className="text-center text-sm text-vegBrown-light mt-4">
              Continue fazendo pedidos para ver suas estatísticas de impacto ambiental aqui!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
