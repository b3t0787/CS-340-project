import * as mysql from './dbcon.mjs';

// Create new scholarship
const create = (req, res) => {
    console.log("is scholarships.create being called?");
    let query = "INSERT INTO Scholarships (name, amount) VALUES (?, ?);";
    let inserts = [req.body.name, req.body.amount];
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

// Read scholarships 
const retrieve = (req, res) => {
    console.log("is scholarships.retrieve being called?");
    let query = "SELECT * from Scholarships;";
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

// Search by score
const searchByScore = (req, res) => {
    console.log("is scholarships.searchByScore being called?");
    console.log(req.params);
    if (req.params.min === '@@@') {
        req.params.min = 0;
    }
    if (req.params.max === '@@@') {
        req.params.max = 999999.99;
    }
    console.log(req.params);
    let query = "SELECT * FROM Scholarships WHERE Scholarships.amount BETWEEN ? AND ?;";
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

// Update scholarship
const update = (req, res) => {
    console.log("is update being called?");
    console.log(req.body);
    console.log(req.params._id);
    let query = "UPDATE Scholarships SET name=?, amount=? WHERE scholarship_id=?;";
    var inserts = [req.body.name, req.body.amount, req.params._id];
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

// Delete scholarship
const remove = (req, res) => {
    console.log("is scholarships.remove being called?");
    console.log(req.params._id);
    let query = "DELETE FROM Scholarships WHERE scholarship_id=?;";
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

export { create , retrieve, searchByScore, remove, update};