import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Validações básicas
    if (!name || !email || !password) {
      return new NextResponse("Todos os campos são obrigatórios", { status: 400 })
    }

    if (password.length < 6) {
      return new NextResponse("Senha deve ter pelo menos 6 caracteres", { status: 400 })
    }

    // Verificar se email já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return new NextResponse("Email já está em uso", { status: 400 })
    }

    // Hash da senha com bcrypt
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })

    return NextResponse.json({
      message: "Usuário criado com sucesso",
      user: { id: user.id, name: user.name, email: user.email }
    })

  } catch (error) {
    console.error("Erro ao criar usuário:", error)
    return new NextResponse("Erro interno do servidor", { status: 500 })
  }
}