import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Scholarship({ scholarship, deleteScholarship, onEdit }) {

    return (
        <tr>
            <td>{scholarship.name}</td>
            <td>{scholarship.amount}</td>
            <td><MdEdit onClick={ () => onEdit(scholarship)}/></td>
            <td><MdDeleteForever onClick={ () => deleteScholarship(scholarship.scholarship_id)}/></td>
        </tr>

    )
}

export default Scholarship;