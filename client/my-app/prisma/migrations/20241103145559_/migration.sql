/*
  Warnings:

  - Added the required column `collected` to the `Pizza` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testType` to the `Pizza` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TestType" AS ENUM ('TRADITIONAL', 'THIN');

-- AlterTable
ALTER TABLE "Pizza" ADD COLUMN     "collected" BOOLEAN NOT NULL,
ADD COLUMN     "testType" "TestType" NOT NULL;
