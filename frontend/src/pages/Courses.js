import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import ListCourses from '../components/ListCourses.js'

function Courses() {

    const [courses, setCourses] = useState([]);

    const nav = useNavigate();

    const deleteCourse = async _id => {
        const response = await fetch(`/Courses/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setCourses(courses.filter(e => e.course_id !== _id));
        } else {
            console.error(`Failed to delete course with _id = ${_id}`);
        }
    };

    const loadCourses = async () => {
        const response = await fetch('/Courses'); // calling rest API to obtain array of "courses"
        const data = await response.json();
        setCourses(data);
    }

    useEffect( () => {
        loadCourses();
    }, []);

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
        <form>
            <label>
                Department Name:
                <input type="text" name="department-name" />
                <button>Search</button>
            </label>
        </form>
        <ListCourses courses={courses} deleteCourse={deleteCourse}/>
        </>
    );
}



export default Courses;