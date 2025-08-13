-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('URGENT', 'TODAY', 'TOMORROW');

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'URGENT';
