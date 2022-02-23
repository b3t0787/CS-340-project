--DB manipulation queries for Students table--
--Create student--
INSERT INTO `Students` (`degree_id`, `first_name`, `last_name`, `street`,
            `city`, `state`, `zip`, `phone_number`, `dob`)
VALUES (:degree_id, :first_name, :last_name, :stree, :city, :s_state, :zip, :pn, :dob);

--Retrieve students--
SELECT * FROM `Students`;

--Update student--
UPDATE `Students` SET `degree_id`=:degree_id, `first_name`=:first_name, `last_name`=:last_name,
                      `street`=:street, `city`=:city, `state`=:s_state, `zip`=:zip,
                      `phone_number`=:ph, `dob`=:dob) WHERE `student_id`=:student_id;

--Delete student--
DELETE FROM `Students` WHERE `student_id`=:student_id;


--DB manipulation queries for Scholarships table--
--Create scholarship--
INSERT INTO `Scholarships` (`name`, `amount`)
VALUES (:s_name, :amount);

--Retrieve scholarships--
SELECT * from `Scholarships`;

--Update scholarships--
UPDATE `Scholarships` SET `name`=:s_name, `amount`=:amount WHERE `scholarship_id`=:scholarship_id;

--Delete scholarship--
DELETE FROM `Scholarships` WHERE `scholarship_id`=:scholarship_id;


--DB manipulation queries for Degrees table--
--Create degree--
INSERT INTO `Degrees` (`dept_id`, `degree_name`)
VALUES (:dept_id, :degree_name);

--Retrieve degrees--
SELECT * FROM `Degrees`;

--Update degree--
UPDATE `Degrees` SET `dept_id`=:dept_id, `degree_name`=:degree_name WHERE `degree_id`=:degree_id;

--Delete degree--
DELETE FROM `Degrees` WHERE `degree_id`=:degree_id;


--DB manipulation queries for Course Registrations table--
--Create course registration--
INSERT INTO `Course_Registrations` (`student_id`, `course_id`, `score`, `grade`)
VALUES (:student_id, :course_id, :score, :grade);

--Retrieve course registrations--
SELECT * FROM `Course_Registrations`;

--Update course registration--
UPDATE `Course_Registrations` SET `student_id`=:student_id, `course_id`=:course_id, `score`=:score,
                                  `grade`=:grade WHERE `student_id`=:student_id AND
                                  `course_id`=:course_id;
                
--Delete course registration--
DELETE FROM `Course_Registrations` WHERE `student_id`=:student_id AND `course_id`=:course_id;


--DB manipulation queries for Courses table--
--Create course--
INSERT INTO `Courses` (`dept_id`, `title`, `unit_hours`)
VALUES (:dept_id, :title, :unit_hours);

--Retrieve Courses--
SELECT * FROM `Courses`;

--Update course--
UPDATE `Courses` SET `dept_id`=:dept_id, `title`=:title, `unit_hours`=:unit_hours
WHERE `course_id`=:course_id;

--Delete course--
DELETE FROM `Courses` WHERE `course_id`=:course_id;


--DB manipulation queries for Departments--
--Create department--
INSERT INTO `Departments` (`dept_name`)
VALUES (:dept_name);

--Retrieve departments--
SELECT * FROM `Departments`;

--Update department--
UPDATE `Departments` SET `dept_name`=:dept_name WHERE `dept_id`=:dept_id;

--Delete department--
DELETE FROM `Departments` WHERE `dept_id`=:dept_id;