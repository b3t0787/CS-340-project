import * as mysql from './dbcon.mjs';

// Create new Student
const create = (req, res) => {
    console.log("is students.create being called?");
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

// Read stduents
const retrieve = (req, res) => {
    console.log("is retrieve being called?");
    let query = "SELECT Students.student_id, Students.first_name, Students.last_name, Students.street, Students.city, Students.state, Students.zip, Students.phone_number, Students.dob, Degrees.degree_name, Scholarships.name, Degrees.degree_id, Scholarships.scholarship_id FROM Students INNER JOIN Degrees ON Students.degree_id = Degrees.degree_id LEFT JOIN Scholarships ON Students.scholarship_id = Scholarships.scholarship_id;";
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

// Search by first AND last name
const searchFirstAndLast = (req, res) => {
    console.log("is students.searchFirstAndLast being called?");
    if (req.params.first_name === '@@@') {
        req.params.first_name = '';
    }
    if (req.params.last_name === '@@@') {
        req.params.last_name = '';
    }
    let query = "SELECT Students.student_id, Students.first_name, Students.last_name, Students.street, Students.city, Students.state, Students.zip, Students.phone_number, Students.dob, Degrees.degree_name, Scholarships.name FROM Students INNER JOIN Degrees ON Students.degree_id = Degrees.degree_id LEFT JOIN Scholarships ON Students.scholarship_id = Scholarships.scholarship_id WHERE Students.first_name LIKE ? AND Students.last_name LIKE ?;";
    var inserts = [req.params.first_name + '%', req.params.last_name + '%'];
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

// Search by degree
const searchByDegree = (req, res) => {
    console.log("is students.searchByDegree being called?");
    console.log(req.params);
    let query = "SELECT Students.student_id, Students.first_name, Students.last_name, Students.street, Students.city, Students.state, Students.zip, Students.phone_number, Students.dob, Degrees.degree_name, Scholarships.name FROM Students INNER JOIN Degrees ON Students.degree_id = Degrees.degree_id LEFT JOIN Scholarships ON Students.scholarship_id = Scholarships.scholarship_id WHERE  Students.degree_id=?;";
    var inserts = [req.params.degree_id];
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

// Update student
const update = (req, res) => {
    console.log("is update being called?");
    console.log(req.body);
    console.log(req.params._id);
    let query = "UPDATE Students SET degree_id=?, scholarship_id=?, first_name=?, last_name=?, street=?, city=?, state=?, zip=?, phone_number=?, dob=? WHERE student_id=?;";
    var inserts = [req.body.degree_id, req.body.scholarship_id,  req.body.first_name,
                   req.body.last_name, req.body.street, req.body.city, req.body.state,
                   req.body.zip, req.body.phone_number, req.body.dob, req.params._id];
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

// Delete student
const remove = (req, res) => {
    console.log("is remove being called?");
    console.log(req.params._id);
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

export { create , retrieve, searchFirstAndLast, searchByDegree, remove, update };