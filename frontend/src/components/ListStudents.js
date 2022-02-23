import React from 'react';
import Student from './Student.js';



function ListStudents( {students, deleteStudent} ) {
    return (
        <table id="students">
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone number</th>
                <th>Date of Birth</th>
                <th>Degree</th>
                <th>Scholarship</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student, i) => <Student student={student}
            deleteStudent={deleteStudent}
                key={i} />)}
        </tbody>
    </table>
    );
}

export default ListStudents;