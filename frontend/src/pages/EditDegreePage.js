import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';

const EditDegreePage = ({ degreeToEdit }) => {

    const [degree_name, editDegreeName] = useState(degreeToEdit.degree_name);
    const [dept_id, editDeptId] = useState(degreeToEdit.dept_id);
    const [departments, setDepartments] = useState([]);

    const nav = useNavigate();

    const EditDegree = async () => {
        const response = await fetch(`/Degrees/${degreeToEdit.degree_id}`, {
            method: "put",
            body: JSON.stringify({ dept_id: dept_id, degree_name: degree_name }),
            headers: { 'Content-type': 'application/json'}
        });
        if(response.status === 200) {
            alert("Successfully edited the degree!");
            nav("/Degrees")
        } else {
            alert(`Failed to edit the degree, status code =${response.status}`);
        }
    };

    const handleDepartmentChange = (e) => {
        editDeptId(e.target.value)
    };

    const loadDepartments = async () => {
        const response = await fetch('/Departments'); // calling rest API to obtain array of "departments"
        const data = await response.json();
        setDepartments(data);
    };

    // queries to obtain Departments
    useEffect( () => {
        loadDepartments();
    }, []);

    return (
        <div>
             <Helmet>
                <title>Edit Degree</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Edit Degree</h1>
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
                        onChange={e => editDegreeName(e.target.value)}/>
                    </td>
                    <td>
                        <select onChange={handleDepartmentChange}>
                        <option>{degreeToEdit.dept_name}</option> 
                        {departments.map((department) => <option value={department.dept_id}>{department.dept_name}</option>)}
                        </select>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={EditDegree}>Edit</button>
        </div>
    );


};

export default EditDegreePage;