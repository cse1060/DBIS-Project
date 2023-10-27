-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `FullName` VARCHAR(191) NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `isnew` BOOLEAN NOT NULL DEFAULT true,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `forgotPasswordToken` VARCHAR(191) NULL,
    `forgotPasswordTokenExpiry` DATETIME(3) NULL,
    `verifyToken` VARCHAR(191) NULL,
    `verifyTokenExpiry` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agent_id` INTEGER NOT NULL,
    `agreement_id` INTEGER NOT NULL,
    `date_added` DATETIME(3) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `Property_Type` VARCHAR(191) NOT NULL,
    `Commercial_Property_id` INTEGER NOT NULL,
    `Residential_Property_id` INTEGER NOT NULL,

    UNIQUE INDEX `Property_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Profile` (
    `prop_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `isliked` BOOLEAN NULL,
    `isOwned` BOOLEAN NULL,
    `isVisited` BOOLEAN NULL,
    `Rating` INTEGER NULL,

    UNIQUE INDEX `User_Profile_prop_id_user_id_key`(`prop_id`, `user_id`),
    PRIMARY KEY (`prop_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comments` (
    `user_id` INTEGER NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prop_id` INTEGER NOT NULL,
    `body` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agreement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_id` INTEGER NOT NULL,
    `prop_id` INTEGER NOT NULL,
    `agreement_desc` VARCHAR(191) NULL,

    UNIQUE INDEX `Agreement_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    UNIQUE INDEX `Agent_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commercial_Property` (
    `id` INTEGER NOT NULL,
    `garages` INTEGER NOT NULL,
    `floors` INTEGER NOT NULL,
    `area` DECIMAL(65, 30) NOT NULL,
    `for_sale` BOOLEAN NULL,
    `sale_amount` BIGINT NULL,
    `for_rent` BOOLEAN NULL,
    `rent_amount` BIGINT NULL,

    UNIQUE INDEX `Commercial_Property_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Residential_Property` (
    `id` INTEGER NOT NULL,
    `rooms` INTEGER NOT NULL,
    `balconies` INTEGER NOT NULL,
    `area` DECIMAL(65, 30) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `for_sale` BOOLEAN NULL,
    `sale_amount` BIGINT NULL,
    `for_rent` BOOLEAN NULL,
    `rent_amount` BIGINT NULL,

    UNIQUE INDEX `Residential_Property_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_agreement_id_fkey` FOREIGN KEY (`agreement_id`) REFERENCES `Agreement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `Agent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_Commercial_Property_id_fkey` FOREIGN KEY (`Commercial_Property_id`) REFERENCES `Commercial_Property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_Residential_Property_id_fkey` FOREIGN KEY (`Residential_Property_id`) REFERENCES `Residential_Property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Profile` ADD CONSTRAINT `User_Profile_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_user_id_prop_id_fkey` FOREIGN KEY (`user_id`, `prop_id`) REFERENCES `User_Profile`(`user_id`, `prop_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agreement` ADD CONSTRAINT `Agreement_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
