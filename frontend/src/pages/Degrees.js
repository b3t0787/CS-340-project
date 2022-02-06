import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Degrees() {

    return (
        <>
        <h1>Degrees</h1>
        <p>Return to <Link to="/">Home Page</Link></p>
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
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>BS Scaring</td>
                <td>Scaring</td>
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Degrees;