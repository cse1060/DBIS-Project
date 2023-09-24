/*
  Warnings:

  - Added the required column `forgotPasswordToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `forgotPasswordTokenExpiry` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifyToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifyTokenExpiry` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `forgotPasswordToken` VARCHAR(191) NOT NULL,
    ADD COLUMN `forgotPasswordTokenExpiry` DATETIME(3) NOT NULL,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `verifyToken` VARCHAR(191) NOT NULL,
    ADD COLUMN `verifyTokenExpiry` DATETIME(3) NOT NULL;
