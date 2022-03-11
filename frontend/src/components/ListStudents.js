import React from 'react';
import Student from './Student.js';

function ListStudents( {students, deleteStudent, onEdit} ) {
    return (
        <table id="students">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
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
            onEdit={onEdit}
                key={i} />)}
        </tbody>
    </table>
    );
}

export default ListStudents;