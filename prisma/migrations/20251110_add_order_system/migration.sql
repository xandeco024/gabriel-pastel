-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PastelType" AS ENUM ('CUSTOM', 'PREMADE');

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isVegan" BOOLEAN NOT NULL DEFAULT true,
    "isOrganic" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremadePastel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PremadePastel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremadePastelIngredient" (
    "id" TEXT NOT NULL,
    "premadePastelId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "PremadePastelIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomPastel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomPastel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomPastelIngredient" (
    "id" TEXT NOT NULL,
    "customPastelId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "CustomPastelIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "total" DECIMAL(10,2) NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "type" "PastelType" NOT NULL,
    "premadePastelId" TEXT,
    "customPastelId" TEXT,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(10,2) NOT NULL,
    "totalPrice" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_slug_key" ON "Ingredient"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PremadePastel_name_key" ON "PremadePastel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PremadePastel_slug_key" ON "PremadePastel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PremadePastelIngredient_premadePastelId_ingredientId_key" ON "PremadePastelIngredient"("premadePastelId", "ingredientId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomPastelIngredient_customPastelId_ingredientId_key" ON "CustomPastelIngredient"("customPastelId", "ingredientId");

-- AddForeignKey
ALTER TABLE "PremadePastelIngredient" ADD CONSTRAINT "PremadePastelIngredient_premadePastelId_fkey" FOREIGN KEY ("premadePastelId") REFERENCES "PremadePastel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremadePastelIngredient" ADD CONSTRAINT "PremadePastelIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomPastelIngredient" ADD CONSTRAINT "CustomPastelIngredient_customPastelId_fkey" FOREIGN KEY ("customPastelId") REFERENCES "CustomPastel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomPastelIngredient" ADD CONSTRAINT "CustomPastelIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_premadePastelId_fkey" FOREIGN KEY ("premadePastelId") REFERENCES "PremadePastel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_customPastelId_fkey" FOREIGN KEY ("customPastelId") REFERENCES "CustomPastel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
