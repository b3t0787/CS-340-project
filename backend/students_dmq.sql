--******************************************--
--DB manipulation queries for Students table--
--******************************************--
--Create student--
INSERT INTO `Students` (`degree_id`, `first_name`, `last_name`, `street`,
            `city`, `state`, `zip`, `phone_number`, `dob`)
VALUES (:degree_id, :first_name, :last_name, :street, :city, :s_state, :zip, :pn, :dob);

--Retrieve students--
SELECT Students.student_id, Students.first_name, Students.last_name, Students.street, 
	   Students.city, Students.state, Students.zip, Students.phone_number,
	   Students.dob, Degrees.degree_name, Scholarships.name, Degrees.degree_id,
	   Scholarships.scholarship_id FROM Students 
	   INNER JOIN Degrees ON Students.degree_id = Degrees.degree_id
	   LEFT JOIN Scholarships ON Students.scholarship_id = Scholarships.scholarship_id;

--Update student--
UPDATE `Students` SET `degree_id`=:degree_id, `first_name`=:first_name, `last_name`=:last_name,
                      `street`=:street, `city`=:city, `state`=:s_state, `zip`=:zip,
                      `phone_number`=:ph, `dob`=:dob WHERE `student_id`=:student_id;

--Delete student--
DELETE FROM `Students` WHERE `student_id`=:student_id;

--search by first AND last name
SELECT Students.student_id, Students.first_name, Students.last_name, Students.street, 
	   Students.city, Students.state, Students.zip, Students.phone_number,
	   Students.dob, Degrees.degree_name, Scholarships.name FROM Students 
	   INNER JOIN Degrees ON Students.degree_id = Degrees.degree_id
	   LEFT JOIN Scholarships ON Students.scholarship_id = Scholarships.scholarship_id WHERE Students.first_name LIKE `:first_name%` 
	   AND Students.last_name LIKE `:last_name%`;

--search by degrees
SELECT Students.student_id, Students.first_name, Students.last_name, Students.street, 
	   Students.city, Students.state, Students.zip, Students.phone_number,
	   Students.dob, Degrees.degree_name, Scholarships.name FROM Students 
	   INNER JOIN Degrees ON Students.degree_id = Degrees.degree_id
	   LEFT JOIN Scholarships ON Students.scholarship_id = Scholarships.scholarship_id WHERE 
	   Students.degree_id=:degree_id;

--**********************************************--
--DB manipulation queries for Scholarships table--
--**********************************************--
--Create scholarship--
INSERT INTO `Scholarships` (`name`, `amount`)
VALUES (:s_name, :amount);

--Retrieve scholarships--
SELECT * from `Scholarships`;

--Update scholarships--
UPDATE `Scholarships` SET `name`=:s_name, `amount`=:amount WHERE `scholarship_id`=:scholarship_id;

--Delete scholarship--
DELETE FROM `Scholarships` WHERE `scholarship_id`=:scholarship_id;

-- search based on minimum and maximum amount for Scholarhips
SELECT * FROM Scholarships WHERE Scholarships.amount BETWEEN :min_amt AND :max_amt;

--*****************************************--
--DB manipulation queries for Degrees table--
--*****************************************--
--Create degree--
INSERT INTO `Degrees` (`dept_id`, `degree_name`)
VALUES (:dept_id, :degree_name);

SELECT Degrees.degree_id, Departments.dept_id, Degrees.degree_name, Departments.dept_name FROM Degrees
	   INNER JOIN Departments ON Degrees.dept_id = Departments.dept_id;

--Update degree--
UPDATE `Degrees` SET `dept_id`=:dept_id, `degree_name`=:degree_name WHERE `degree_id`=:degree_id;

--Delete degree--
DELETE FROM `Degrees` WHERE `degree_id`=:degree_id;

-- Search Degrees by Department
SELECT Degrees.degree_id, Departments.dept_id, Degrees.degree_name, Departments.dept_name FROM Degrees
	   INNER JOIN Departments ON Degrees.dept_id = Departments.dept_id WHERE Departments.dept_id=:dept_id;

--******************************************************--
--DB manipulation queries for Course Registrations table--
--******************************************************--
--Create course registration--
INSERT INTO `Course_Registrations` (`student_id`, `course_id`)
VALUES (:student_id, :course_id);

--Retrieve course registrations--
SELECT Students.student_id, Courses.course_id, Students.first_name, Students.last_name, 
	   Courses.title, Course_Registrations.score, 
	   Course_Registrations.grade FROM Course_Registrations
	   LEFT JOIN Students ON Course_Registrations.student_id = Students.student_id
	   INNER JOIN Courses ON Course_Registrations.course_id = Courses.course_id;

--Update course registration--
UPDATE `Course_Registrations` SET `score`=:score,
                                  `grade`=:grade WHERE `student_id`=:student_id AND
                                  `course_id`=:course_id;
                
--Delete course registration--
DELETE FROM `Course_Registrations` WHERE `student_id`=:student_id AND `course_id`=:course_id;

-- Search based on student_id or course_id
SELECT Students.first_name, Students.last_name, Courses.title, Course_Registrations.score, 
	   Course_Registrations.grade FROM Course_Registrations
	   LEFT JOIN Students ON Course_Registrations.student_id = Students.student_id
	   INNER JOIN Courses ON Course_Registrations.course_id = Courses.course_id WHERE Students.student_id=:student_id
	   OR Courses.course_id=:course_id;

-- Search based on minimum and maximum grade
SELECT Students.first_name, Students.last_name, Courses.title, Course_Registrations.score, 
	   Course_Registrations.grade FROM Course_Registrations
	   LEFT JOIN Students ON Course_Registrations.student_id = Students.student_id
	   INNER JOIN Courses ON Course_Registrations.course_id = Courses.course_id WHERE 
	   Course_Registrations.score BETWEEN :min_score AND :max_score;

--*****************************************--
--DB manipulation queries for Courses table--
--*****************************************--
--Create course--
INSERT INTO `Courses` (`dept_id`, `title`, `unit_hours`)
VALUES (:dept_id, :title, :unit_hours);

--Retrieve Courses--
SELECT Courses.course_id, Departments.dept_id, Courses.title, Departments.dept_name, Courses.unit_hours 
	   FROM Courses INNER JOIN Departments ON Courses.dept_id = Departments.dept_id;


--Update course--
UPDATE `Courses` SET `dept_id`=:dept_id, `title`=:title, `unit_hours`=:unit_hours
WHERE `course_id`=:course_id;

--Delete course--
DELETE FROM `Courses` WHERE `course_id`=:course_id;

--Search by Department--
SELECT Courses.course_id, Departments.dept_id, Courses.title, Departments.dept_name, Courses.unit_hours 
	   FROM Courses INNER JOIN Departments ON Courses.dept_id = Departments.dept_id 
	   WHERE Departments.dept_id=:dept_id;


--***************************************--
--DB manipulation queries for Departments--
--***************************************--
--Create department--
INSERT INTO `Departments` (`dept_name`)
VALUES (:dept_name);

--Retrieve departments--
SELECT * FROM `Departments`;

--Update department--
UPDATE `Departments` SET `dept_name`=:dept_name WHERE `dept_id`=:dept_id;

--Delete department--
DELETE FROM `Departments` WHERE `dept_id`=:dept_id;