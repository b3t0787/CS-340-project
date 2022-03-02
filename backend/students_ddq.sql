SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `Students`;
CREATE TABLE `Students` (
    `student_id` int AUTO_INCREMENT UNIQUE NOT NULL,
    `degree_id` int NOT NULL,
    `scholarship_id` int,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `street` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `state` varchar(255) NOT NULL,
    `zip` int NOT NULL,
    `phone_number` varchar(255),
    `dob` date,
    PRIMARY KEY (`student_id`),
    CONSTRAINT FOREIGN KEY (`degree_id`)
        REFERENCES `Degrees` (`degree_id`),
    CONSTRAINT FOREIGN KEY (`scholarship_id`)
        REFERENCES `Scholarships` (`scholarship_id`) ON DELETE SET NULL
)ENGINE=InnoDB;

DROP TABLE IF EXISTS `Scholarships`;
CREATE TABLE `Scholarships` (
    `scholarship_id` int AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `amount` decimal(8, 2) NOT NULL,
    PRIMARY KEY (`scholarship_id`)
)ENGINE=InnoDB;



DROP TABLE IF EXISTS `Courses`;
CREATE TABLE `Courses` (
    `course_id` int AUTO_INCREMENT,
    `dept_id` int NOT NULL,
    `title` varchar(255) NOT NULL,
    `unit_hours` int NOT NULL,
    PRIMARY KEY (`course_id`),
    CONSTRAINT FOREIGN KEY (`dept_id`)
        REFERENCES `Departments` (`dept_id`)
)ENGINE=InnoDB;

DROP TABLE IF EXISTS `Degrees`;
CREATE TABLE `Degrees` (
    `degree_id` int AUTO_INCREMENT,
    `dept_id` int NOT NULL,
    `degree_name` varchar(255) NOT NULL,
    PRIMARY KEY (`degree_id`),
    CONSTRAINT FOREIGN KEY (`dept_id`) 
        REFERENCES `Departments` (`dept_id`)
)ENGINE=InnoDB;

DROP TABLE IF EXISTS `Departments`;
CREATE TABLE `Departments` (
    `dept_id` int AUTO_INCREMENT UNIQUE NOT NULL,
    `dept_name` varchar(255) NOT NULL,
    PRIMARY KEY (`dept_id`)
)ENGINE=InnoDB;

DROP TABLE IF EXISTS `Course_Registrations`;
CREATE TABLE `Course_Registrations` (
    `student_id` int NOT NULL,
    `course_id` int NOT NULL,
    `score` decimal(4, 2),
    `grade` char,
    PRIMARY KEY (`student_id`, `course_id`),
    CONSTRAINT FOREIGN KEY (`student_id`)
        REFERENCES `Students` (`student_id`),
    CONSTRAINT FOREIGN KEY (`course_id`)
        REFERENCES `Courses` (`course_id`)
)ENGINE=InnoDB;

SET FOREIGN_KEY_CHECKS=1;

INSERT INTO `Departments` (`dept_name`)
VALUES ("Scream"),
       ("Scaring"),
       ("Doors"),
       ("Engineering"),
       ("Monsters");

INSERT INTO `Degrees` (`dept_id`, `degree_name`)
VALUES (1, "BS Scream"),
       (2, "BS Scaring"),
       (4, "BS Engineering"),
       (3, "BS Doors"),
       (5, "BS Monsters"),
       (5, "BS Monster Hiding"),
       (2, "BS Scaring Pets"),
       (3, "BS Hinges");

INSERT INTO `Students` (`degree_id`, `first_name`, `last_name`, `street`,
            `city`, `state`, `zip`, `phone_number`, `dob`)
VALUES (2, "Mike", "Wazowski", "123 Stalk St", "Monstropolis", "Monstro", 59136,
        "(797)467-3457", '1909-07-22'),
        (2, "James", "Sullivan", "456 Stalk St", "Monstropolis", "Monstro", 59136,
        "(797)473-3847", '1955-05-13'),
        (3, "Randy", "Boggs", "123 Stalk St", "Monstropolis", "Monstro", 59136,
        "(797)273-1247", '1964-03-06'),
        (7, "Terry", "Perry", "456 Stalk St", "Monstropolis", "Monstro", 59136,
        "(797)473-1221", '1976-11-21');

INSERT INTO `Scholarships` (`name`, `amount`)
VALUES ("Cocal-Cola Monsters Scholarship", 35000.00),
       ("All Monster Scholarship", 3500.00),
       ("Monsters Energy Scholarship", 1600.86);


INSERT INTO `Courses` (`dept_id`, `title`, `unit_hours`)
VALUES (2, "SCAR 110: Vocal Study", 2),
       (5, "MNST 251: Monster Sizes", 3),
       (5, "MNST 252: Ocular Study", 3),
       (5, "MNST 436: Monster Field Study", 3),
       (5, "MNST 652: Advanced Genetics", 4),
       (4, "ENGN 101: Introduction to Energy", 3),
       (4, "ENGN 106: Properties of Energy", 3),
       (4, "ENGN 425: Synthetics Applied", 3),
       (1, "SCRM 111: Basic Scream Energy", 4),
       (1, "SCRM 130: Scream Technology", 4),
       (1, "SCRM 262: Conduction", 4),
       (1, "SCRM 302: Scream Energy Lab 1", 4),
       (1, "SCRM 312: Scream Theory", 4),
       (1, "SCRM 408: Scream Energy Lab 2", 4),
       (1, "SCRM 499: Scream Energy Thesis", 3),
       (3, "DOOR 210: Door Tech Woodshop", 4),
       (3, "DOOR 214: Hinge Application", 4),
       (3, "DOOR 340: Splinter Prevention", 4),
       (3, "DOOR 377: Advanced Doorknobs", 4),
       (3, "DOOR 380: Deadbolt Design", 4),
       (3, "DOOR 395: Portal Connectivity", 4),
       (3, "DOOR 410: Triggers and Failsafes", 3),
       (3, "DOOR 489: Advanced Wiring", 5),
       (3, "DOOR 499: Door Tech Apprenticeship", 1),
       (2, "SCAR 120: History of Scaring", 3),
       (2, "SCAR 145: Avoiding Lights", 4),
       (2, "SCAR 203: Scare Appearance", 3),
       (2, "SCAR 204: Approaches", 4),
       (2, "SCAR 206: Disappearing & Hiding", 3),
       (2, "SCAR 209: Smells and the Other Senses", 3),
       (2, "SCAR 332: Toxicity Studies", 4),
       (2, "SCAR 404: Seasonal Scares", 3),
       (2, "SCAR 417: Family Pets", 3),
       (2, "SCAR 145: Avoiding Lights", 4);

INSERT INTO `Course_Registrations` (`student_id`, `course_id`, `score`, `grade`)
VALUES (1, 1, 98, 'A'),
       (2, 2, 77, 'C'),
       (3, 28, 87, 'B');

  
INSERT INTO `Course_Registrations` (`student_id`, `course_id`)
VALUES (3, 26),
       (4, 7)