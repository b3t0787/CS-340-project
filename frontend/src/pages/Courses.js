import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';

function Courses() {

    const nav = useNavigate()

    return (
        <>
        <Helmet>
            <title>Courses</title>
        </Helmet>
        <h1>Courses</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-course">Add Course</Link></li>
        </ul>
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
                <td><MdEdit onClick={ () => nav("/edit-course")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>SCAR 145: Avoiding Lights</td>
                <td>Scaring</td>
                <td>4</td>
                <td><MdEdit onClick={ () => nav("/edit-course")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Courses;