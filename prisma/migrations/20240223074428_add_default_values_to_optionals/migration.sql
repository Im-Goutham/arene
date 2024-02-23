/*
  Warnings:

  - Made the column `name` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `value` on table `payment_type` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `promotion` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `shipping_method` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_default` on table `user_payment_method` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `variation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `value` on table `variation_option` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `parent_category_id` VARCHAR(191) NULL DEFAULT '',
    MODIFY `description` VARCHAR(191) NULL DEFAULT '',
    MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `order_status` MODIFY `status` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `payment_type` MODIFY `value` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL DEFAULT '',
    MODIFY `product_image` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `product_item` MODIFY `sku` VARCHAR(191) NULL DEFAULT '',
    MODIFY `qty_in_stock` INTEGER NULL DEFAULT 0,
    MODIFY `product_image` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `promotion` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL DEFAULT '',
    MODIFY `discount_rate` INTEGER NULL DEFAULT 0,
    MODIFY `start_date` VARCHAR(191) NULL DEFAULT '',
    MODIFY `end_date` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `shipping_method` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `price` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `shop_order` MODIFY `order_date` VARCHAR(191) NULL DEFAULT '',
    MODIFY `shipping_address` VARCHAR(191) NULL DEFAULT '',
    MODIFY `shipping_method` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `user_payment_method` MODIFY `provider` VARCHAR(191) NULL DEFAULT '',
    MODIFY `account_number` VARCHAR(191) NULL DEFAULT '',
    MODIFY `is_default` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user_review` MODIFY `rating_value` INTEGER NULL DEFAULT 5,
    MODIFY `comment` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `variation` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `variation_option` MODIFY `value` VARCHAR(191) NOT NULL;
