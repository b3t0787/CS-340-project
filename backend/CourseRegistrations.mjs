import * as mysql from './dbcon.mjs';

// Create new course-registration
const create = (req, res) => {
    console.log("is courseRegistrations.create being called?");
    let query = "INSERT INTO Course_Registrations (student_id, course_id) VALUES (?, ?);";
    let inserts = [req.body.student_id, req.body.course_id];
    query = mysql.pool.query(query, inserts, function(err, results, fields) {
        if (err) {
            console.log(err);
            // In case of an error, send back status code 400
            res.status(400).json({ Error: 'Request failed' });
        }
        else {
            console.log("does the else clause execute?")
            res.setHeader('content-type', 'application/json');
            res.status(201).json();
        }
    })
}

// Read course-registrations 
const retrieve = (req, res) => {
    console.log("is coursesRegistrations.retrieve being called?");
    let query = "SELECT Students.student_id, Courses.course_id, Students.first_name, Students.last_name, Courses.title, Course_Registrations.score, Course_Registrations.grade FROM Course_Registrations LEFT JOIN Students ON Course_Registrations.student_id = Students.student_id INNER JOIN Courses ON Course_Registrations.course_id = Courses.course_id;";
    query = mysql.pool.query(query, function(err, results, fields) {
        if (err) {
            console.log(err);
            // In case of an error, send back status code 400
            res.status(400).json({Error: 'Request failed'});
        }
        else {
            console.log("is else being called in retrieve")
            res.setHeader('content-type', 'application/json');
            res.status(200).json(results);
        }
    })
}

// Search by student or/and course
const searchByStudentCourse = (req, res) => {
    console.log("is course-registrations.searchByStudentCourse being called?");
    console.log(req.params);
    if (req.params.stud === '@@@') {
        req.params.stud = '';
    }
    if (req.params.cor === '@@@') {
        req.params.cor = '';
    }
    console.log(req.params);
    let query = "SELECT Students.first_name, Students.last_name, Courses.title, Course_Registrations.score, Course_Registrations.grade FROM Course_Registrations LEFT JOIN Students ON Course_Registrations.student_id = Students.student_id INNER JOIN Courses ON Course_Registrations.course_id = Courses.course_id WHERE Students.student_id=? OR Courses.course_id=?;";
    var inserts = [req.params.stud, req.params.cor];
    query = mysql.pool.query(query, inserts, function(err, results, fields) {
        if (err) {
            console.log(err);
            // In case of an error, send back status code 400
            res.status(400).json({Error: 'Request failed'});
        }
        else {
            console.log("is else being called in retrieve")
            res.setHeader('content-type', 'application/json');
            res.status(200).json(results);
        }
    })
}

// Search by score
const searchByScore = (req, res) => {
    console.log("is course-registrations.searchByScore being called?");
    console.log(req.params);
    if (req.params.min === '@@@') {
        req.params.min = 0;
    }
    if (req.params.max === '@@@') {
        req.params.max = 100;
    }
    console.log(req.params);
    let query = "SELECT Students.first_name, Students.last_name, Courses.title, Course_Registrations.score, Course_Registrations.grade FROM Course_Registrations LEFT JOIN Students ON Course_Registrations.student_id = Students.student_id INNER JOIN Courses ON Course_Registrations.course_id = Courses.course_id WHERE Course_Registrations.score BETWEEN ? AND ?;";
    var inserts = [req.params.min, req.params.max];
    query = mysql.pool.query(query, inserts, function(err, results, fields) {
        if (err) {
            console.log(err);
            // In case of an error, send back status code 400
            res.status(400).json({Error: 'Request failed'});
        }
        else {
            console.log("is else being called in retrieve")
            res.setHeader('content-type', 'application/json');
            res.status(200).json(results);
        }
    })
}

// Update coure-registration
const update = (req, res) => {
    let grade = obtainLetterGrade(req.body.score);
    console.log("is update being called?");
    console.log(req.body);
    console.log(req.params);
    console.log(grade);
    let query = "UPDATE Course_Registrations SET score=?, grade=? WHERE student_id=? AND course_id=?;";
    var inserts = [req.body.score, grade, req.params.student_id, req.params.course_id];
    query = mysql.pool.query(query, inserts, function(err, results, fields) {
        if (err) {
            console.log(err);
            // In case of an error, send back status code 400
            res.status(400).json({Error: 'Request failed'});
        }
        else {
            console.log("does the else clause execute?")
            res.setHeader('content-type', 'application/json');
            res.status(200).json();
        }
    })
}


// Delete course-registration
const remove = (req, res) => {
    console.log("is coursesRegistrations.remove being called?");
    console.log("student_id is ", req.params.student_id)
    console.log("course_is is", req.params.course_id);
    let query = "DELETE FROM Course_Registrations WHERE student_id=? AND course_id=?;";
    var inserts = [req.params.student_id, req.params.course_id];
    query = mysql.pool.query(query, inserts, function(err, results, fields) {
        if (err) {
            console.log(err);
            // In case of an error, send back status code 400
            res.status(400).json({Error: 'Request failed'});
        }
        else {
            console.log("does the else clause execute?")
            res.setHeader('content-type', 'application/json');
            res.status(204).json();
        }
    })
}

const obtainLetterGrade = (score) => {
    // Calculate letter grade based on score
    let grade
    if (score >= 90) {
        grade = 'A'
    }
    else if (score >= 80) {
        grade = 'B'
    }
    else if (score >= 70) {
        grade = 'C'
    }
    else if (score >= 60) {
        grade = 'D'
    }
    else {
        grade = 'F'
    }
    return grade
};

export { create , retrieve, searchByStudentCourse, searchByScore, remove, update};