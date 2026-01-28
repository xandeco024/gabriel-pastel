import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Limpar dados existentes (opcional - cuidado em produção)
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.customPastelIngredient.deleteMany()
  await prisma.customPastel.deleteMany()
  await prisma.premadePastelIngredient.deleteMany()
  await prisma.premadePastel.deleteMany()
  await prisma.ingredient.deleteMany()
  await prisma.user.deleteMany()

  console.log('✅ Dados antigos limpos')

  // Criar usuário de teste
  console.log('👤 Criando usuário de teste...')
  const hashedPassword = await bcrypt.hash('123456', 10)
  const testUser = await prisma.user.create({
    data: {
      email: 'teste@teste.com',
      name: 'Usuário Teste',
      password: hashedPassword,
    },
  })
  console.log('✅ Usuário criado:', testUser.email, '/ senha: 123456')

  // Criar ingredientes
  console.log('📦 Criando ingredientes...')

  const ingredientsData = [
    {
      name: 'Jaca',
      slug: 'jaca',
      description: 'Jaca verde desfiada, suculenta e saborosa',
      imageUrl: '/flavours/carne-de-jaca.avif',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Tofu',
      slug: 'tofu',
      description: 'Tofu orgânico temperado com ervas finas',
      imageUrl: '/flavours/tofu.webp',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Tomate',
      slug: 'tomate',
      description: 'Tomate orgânico fresco e suculento',
      imageUrl: '/flavours/tomate.jpg',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Palmito',
      slug: 'palmito',
      description: 'Palmito pupunha de cultivo sustentável',
      imageUrl: '/flavours/palmito.webp',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Soja',
      slug: 'soja',
      description: 'Proteína de soja texturizada e temperada',
      imageUrl: '/flavours/soja.webp',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Escarola',
      slug: 'escarola',
      description: 'Escarola refogada com alho e azeite',
      imageUrl: '/flavours/escarola.webp',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Shimeji',
      slug: 'shimeji',
      description: 'Shimeji refogado com shoyu e gengibre',
      imageUrl: '/flavours/shimeji.jpg',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Brócolis',
      slug: 'brocolis',
      description: 'Brócolis picadinho refogado com azeite',
      imageUrl: '/flavours/brocolis.webp',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Cebola',
      slug: 'cebola',
      description: 'Cebola caramelizada com toque de açúcar mascavo',
      imageUrl: '/flavours/cebola.png',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Shiitake',
      slug: 'shiitake',
      description: 'Shiitake fatiado e refogado com ervas',
      imageUrl: '/flavours/shiitake.jpg',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Milho',
      slug: 'milho',
      description: 'Milho verde orgânico e suculento',
      imageUrl: '/flavours/milho.webp',
      isVegan: true,
      isOrganic: true,
    },
    {
      name: 'Berinjela',
      slug: 'beringela',
      description: 'Berinjela grelhada com especiarias',
      imageUrl: '/flavours/beringela.jpg',
      isVegan: true,
      isOrganic: true,
    },
  ]

  const ingredients = await Promise.all(
    ingredientsData.map((data) =>
      prisma.ingredient.create({
        data,
      })
    )
  )

  console.log(`✅ ${ingredients.length} ingredientes criados`)

  // Criar pastéis pré-prontos
  console.log('🥟 Criando pastéis pré-prontos...')

  // Helper para encontrar ingredientes por slug
  const findIngredients = (slugs: string[]) =>
    ingredients.filter((ing) => slugs.includes(ing.slug))

  const premadePasteisData = [
    {
      name: 'Pastel de Brócolis',
      slug: 'pastel-brocolis',
      description: 'Delicioso pastel recheado com brócolis refogado',
      imageUrl: '/pastel-flavours/romiltoBrocolis.webp',
      price: 14.99,
      ingredients: ['brocolis'],
    },
    {
      name: 'Pastel de Calabresa Vegana',
      slug: 'pastel-calabresa',
      description: 'Pastel com calabresa vegana de soja defumada',
      imageUrl: '/pastel-flavours/romiltoCalabresa.webp',
      price: 14.99,
      ingredients: ['soja', 'tomate', 'cebola'],
    },
    {
      name: 'Pastel de Jaca',
      slug: 'pastel-jaca',
      description: 'Pastel recheado com jaca desfiada temperada',
      imageUrl: '/pastel-flavours/romiltoJaca.webp',
      price: 14.99,
      ingredients: ['jaca', 'tomate'],
    },
    {
      name: 'Pastel de Palmito',
      slug: 'pastel-palmito',
      description: 'Pastel com palmito pupunha refogado',
      imageUrl: '/pastel-flavours/romiltoPalmito.webp',
      price: 14.99,
      ingredients: ['palmito', 'tomate'],
    },
    {
      name: 'Pastel de Shimeji',
      slug: 'pastel-shimeji',
      description: 'Pastel recheado com shimeji refogado no shoyu',
      imageUrl: '/pastel-flavours/romiltoShimeji.webp',
      price: 14.99,
      ingredients: ['shimeji', 'cebola'],
    },
    {
      name: 'Pastel de Soja',
      slug: 'pastel-soja',
      description: 'Pastel com proteína de soja texturizada',
      imageUrl: '/pastel-flavours/romiltoSoja.webp',
      price: 14.99,
      ingredients: ['soja', 'tomate'],
    },
  ]

  for (const pastelData of premadePasteisData) {
    const { ingredients: ingredientSlugs, ...data } = pastelData
    const pastelIngredients = findIngredients(ingredientSlugs)

    const pastel = await prisma.premadePastel.create({
      data: {
        ...data,
        ingredients: {
          create: pastelIngredients.map((ing) => ({
            ingredientId: ing.id,
          })),
        },
      },
    })

    console.log(`  ✅ ${pastel.name} criado`)
  }

  console.log('✅ Pastéis pré-prontos criados')
  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao fazer seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
