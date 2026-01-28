import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { Decimal } from "@prisma/client/runtime/library";

// Tipos para o payload do pedido
type CustomPastelItem = {
  type: "CUSTOM";
  ingredientIds: string[];
  quantity: number;
};

type PremadePastelItem = {
  type: "PREMADE";
  premadePastelId: string;
  quantity: number;
};

type OrderItemPayload = CustomPastelItem | PremadePastelItem;

type CreateOrderPayload = {
  items: OrderItemPayload[];
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
};

// Função para calcular preço de pastel customizado
function calculateCustomPastelPrice(numIngredients: number): number {
  const basePrice = 14.99;
  const includedIngredients = 3;
  const extraIngredientPrice = 1.99;

  if (numIngredients <= includedIngredients) {
    return basePrice;
  }

  return (
    basePrice + (numIngredients - includedIngredients) * extraIngredientPrice
  );
}

// POST /api/orders - Criar novo pedido
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const body: CreateOrderPayload = await request.json();

    // Validar payload
    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: "Order must have at least one item" },
        { status: 400 },
      );
    }

    if (!body.customerName || !body.customerEmail) {
      return NextResponse.json(
        { error: "Customer name and email are required" },
        { status: 400 },
      );
    }

    // Processar items e calcular total
    let totalAmount = 0;
    const orderItemsData: Array<{
      type: "CUSTOM" | "PREMADE";
      quantity: number;
      unitPrice: Decimal;
      totalPrice: Decimal;
      customPastelId?: string;
      premadePastelId?: string;
    }> = [];

    for (const item of body.items) {
      if (item.type === "CUSTOM") {
        // Validar ingredientes
        if (!item.ingredientIds || item.ingredientIds.length === 0) {
          return NextResponse.json(
            { error: "Custom pastel must have at least one ingredient" },
            { status: 400 },
          );
        }

        if (item.ingredientIds.length > 5) {
          return NextResponse.json(
            { error: "Custom pastel cannot have more than 5 ingredients" },
            { status: 400 },
          );
        }

        // Criar CustomPastel
        const customPastel = await prisma.customPastel.create({
          data: {
            ingredients: {
              create: item.ingredientIds.map((ingredientId) => ({
                ingredientId,
              })),
            },
          },
        });

        // Calcular preço
        const unitPrice = calculateCustomPastelPrice(item.ingredientIds.length);
        const totalPrice = unitPrice * item.quantity;

        orderItemsData.push({
          type: "CUSTOM",
          customPastelId: customPastel.id,
          quantity: item.quantity,
          unitPrice: new Decimal(unitPrice),
          totalPrice: new Decimal(totalPrice),
        });

        totalAmount += totalPrice;
      } else if (item.type === "PREMADE") {
        // Buscar pastel pré-pronto
        const premadePastel = await prisma.premadePastel.findUnique({
          where: { id: item.premadePastelId },
        });

        if (!premadePastel) {
          return NextResponse.json(
            { error: `Premade pastel not found: ${item.premadePastelId}` },
            { status: 404 },
          );
        }

        const unitPrice = Number(premadePastel.price);
        const totalPrice = unitPrice * item.quantity;

        orderItemsData.push({
          type: "PREMADE",
          premadePastelId: item.premadePastelId,
          quantity: item.quantity,
          unitPrice: premadePastel.price,
          totalPrice: new Decimal(totalPrice),
        });

        totalAmount += totalPrice;
      }
    }

    // Criar pedido com items
    const order = await prisma.order.create({
      data: {
        userId: session?.user?.id,
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
        total: new Decimal(totalAmount),
        status: "PENDING",
        orderItems: {
          create: orderItemsData,
        },
      },
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
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 },
    );
  }
}

// GET /api/orders - Listar pedidos do usuário
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 },
    );
  }
}
