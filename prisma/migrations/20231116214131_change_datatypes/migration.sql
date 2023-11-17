/*
  Warnings:

  - You are about to alter the column `sale_amount` on the `commercial_property` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `rent_amount` on the `commercial_property` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sale_amount` on the `residential_property` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `rent_amount` on the `residential_property` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `commercial_property` MODIFY `sale_amount` INTEGER NULL,
    MODIFY `rent_amount` INTEGER NULL;

-- AlterTable
ALTER TABLE `residential_property` MODIFY `sale_amount` INTEGER NULL,
    MODIFY `rent_amount` INTEGER NULL;
