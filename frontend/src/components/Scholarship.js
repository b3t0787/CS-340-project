import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function Scholarship({ scholarship, deleteScholarship }) {

    const nav = useNavigate();

    return (
        <tr>
            <td>{scholarship.name}</td>
            <td>{scholarship.amount}</td>
            <td><MdEdit onClick={ () => nav("/edit-scholarship")}/></td>
            <td><MdDeleteForever onClick={ () => deleteScholarship(scholarship.scholarship_id)}/></td>
        </tr>

    )
}

export default Scholarship;