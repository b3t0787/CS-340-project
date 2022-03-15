import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

const AddDegreePage = () => {

    const [dept_id, setDeptId] = useState('');
    const [degree_name, setDegree_name] = useState('');
    const [departments, setDepartments] = useState([]);

    const nav = useNavigate();

    const AddDegree = async () => {

        const newDegree = { dept_id: dept_id,  degree_name: degree_name };
        const response = await fetch(`${apiURL}/add-degree`, {
            method: 'POST',
            body: JSON.stringify(newDegree),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the course");
            nav("/Degrees")
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
                <title>Add Degree</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Add Degree</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Degrees">Degrees Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Degree Name</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                        type="text" 
                        value={degree_name}
                        onChange={e => setDegree_name(e.target.value)}/>
                    </td>
                    <td>
                    <select onChange={e => setDeptId(e.target.value)}>
                        <option></option>
                        {departments.map((department) => <option value={department.dept_id}>{department.dept_name}</option>)}
            </select>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddDegree}>Add</button>
        </div>
    );


};

export default AddDegreePage;