/*
  Warnings:

  - Changed the type of `name` on the `Social` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Networks" AS ENUM ('INSTAGRAM', 'FACEBOOK', 'YOUTUBE', 'LINKEDIN', 'OTHERS');

-- AlterTable
ALTER TABLE "Social" DROP COLUMN "name",
ADD COLUMN     "name" "Networks" NOT NULL;
