import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Degrees() {

    const nav = useNavigate()

    return (
        <>
        <h1>Degrees</h1>
        <p>Return to <Link to="/">Home Page</Link></p>
        <p><Link to="/add-degree">Add Degree</Link></p>
        <table id="degrees">
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>BS Scream</td>
                <td>Scream</td>
                <td><MdEdit onClick={ () => nav("/edit-degree")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>BS Scaring</td>
                <td>Scaring</td>
                <td><MdEdit onClick={ () => nav("/edit-degree")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Degrees;