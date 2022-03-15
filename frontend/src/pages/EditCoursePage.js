import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

const EditCoursePage = ({ courseToEdit }) => {

    const [course_title, editCourseTitle] = useState(courseToEdit.title);
    const [dept_id, editDeptId] = useState(courseToEdit.dept_id);
    const [unit_hours, editUnitHours] = useState(courseToEdit.unit_hours);
    const [departments, setDepartments] = useState([]);

    const nav = useNavigate();

    const EditCourse = async () => {
        const response = await fetch(`${apiURL}/Courses/${courseToEdit.course_id}`, {
            method: "put",
            body: JSON.stringify({ title: course_title, dept_id: dept_id, unit_hours: unit_hours }),
            headers: { 'Content-type': 'application/json'}
        });
        if(response.status === 200) {
            alert("Successfully edited the course!");
            nav("/Courses")
        } else {
            alert(`Failed to edit the course, status code =${response.status}`);
        }
    };

    const loadDepartments = async () => {
        const response = await fetch(`${apiURL}/Departments`); // calling rest API to obtain array of "Departments"
        const data = await response.json();
        setDepartments(data);
    };

    const handleDepartmentChange = (e) => {
        editDeptId(e.target.value)
    };

    // queries to obtain Departments
     useEffect( () => {
        loadDepartments();
    }, []);


    return (
        <div>
            <Helmet>
                <title>Edit Course</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Edit Course</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Courses">Courses Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Title</th>
                    <th>Department</th>
                    <th>Unit Hours</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                        type="text" 
                        value={course_title}
                        onChange={e => editCourseTitle(e.target.value)}/>
                    </td>
                    <td>
                    <select onChange={handleDepartmentChange}>
                    <option>{courseToEdit.dept_name}</option> 
                        {departments.map((department) => <option value={department.dept_id}>{department.dept_name}</option>)}
                        </select>
                    </td>
                    <td>
                        <input
                        type="number"
                        value={unit_hours}
                        onChange={e => editUnitHours(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={EditCourse}>Edit</button>
        </div>
    );


};

export default EditCoursePage;