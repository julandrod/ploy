/*
  Warnings:

  - Made the column `location` on table `Experience` required. This step will fail if there are existing NULL values in that column.
  - Made the column `responsibilities` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "responsibilities" SET NOT NULL;
