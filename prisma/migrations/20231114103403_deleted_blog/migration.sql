/*
  Warnings:

  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `blog` DROP FOREIGN KEY `Blog_user_id_fkey`;

-- DropTable
DROP TABLE `blog`;
