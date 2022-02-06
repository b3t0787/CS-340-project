import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Courses() {

    return (
        <>
        <h1>Courses</h1>
        <p>Return to <Link to="/">Home Page</Link></p>
        <Link to="/add-course">Add a Course</Link>
        <table id="courses">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Department</th>
                    <th>Unit hours</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>SCAR 110: Vocal Study</td>
                <td>Scaring</td>
                <td>2</td>
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>SCAR 145: Avoiding Lights</td>
                <td>Scaring</td>
                <td>4</td>
                <td><MdEdit /></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Courses;