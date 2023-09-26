-- AlterTable
ALTER TABLE `user` MODIFY `forgotPasswordToken` VARCHAR(191) NULL,
    MODIFY `verifyToken` VARCHAR(191) NULL;
