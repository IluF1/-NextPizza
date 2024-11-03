/*
  Warnings:

  - You are about to drop the column `ingredients` on the `Pizza` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pizza" DROP COLUMN "ingredients";

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IngredientsToPizza" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_name_key" ON "Ingredients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientsToPizza_AB_unique" ON "_IngredientsToPizza"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientsToPizza_B_index" ON "_IngredientsToPizza"("B");

-- AddForeignKey
ALTER TABLE "_IngredientsToPizza" ADD CONSTRAINT "_IngredientsToPizza_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientsToPizza" ADD CONSTRAINT "_IngredientsToPizza_B_fkey" FOREIGN KEY ("B") REFERENCES "Pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;
