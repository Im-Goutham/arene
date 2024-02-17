-- AlterTable
ALTER TABLE `category` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `product_item` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;
