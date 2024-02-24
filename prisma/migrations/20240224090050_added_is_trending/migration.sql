-- AlterTable
ALTER TABLE `product` ADD COLUMN `is_trending` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `price` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `product_item` MODIFY `price` INTEGER NULL DEFAULT 0;
