/*
  Warnings:

  - Added the required column `action` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subType` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_Commercial_Property_id_fkey`;

-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_Residential_Property_id_fkey`;

-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_agreement_id_fkey`;

-- AlterTable
ALTER TABLE `agreement` MODIFY `prop_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `property` ADD COLUMN `action` VARCHAR(191) NOT NULL,
    ADD COLUMN `subType` VARCHAR(191) NOT NULL,
    MODIFY `agreement_id` INTEGER NULL,
    MODIFY `latitude` DECIMAL(65, 30) NULL,
    MODIFY `longitude` DECIMAL(65, 30) NULL,
    MODIFY `Commercial_Property_id` INTEGER NULL,
    MODIFY `Residential_Property_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_agreement_id_fkey` FOREIGN KEY (`agreement_id`) REFERENCES `Agreement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_Commercial_Property_id_fkey` FOREIGN KEY (`Commercial_Property_id`) REFERENCES `Commercial_Property`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_Residential_Property_id_fkey` FOREIGN KEY (`Residential_Property_id`) REFERENCES `Residential_Property`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
