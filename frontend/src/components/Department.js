import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Department({ department, deleteDepartment, onEdit }) {

    return (

        <tr>
            <td>{department.dept_name}</td>
            <td><MdEdit onClick={ () => onEdit(department)}/></td>
            <td><MdDeleteForever onClick={ () => deleteDepartment(department.dept_id)}/></td>
        </tr>
    )
}

export default Department;