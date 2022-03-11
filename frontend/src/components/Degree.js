import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Course({ degree, deleteDegree, onEdit }) {

    return (
        <tr>
            <td>{degree.degree_name}</td>
            <td>{degree.dept_name}</td>
            <td><MdEdit onClick={ () => onEdit(degree)}/></td>
            <td><MdDeleteForever onClick={ () => deleteDegree(degree.degree_id)}/></td>
        </tr>
    )
}

export default Course;
