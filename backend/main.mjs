import * as mysql from './dbcon.mjs';
import * as students from './Students.mjs';
import * as courses from './Courses.mjs';
import * as departments from './Departments.mjs';
import * as degrees from './Degrees.mjs';
import * as courseRegistrations from './CourseRegistrations.mjs';
import * as scholarships from './Scholarships.mjs';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());

const PORT = 33430;


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.set('mysql', mysql);
/********************************** */
// CRUD and search operations for Students entity
/********************************** */
app.post('/add-student', students.create);
app.get('/Students', students.retrieve);
app.get('/Students/search-first-and-last/first_name/:first_name/last_name/:last_name', students.searchFirstAndLast);
app.get('/Students/search-by-degree/degree_id/:degree_id', students.searchByDegree);
app.put('/Students/:_id', students.update);
app.delete('/Students/:_id', students.remove);


/********************************* */
// CRUD and search operations for Courses entity
/********************************* */
app.post('/add-course', courses.create);
app.get('/Courses', courses.retrieve);
app.get('/Courses/search-by-department/:dept_id', courses.searchByDepartment)
app.put('/Courses/:_id', courses.update);
app.delete('/Courses/:_id', courses.remove);

/************************************* */
// CRUD and search operations for Departments entity
/************************************* */
app.post('/add-department', departments.create);
app.get('/Departments', departments.retrieve);
app.put('/Departments/:_id', departments.update);
app.delete('/Departments/:_id', departments.remove);

/********************************* */
// CRUD and search operations for Degrees entity
/********************************* */
app.post('/add-degree', degrees.create);
app.get('/Degrees', degrees.retrieve);
app.get('/Degrees/search-by-department/:dept_id', degrees.searchByDepartment)
app.put('/Degrees/:_id', degrees.update);
app.delete('/Degrees/:_id', degrees.remove);

/********************************************** */
// CRUD and search operations for Course Registrations entity
/********************************************** */
app.post('/add-course-registration', courseRegistrations.create);
app.get('/Course-Registrations', courseRegistrations.retrieve);
app.get('/Course-Registrations/search-by-student-course/stud/:stud/cor/:cor', courseRegistrations.searchByStudentCourse);
app.get('/Course-Registrations/search-by-score/min/:min/max/:max', courseRegistrations.searchByScore);
app.put('/Course-Registrations/student_id/:student_id/course_id/:course_id', courseRegistrations.update);
app.delete('/Course-Registrations/student_id/:student_id/course_id/:course_id', courseRegistrations.remove);

/********************************************** */
// CRUD and search operations for Scholarships entity
/********************************************** */
app.post('/add-scholarship', scholarships.create);
app.get('/Scholarships', scholarships.retrieve);
app.get('/Scholarships/search-by-score/min/:min/max/:max', scholarships.searchByScore);
app.put('/Scholarships/:_id', scholarships.update);
app.delete('/Scholarships/:_id', scholarships.remove);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
