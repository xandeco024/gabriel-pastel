import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const premadePasteis = await prisma.premadePastel.findMany({
      where: {
        isActive: true,
      },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    })

    // Formatar resposta para facilitar uso no frontend
    const formatted = premadePasteis.map((pastel) => ({
      id: pastel.id,
      name: pastel.name,
      slug: pastel.slug,
      description: pastel.description,
      imageUrl: pastel.imageUrl,
      price: pastel.price,
      ingredients: pastel.ingredients.map((pi) => pi.ingredient),
    }))

    return NextResponse.json(formatted)
  } catch (error) {
    console.error('Error fetching premade pasteis:', error)
    return NextResponse.json(
      { error: 'Failed to fetch premade pasteis' },
      { status: 500 }
    )
  }
}
