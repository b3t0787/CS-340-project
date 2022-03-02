import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function Course({ degree, deleteDegree }) {

    const nav = useNavigate();

    return (
        <tr>
            <td>{degree.degree_name}</td>
            <td>{degree.dept_name}</td>
            <td><MdEdit onClick={ () => nav("/edit-degree")}/></td>
            <td><MdDeleteForever onClick={ () => deleteDegree(degree.degree_id)}/></td>
        </tr>
    )
}

export default Course;
