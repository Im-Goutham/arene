/*
  Warnings:

  - You are about to drop the column `category_name` on the `category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `category_name`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL;
