'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Package, Loader2, Clock, Check, Truck, ChefHat, RefreshCw, AlertCircle } from 'lucide-react'
import { toast, Toaster } from 'sonner'

type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'DELIVERED' | 'CANCELLED'

type Order = {
  id: string
  status: OrderStatus
  total: number
  customerName: string
  customerEmail: string
  createdAt: string
  orderItems: Array<{
    id: string
    type: 'CUSTOM' | 'PREMADE'
    quantity: number
    unitPrice: number
    totalPrice: number
    customPastel?: {
      ingredients: Array<{
        ingredient: {
          id: string
          name: string
        }
      }>
    }
    premadePastel?: {
      name: string
      ingredients: Array<{
        ingredient: {
          id: string
          name: string
        }
      }>
    }
  }>
}

const statusConfig = {
  PENDING: {
    label: 'Pendente',
    icon: Clock,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  CONFIRMED: {
    label: 'Confirmado',
    icon: Check,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  PREPARING: {
    label: 'Preparando',
    icon: ChefHat,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  READY: {
    label: 'Pronto',
    icon: Package,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  DELIVERED: {
    label: 'Entregue',
    icon: Truck,
    color: 'text-vegGreen',
    bgColor: 'bg-vegGreen/10',
    borderColor: 'border-vegGreen/20',
  },
  CANCELLED: {
    label: 'Cancelado',
    icon: AlertCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
}

export default function PedidosPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [reordering, setReordering] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      fetchOrders()
    }
  }, [session])

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders')
      if (!response.ok) throw new Error('Failed to fetch orders')

      const data = await response.json()
      setOrders(data)
    } catch (error) {
      console.error('Error fetching orders:', error)
      toast.error('Erro ao carregar pedidos')
    } finally {
      setLoading(false)
    }
  }

  const handleReorder = async (order: Order) => {
    setReordering(order.id)

    try {
      // Preparar dados do pedido
      const orderData = {
        items: order.orderItems.map((item) => {
          if (item.type === 'CUSTOM' && item.customPastel) {
            return {
              type: 'CUSTOM' as const,
              ingredientIds: item.customPastel.ingredients.map((ing) => ing.ingredient.id),
              quantity: item.quantity,
            }
          } else if (item.type === 'PREMADE' && item.premadePastel) {
            return {
              type: 'PREMADE' as const,
              premadePastelId: item.premadePastel.id,
              quantity: item.quantity,
            }
          }
          return null
        }).filter(Boolean),
        customerName: session?.user?.name || order.customerName,
        customerEmail: session?.user?.email || order.customerEmail,
      }

      // Criar novo pedido
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to reorder')
      }

      const newOrder = await response.json()

      toast.success('Pedido repetido com sucesso!', {
        description: `Novo pedido #${newOrder.id.substring(0, 8)} criado`
      })

      // Recarregar lista de pedidos
      fetchOrders()
    } catch (error) {
      console.error('Error reordering:', error)
      toast.error('Erro ao repetir pedido. Tente novamente.')
    } finally {
      setReordering(null)
    }
  }

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (status === 'loading' || loading) {
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
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: 'var(--font-gluten)',
          },
        }}
      />

      <div className="container mx-auto px-4 md:px-60 py-12">
        <h1 className="text-4xl font-holtwood mb-12 text-vegBrown-dark text-center">
          MEUS PEDIDOS
        </h1>

        {orders.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-12 text-center">
            <Package size={64} className="mx-auto mb-4 text-vegGreen/30" />
            <h2 className="text-2xl font-holtwood mb-4 text-vegBrown-dark">
              Nenhum pedido ainda
            </h2>
            <p className="text-vegBrown-light mb-6">
              Que tal fazer seu primeiro pedido de pastéis veganos deliciosos?
            </p>
            <button
              onClick={() => router.push('/monte-seu-pastel')}
              className="bg-vegGreen hover:bg-vegGreen/90 text-white py-3 px-8 rounded-lg font-holtwood transition-colors"
            >
              MONTE SEU PASTEL
            </button>
          </div>
        ) : (
          <div className="space-y-6 max-w-4xl mx-auto">
            {orders.map((order) => {
              const statusInfo = statusConfig[order.status]
              const StatusIcon = statusInfo.icon

              return (
                <div
                  key={order.id}
                  className={`bg-white rounded-xl shadow-md p-6 border-2 ${statusInfo.borderColor}`}
                >
                  {/* Header do Pedido */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-holtwood text-vegBrown-dark">
                          Pedido #{order.id.substring(0, 8)}
                        </h3>
                        <span
                          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color} ${statusInfo.bgColor}`}
                        >
                          <StatusIcon size={16} />
                          {statusInfo.label}
                        </span>
                      </div>
                      <p className="text-sm text-vegBrown-light">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-vegGreen">
                        {formatPrice(Number(order.total))}
                      </p>
                    </div>
                  </div>

                  {/* Items do Pedido */}
                  <div className="space-y-3 py-4 border-t border-b border-gray-200">
                    {order.orderItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-vegBrown-dark">
                            {item.type === 'CUSTOM' && item.customPastel ? (
                              <>
                                <span className="text-vegYellow">● </span>
                                Pastel Personalizado
                              </>
                            ) : item.type === 'PREMADE' && item.premadePastel ? (
                              <>
                                <span className="text-vegGreen">● </span>
                                {item.premadePastel.name}
                              </>
                            ) : (
                              'Pastel'
                            )}
                          </p>
                          <p className="text-sm text-vegBrown-light">
                            {item.type === 'CUSTOM' && item.customPastel
                              ? item.customPastel.ingredients
                                  .map((ing) => ing.ingredient.name)
                                  .join(', ')
                              : item.type === 'PREMADE' && item.premadePastel
                              ? item.premadePastel.ingredients
                                  .map((ing) => ing.ingredient.name)
                                  .join(', ')
                              : ''}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-vegBrown-dark">
                            {item.quantity}x {formatPrice(Number(item.unitPrice))}
                          </p>
                          <p className="text-sm font-medium text-vegBrown-dark">
                            {formatPrice(Number(item.totalPrice))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ações */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleReorder(order)}
                      disabled={reordering === order.id}
                      className="flex items-center gap-2 px-4 py-2 bg-vegGreen/10 hover:bg-vegGreen/20 text-vegGreen rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {reordering === order.id ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <RefreshCw size={18} />
                          Pedir Novamente
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
