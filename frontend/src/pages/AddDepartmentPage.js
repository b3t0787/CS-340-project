import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

const AddDepartmentPage = () => {

    const [dept_name, setDept_name] = useState('');

    const nav = useNavigate();
 

    const AddDepartment = async () => {

        const newDepartment = { dept_name: dept_name };
        const response = await fetch(`${apiURL}/add-department`, {
            method: 'POST',
            body: JSON.stringify(newDepartment),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the department");
            nav("/Departments");
        } else {
            alert(`Failed to add course, satus code = ${response.status}`);
        }
    };

    return (
        <div>
             <Helmet>
                <title>Add Department</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Add Department</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Departments">Departments Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Department Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <input
                        type="text" 
                        value={dept_name}
                        onChange={e => setDept_name(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddDepartment}>Add</button>
        </div>
    );


};

export default AddDepartmentPage;