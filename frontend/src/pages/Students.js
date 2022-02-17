import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';

function Students() {

    const nav = useNavigate();

    return (
        <>
        <Helmet>
        <title>Students</title>
        </Helmet>
        <h1>Students</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-student">Add Student</Link></li>
        </ul>
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
                    <th>Scholarship</th>
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
                <td>None</td>
                <td><MdEdit onClick={ () => nav("/edit-student")}/></td>
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
                <td>Coca-Cola Monsters Scholarship</td>
                <td><MdEdit onClick={ () => nav("/edit-student")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Students;