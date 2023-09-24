/*
  Warnings:

  - Made the column `username` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `forgotPasswordToken` VARCHAR(191) NULL,
    MODIFY `forgotPasswordTokenExpiry` DATETIME(3) NULL,
    MODIFY `verifyToken` VARCHAR(191) NULL,
    MODIFY `verifyTokenExpiry` DATETIME(3) NULL;
