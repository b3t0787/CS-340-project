import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { SiAddthis } from 'react-icons/si';
import { Helmet } from 'react-helmet';

function CourseRegistrations() {

    const nav = useNavigate();

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
        <form>
            <label>
                Student id:
                <input type="text" name="student-id" />
            </label>
            <label>
                Cousre id:
                <input type="text" name="course-id" />
                <button>Search</button>
            </label>
        </form>
        <form>
            <label>
                Min Score:
                <input type="text" name="min-score"/>
            </label>
            <label>
                Max Score:
                <input type="text" name="max-score" />
                <button>Search</button>
            </label>
        </form>
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
                <td><SiAddthis onClick={ () => nav("/record-grade")} /></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
                <td>77</td>
                <td>C</td>
                <td><SiAddthis onClick={ () => nav("/record-grade")} /></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default CourseRegistrations;