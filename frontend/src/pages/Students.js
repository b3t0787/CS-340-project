import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Students() {

    return (
        <>
        <h1>Students</h1>
        <p>Return to <Link to="/">Home Page</Link></p>
        <Link to="/add-student">Add a Student</Link>
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
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Mike</td>
                <td>Wazowski</td>
                <td>123 Stalk st</td>
                <td>Monstropolis</td>
                <td>Monstro</td>
                <td>59135</td>
                <td>(797)467-3457</td>
                <td>07/22/1909</td>
                <td>BS Scaring</td>
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>James</td>
                <td>Sullivan</td>
                <td>456 Stalk st</td>
                <td>Monstropolis</td>
                <td>Monstro</td>
                <td>59136</td>
                <td>(797)473-3847</td>
                <td>05/13/1955</td>
                <td>BS Scaring</td>
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Students;