/*
  Warnings:

  - You are about to drop the `agent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_agent_id_fkey`;

-- DropTable
DROP TABLE `agent`;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
