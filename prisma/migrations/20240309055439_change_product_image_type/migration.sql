/*
  Warnings:

  - You are about to drop the column `product_image` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `product_image` on the `product_item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `product_image`;

-- AlterTable
ALTER TABLE `product_item` DROP COLUMN `product_image`;

-- CreateTable
CREATE TABLE `ProductImage` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NULL,
    `productItemId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_productItemId_fkey` FOREIGN KEY (`productItemId`) REFERENCES `product_item`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
