import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListStudents from '../components/ListStudents.js';
import topImage from '../logos/topImage.jpeg';

function Students( { setStudentToEdit }) {
    const [students, setStudents] = useState([]);
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [degree_id, setDegreeId] = useState('');
    const [degrees, setDegrees] = useState([]);

    const nav = useNavigate();
   
    const searchName = async () => {
        if (first_name !== '' && last_name !== '') {
            const response = await fetch(`/Students/search-first-and-last/first_name/${first_name}/last_name/${last_name}`);
            const data = await response.json();
            setStudents(data);
        }
        // For some reason url wouldn't call rest API if first_name or last_name was emtpy, so if empty just assign '@@@'
        else if (first_name !== '' || last_name !== '') {
            let first = first_name
            let last = last_name;
            if (last === '') {
                last = '@@@'
            }
            if (first === '') {
                first = '@@@'
            }
            const response = await fetch(`/Students/search-first-or-last/first/${first}/last/${last}`);
            const data = await response.json();
            setStudents(data);
        }
    };

    const searchDegree = async () => {
        const response = await fetch(`/Students/search-by-degree/degree_id/${degree_id}`);
        const data = await response.json();
        setStudents(data);
    };

    const onEdit = async studentToEdit => {
        setStudentToEdit(studentToEdit);
        nav("/edit-student");

    };

    const deleteStudent = async _id => {
        const response = await fetch(`/Students/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setStudents(students.filter(e => e.student_id !== _id));
        } else {
            console.error(`Failed to delete student with _id = ${_id}`);
        }
    };

    const loadDegrees = async () => {
        const response = await fetch('/Degrees'); // calling rest API to obtain array of "degrees"
        const data = await response.json();
        setDegrees(data);
    };

    const loadStudents = async () => {
        const response = await fetch('/Students'); // calling rest API to obtain array of "students"
        const data = await response.json();
        setStudents(data);
    }

    const handleDegreeChange = (e) => {
        setDegreeId(e.target.value);
    };

    useEffect( () => {
        loadStudents();
        loadDegrees();
    }, []);

    return (
        <>
        <Helmet>
        <title>Students</title>
        </Helmet>
        <img src={topImage}></img>
        <h1>Students</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-student">Add Student</Link></li>
        </ul>
        <label>
            First Name:
                <input
                    type="text" 
                    value={first_name}
                    onChange={e => setFirst_name(e.target.value)}/>
        </label>
        <label>
            Last Name:
                <input
                    type="text" 
                    value={last_name}
                    onChange={e => setLast_name(e.target.value)}/>
        </label>
        <button onClick={searchName}>Search</button>
        <br/>
        <label>Search by Degree</label>
        <select onChange={handleDegreeChange}>
            <option></option>
           {degrees.map((degree) => <option value={degree.degree_id}>{degree.degree_name}</option>)}
        </select>
        <button onClick={searchDegree}>Search</button>
        <br/>
        <button onClick={loadStudents}>Reset</button>
        <ListStudents students={students} deleteStudent={deleteStudent} onEdit={onEdit}/>
        </>
    );
};



export default Students;