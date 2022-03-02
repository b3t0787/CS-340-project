import * as mysql from './dbcon.mjs';

// Create new department
const create = (req, res) => {
    console.log("is departments.create being called?");
    let query = "INSERT INTO Departments (dept_name) VALUES (?);";
    let inserts = [req.body.dept_name];
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

// Read department
const retrieve = (req, res) => {
    console.log("is departments.retrieve being called?");
    let query = "SELECT * FROM Departments;";
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

// Delete department
const remove = (req, res) => {
    console.log("is remove being called?");
    console.log(req.params._id);
    let query = "DELETE FROM Departments WHERE dept_id=?;";
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