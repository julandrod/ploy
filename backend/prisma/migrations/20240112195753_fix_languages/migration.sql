/*
  Warnings:

  - The `level` column on the `Language` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "LanguageLevel" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED');

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "level",
ADD COLUMN     "level" "LanguageLevel" NOT NULL DEFAULT 'BASIC';
