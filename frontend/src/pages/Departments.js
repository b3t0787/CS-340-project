import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';

function Departments() {

    const nav = useNavigate()

    return (
        <>
         <Helmet>
            <title>Departments</title>
        </Helmet>
        <h1>Departments</h1>
        <p>Return to <Link to="/">Home Page</Link></p>
        <p><Link to="/add-department">Add Department</Link></p>
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
                <td><MdEdit onClick={ () => nav("/edit-department")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>Doors</td>
                <td><MdEdit onClick={ () => nav("/edit-department")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Departments;