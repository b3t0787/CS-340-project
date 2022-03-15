import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListDepartments from '../components/ListDepartments';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

function Departments({ setDepartmentToEdit}) {

    const [departments, setDepartments] = useState([]);

    const nav = useNavigate();

    const onEdit = async departmentToEdit => {
        setDepartmentToEdit(departmentToEdit);
        nav("/edit-department");
    };

    const deleteDepartment = async _id => {
        const response = await fetch(`${apiURL}/Departments/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setDepartments(departments.filter(e => e.dept_id !== _id));
        } else {
            console.error(`Failed to delete student with _id = ${_id}`);
        }
    };

    const loadDepartments = async () => {
        const response = await fetch(`${apiURL}/Departments`); // calling rest API to obtain array of "departments"
        const data = await response.json();
        setDepartments(data);
    }

    useEffect( () => {
        loadDepartments();
    }, []);

    return (
        <>
         <Helmet>
            <title>Departments</title>
        </Helmet>
        <img src={topImage}></img>
        <h1>Departments</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-department">Add Department</Link></li>
        </ul>
        <ListDepartments departments={departments} deleteDepartment={deleteDepartment} onEdit={onEdit}/>
        </>
    );
}



export default Departments;