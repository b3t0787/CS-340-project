import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';

function CourseRegistrations() {

    return (
        <>
        <Helmet>
            <title>Course Registrations</title>
        </Helmet>
        <h1>Course Registrations</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-course-registration">Add Course Registration</Link></li>
        </ul>
        <button>Filter Table</button>
        <table id="course registrations">
            <thead>
                <tr>
                    <th>Student id</th>
                    <th>Course id</th>
                    <th>Score</th>
                    <th>Grade</th>
                    <th>Record Grade</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>5</td>
                <td>98</td>
                <td>A</td>
                <td><MdEdit onClick={ () => <input type="text"/>}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
                <td>77</td>
                <td>C</td>
                <td><MdEdit/></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default CourseRegistrations;