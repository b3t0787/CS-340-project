import * as mysql from './dbcon.mjs';

// Create new course
const create = (req, res) => {
    console.log("is courses.create being called?");
    let query = "INSERT INTO `Courses` (dept_id, title, unit_hours) VALUES (?, ?, ?);";
    let inserts = [req.body.dept_id, req.body.title, req.body.unit_hours];
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

// Read courses 
const retrieve = (req, res) => {
    console.log("is courses.retrieve being called?");
    let query = "SELECT Courses.course_id, Courses.title, Departments.dept_name, Courses.unit_hours FROM Courses INNER JOIN Departments ON Courses.dept_id = Departments.dept_id;";
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

// Delete course
const remove = (req, res) => {
    console.log("is courses.remove being called?");
    console.log(req.params._id);
    let query = "DELETE FROM Courses WHERE course_id = ?;";
    var inserts = [req.params._id];
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