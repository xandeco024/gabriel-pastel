import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

// GET /api/orders/[id] - Buscar detalhes de um pedido específico
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params

    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        orderItems: {
          include: {
            customPastel: {
              include: {
                ingredients: {
                  include: {
                    ingredient: true,
                  },
                },
              },
            },
            premadePastel: {
              include: {
                ingredients: {
                  include: {
                    ingredient: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }

    // Verificar se o pedido pertence ao usuário logado (se houver usuário logado)
    if (session?.user?.id && order.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      )
    }

    return NextResponse.json(order)
  } catch (error) {
    console.error('Error fetching order:', error)
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    )
  }
}
