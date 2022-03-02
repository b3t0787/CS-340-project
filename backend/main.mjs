import * as mysql from './dbcon.mjs';
import * as students from './Students.mjs';
import * as courses from './Courses.mjs';
import * as departments from './Departments.mjs';
import * as degrees from './Degrees.mjs';
import * as courseRegistrations from './CourseRegistrations.mjs';
import * as scholarships from './Scholarships.mjs';
import express from 'express';
const app = express();
app.use(express.json());

const PORT = 33430;

app.set('mysql', mysql);
/********************************* */
// CRUD operations for Student entity
/********************************* */
app.post('/add-student', students.create);
app.get('/Students', students.retrieve);
app.get('/search-first-and-last/first_name/:first_name/last_name/:last_name', students.searchFirstAndLast);
app.get('/search-first-or-last/first_name/:first_name/last/:last', students.searchFirstOrLast);
app.delete('/Students/:_id', students.remove);


/********************************* */
// CRUD operations for Courses entity
/********************************* */
app.post('/add-course', courses.create);
app.get('/Courses', courses.retrieve);
app.delete('/Courses/:_id', courses.remove);

/************************************* */
// CRUD operations for Departments entity
/************************************* */
app.post('/add-department', departments.create);
app.get('/Departments', departments.retrieve);
app.delete('/Departments/:_id', departments.remove);

/********************************* */
// CRUD operations for Degrees entity
/********************************* */
app.post('/add-degree', degrees.create);
app.get('/Degrees', degrees.retrieve);
app.delete('/Degrees/:_id', degrees.remove);

/********************************************** */
// CRUD operations for Course Registrations entity
/********************************************** */
app.post('/add-course-registration', courseRegistrations.create);
app.get('/Course-Registrations', courseRegistrations.retrieve);
app.delete('/Course-Registrations/student_id/:student_id/course_id/:course_id', courseRegistrations.remove);

/********************************************** */
// CRUD operations for Scholarships entity
/********************************************** */
app.post('/add-scholarship', scholarships.create);
app.get('/Scholarships', scholarships.retrieve);
app.delete('/Scholarships/:_id', scholarships.remove);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
