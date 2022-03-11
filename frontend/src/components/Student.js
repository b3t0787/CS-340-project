import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import moment from 'moment';

function Student({ student, deleteStudent, onEdit}) {

    return (
        <tr>
            <td>{student.first_name} <br/>{student.last_name} </td>
            <td>{student.street}<br/>{student.city}&nbsp;{student.state}&nbsp;{student.zip}</td>
            <td>{student.phone_number}</td>
            <td>{moment.utc(student.dob).format('MM/DD/YYYY')}</td>
            <td>{student.degree_name}</td>
            <td>{student.name}</td>
            <td><MdEdit onClick={ () => onEdit(student)}/></td>
            <td><MdDeleteForever onClick={ () => deleteStudent(student.student_id)}/></td>
    </tr>
    )
}

export default Student;