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

export { create , retrieve, remove};