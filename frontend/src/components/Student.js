import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Students from '../pages/Students';

function Student({ student, deleteStudent }) {

    const nav = useNavigate();

    return (
        <tr>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.street}</td>
            <td>{student.city}</td>
            <td>{student.state}</td>
            <td>{student.zip}</td>
            <td>{student.phone_number}</td>
            <td>{student.dob}</td>
            <td>{student.degree_id}</td>
            <td>{student.scholarship_id}</td>
            <td><MdEdit onClick={ () => nav("/edit-student")}/></td>
            <td><MdDeleteForever onClick={ () => deleteStudent(student.student_id)}/></td>
    </tr>
    )
}

export default Student;