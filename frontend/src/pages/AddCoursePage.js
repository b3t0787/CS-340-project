import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

const AddCoursePage = () => {

    const [dept_id, setDeptId] = useState('');
    const [title, setTitle] = useState('');
    const [unit_hours, setUnit_hours] = useState('');
    const [departments, setDepartments] = useState([]);

    const nav = useNavigate();

    const AddCourse = async () => {

        const newCourse = { dept_id: dept_id,  title: title, unit_hours: unit_hours };
        const response = await fetch(`${apiURL}/add-course`, {
            method: 'POST',
            body: JSON.stringify(newCourse),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the course");
            nav("/Courses")
        } else {
            alert(`Failed to add course, satus code = ${response.status}`);
        }

    };

    const loadDepartments = async () => {
        const response = await fetch(`${apiURL}/Departments`); // calling rest API to obtain array of "departments"
        const data = await response.json();
        setDepartments(data);
    };

    useEffect( () => {
        loadDepartments();
    }, []);

    return (
        <div>
        <Helmet>
            <title>Add Course</title>
        </Helmet>
        <img src={topImage}></img>
            <h1>Add Course</h1>
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
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
                    </td>
                    <td>
                    <select onChange={e => setDeptId(e.target.value)}>
                        <option></option>
                        {departments.map((department) => <option value={department.dept_id}>{department.dept_name}</option>)}
                    </select>
                    </td>
                    <td>
                    <input
                        type="number" 
                        value={unit_hours}
                        onChange={e => setUnit_hours(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddCourse}>Add</button>
        </div>
    );


};

export default AddCoursePage;