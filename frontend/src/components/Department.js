import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function Department({ department, deleteDepartment }) {

    const nav = useNavigate();

    return (

        <tr>
            <td>{department.dept_name}</td>
            <td><MdEdit onClick={ () => nav("/edit-department")}/></td>
            <td><MdDeleteForever onClick={ () => deleteDepartment(department.dept_id)}/></td>
        </tr>
    )
}

export default Department;