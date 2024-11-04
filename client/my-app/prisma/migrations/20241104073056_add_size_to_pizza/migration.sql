-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'BIG', 'AVERAGE');

-- AlterTable
ALTER TABLE "Pizza" ADD COLUMN     "size" "Size" NOT NULL DEFAULT 'AVERAGE';
