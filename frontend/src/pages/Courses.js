import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import ListCourses from '../components/ListCourses.js'
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

function Courses({ setCourseToEdit}) {

    const [courses, setCourses] = useState([]);
    const [dept_id, setDeptId] = useState();
    const [departments, setDepartments] = useState([]);

    const nav = useNavigate();

    const searchDepartment = async() => {
        const response = await fetch(`${apiURL}/Courses/search-by-department/${dept_id}`);
        const data = await response.json();
        setCourses(data);
    }

    const onEdit = async courseToEdit => {
        setCourseToEdit(courseToEdit);
        nav("/edit-course");
    };

    const deleteCourse = async _id => {
        const response = await fetch(`${apiURL}/Courses/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setCourses(courses.filter(e => e.course_id !== _id));
        } else {
            console.error(`Failed to delete course with _id = ${_id}`);
        }
    };

    const loadCourses = async () => {
        const response = await fetch(`${apiURL}/Courses`); // calling rest API to obtain array of "courses"
        const data = await response.json();
        setCourses(data);
    }

    const loadDepartments = async () => {
        const response = await fetch(`${apiURL}/Departments`); // calling rest API to obtain array of "departments"
        const data = await response.json();
        setDepartments(data);
    };

    useEffect( () => {
        loadCourses();
        loadDepartments();
    }, []);

    return (
        <>
        <Helmet>
            <title>Courses</title>
        </Helmet>
        <img src={topImage}></img>
        <h1>Courses</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-course">Add Course</Link></li>
        </ul>
        <label>Search by Departments</label>
        <select onChange={e => setDeptId(e.target.value)}>
            <option></option>
            {departments.map((department) => <option value={department.dept_id}>{department.dept_name}</option>)}
            </select>
        <button onClick={searchDepartment}>Search</button>
        <br/>
        <button onClick={loadCourses}>Reset</button>
        <ListCourses courses={courses} deleteCourse={deleteCourse} onEdit={onEdit}/>
        </>
    );
}



export default Courses;