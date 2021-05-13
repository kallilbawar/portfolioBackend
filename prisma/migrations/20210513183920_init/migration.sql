-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191),
    `valid` BOOLEAN,
    `password` VARCHAR(191),

    UNIQUE INDEX `User.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Number` INTEGER NOT NULL,
    `name` VARCHAR(191),
    `valid` BOOLEAN,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Contract.Number_unique`(`Number`),
    UNIQUE INDEX `Contract_userId_unique`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `description` VARCHAR(191),
    `seen` BOOLEAN,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Notification_userId_unique`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Biling` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Number` INTEGER,
    `description` VARCHAR(191),
    `date` DATETIME(3),
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Biling.Number_unique`(`Number`),
    UNIQUE INDEX `Biling_userId_unique`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Porjet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Number` INTEGER,
    `description` VARCHAR(191),
    `start_date` DATETIME(3),
    `end_date` DATETIME(3),
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Porjet.Number_unique`(`Number`),
    UNIQUE INDEX `Porjet_userId_unique`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MockUp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `path` VARCHAR(191),
    `projetId` INTEGER NOT NULL,

    UNIQUE INDEX `MockUp_projetId_unique`(`projetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `description` VARCHAR(191),
    `archived` BOOLEAN,
    `projetId` INTEGER NOT NULL,

    UNIQUE INDEX `Task_projetId_unique`(`projetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskDeadLine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `start_date` DATETIME(3),
    `end_date` DATETIME(3),
    `taskId` INTEGER NOT NULL,

    UNIQUE INDEX `TaskDeadLine_taskId_unique`(`taskId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contract` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Biling` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Porjet` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MockUp` ADD FOREIGN KEY (`projetId`) REFERENCES `Porjet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD FOREIGN KEY (`projetId`) REFERENCES `Porjet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskDeadLine` ADD FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
