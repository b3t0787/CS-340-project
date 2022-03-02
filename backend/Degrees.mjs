import * as mysql from './dbcon.mjs';

// Create new degree
const create = (req, res) => {
    console.log("is degrees.create being called?");
    let query = "INSERT INTO Degrees (dept_id, degree_name) VALUES (?, ?);";
    let inserts = [req.body.dept_id, req.body.degree_name];
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

// Read dgrees
const retrieve = (req, res) => {
    console.log("is departments.retrieve being called?");
    let query = "SELECT Degrees.degree_id, Degrees.degree_name, Departments.dept_name FROM Degrees INNER JOIN Departments ON Degrees.dept_id = Departments.dept_id;";
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

// Delete degree
const remove = (req, res) => {
    console.log("is remove being called?");
    console.log(req.params._id);
    let query = "DELETE FROM Degrees WHERE degree_id=?;";
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