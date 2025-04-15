/*
  Warnings:

  - Added the required column `description` to the `exercisesoftraining` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercisesoftraining" ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "repeat" SET DATA TYPE TEXT;
