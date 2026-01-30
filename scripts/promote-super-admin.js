// Script para promover usuário a Super Admin
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function promoteToSuperAdmin() {
  try {
    const email = "teste@teste.com";

    console.log(`🔍 Buscando usuário: ${email}`);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.error(`❌ Usuário não encontrado: ${email}`);
      process.exit(1);
    }

    console.log(`✅ Usuário encontrado:`, user.name);
    console.log(`📊 Role atual:`, user.role);

    // Atualizar para SUPER_ADMIN
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { role: "SUPER_ADMIN" },
    });

    console.log(`✨ Usuário promovido com sucesso!`);
    console.log(`👑 Novo role:`, updatedUser.role);
    console.log(`\n🎉 ${updatedUser.email} agora é SUPER_ADMIN!`);
  } catch (error) {
    console.error("❌ Erro:", error);
  } finally {
    await prisma.$disconnect();
  }
}

promoteToSuperAdmin();
