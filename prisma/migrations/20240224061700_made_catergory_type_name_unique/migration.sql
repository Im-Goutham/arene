/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `category_type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `category_type_name_key` ON `category_type`(`name`);
