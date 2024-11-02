/*
  Warnings:

  - Added the required column `imgUrl` to the `Pizza` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pizza" ADD COLUMN     "imgUrl" TEXT NOT NULL;
