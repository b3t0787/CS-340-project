import * as mysql from './dbcon.mjs';
import * as students from './Students.mjs';
import express from 'express';
const app = express();
app.use(express.json());

const PORT = 33430;

app.set('mysql', mysql);

app.post('/add-student', students.createStudent);
app.get('/Students', students.retrieve);
app.delete('/Students/:_id', students.remove);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
