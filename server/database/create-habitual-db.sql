DROP DATABASE IF EXISTS `habitual`;
CREATE DATABASE `habitual`;
USE `habitual`;

CREATE TABLE `users` (
	`uid` VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL
);

CREATE TABLE `habits` (
	`uid` VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
    `user_uid` VARCHAR(255) NOT NULL UNIQUE,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `streak` INT NOT NULL DEFAULT 0,
    FOREIGN KEY (`user_uid`)
		REFERENCES `users` (`uid`)
);

CREATE TABLE `logs` (
	`habit_uid` VARCHAR(255) NOT NULL UNIQUE,
    `date` DATETIME NOT NULL DEFAULT NOW(),
    FOREIGN KEY (`habit_uid`)
		REFERENCES `habits` (`uid`)
);