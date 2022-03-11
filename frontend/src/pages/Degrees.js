import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import ListDegrees from '../components/ListDegrees.js'
import topImage from '../logos/topImage.jpeg';


function Degrees({ setDegreeToEdit }) {

    const [dept_id, setDeptId] = useState();
    const [degrees, setDegrees] = useState([]);
    const [departments, setDepartments] = useState([]);

    const nav = useNavigate();

    const searchDepartment = async() => {
        const response = await fetch(`/Degrees/search-by-department/${dept_id}`);
        const data = await response.json();
        setDegrees(data);
    }

    const onEdit = async degreeToEdit => {
        setDegreeToEdit(degreeToEdit);
        nav("/edit-degree");

    };

    const deleteDegree = async _id => {
        const response = await fetch(`/Degrees/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setDegrees(degrees.filter(e => e.degree_id !== _id));
        } else {
            console.error(`Failed to delete course with _id = ${_id}`);
        }
    };

    const loadDegrees = async () => {
        const response = await fetch('/Degrees'); // calling rest API to obtain array of "degrees"
        const data = await response.json();
        setDegrees(data);
    }

    const loadDepartments = async () => {
        const response = await fetch('/Departments'); // calling rest API to obtain array of "departments"
        const data = await response.json();
        setDepartments(data);
    };

    useEffect( () => {
        loadDegrees();
        loadDepartments();
    }, []);

    return (
        <>
        <Helmet>
            <title>Degrees</title>
        </Helmet>
        <img src={topImage}></img>
        <h1>Degrees</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-degree">Add Degree</Link></li>
        </ul>
        <label>Search by Departments</label>
        <select onChange={e => setDeptId(e.target.value)}>
            <option></option>
            {departments.map((department) => <option value={department.dept_id}>{department.dept_name}</option>)}
            </select>
        <button onClick={searchDepartment}>Search</button>
        <br/>
        <button onClick={loadDegrees}>Reset</button>
        <ListDegrees degrees={degrees} deleteDegree={deleteDegree} onEdit={onEdit}/>
        </>
    );
}



export default Degrees;