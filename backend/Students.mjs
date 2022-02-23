import * as mysql from './dbcon.mjs';

// Create new Student
const createStudent = (req, res) => {
    console.log("is createStudent being called?");
    let query = "INSERT INTO Students (degree_id, first_name, last_name, street, city, state, zip, phone_number, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let inserts = [req.body.degree_id, req.body.first_name, req.body.last_name, req.body.street,
    req.body.city, req.body.state, req.body.zip, req.body.phone_number, req.body.dob];
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

const retrieve = (req, res) => {
    console.log("is retrieve being called?");
    let query = "SELECT * FROM Students";
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

const remove = (req, res) => {
    console.log("is remove being called?");
    let query = "DELETE FROM Students WHERE student_id = ?";
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

export { createStudent , retrieve, remove};