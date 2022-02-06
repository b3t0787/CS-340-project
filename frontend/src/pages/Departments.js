import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Departments() {

    return (
        <>
        <h1>Departments</h1>
        <p>Return to <Link to="/">Home Page</Link></p>
        <Link to="/add-department">Add a Department</Link>
        <table id="departments">
            <thead>
                <tr>
                    <th>Department Name</th>
                    <th>Edit</th>
                    <th>Delete</th>

                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Scaring</td>
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>Doors</td>
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Departments;