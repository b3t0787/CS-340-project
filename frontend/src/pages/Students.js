import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListStudents from '../components/ListStudents.js';

function Students() {
    const [students, setStudents] = useState([]);
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [scholarship, setScholarship] = useState('');

    const nav = useNavigate();
   
    const searchName = async () => {
        if (first_name !== '' && last_name !== '') {
            const response = await fetch(`/search-first-and-last/first_name/${first_name}/last_name/${last_name}`);
            const data = await response.json();
            setStudents(data);
        }
        // For some reason url wouldn't call rest API if last_name was emtpy, so if empty just assign 'empty'
        else if (first_name !== '' || last_name !== '') {
            let last = last_name;
            if (last_name === '') {
                last = 'empty'
            }
            const response = await fetch(`/search-first-or-last/first_name/${first_name}/last/${last}`);
            const data = await response.json();
            setStudents(data);
        }
    };

    const deleteStudent = async _id => {
        const response = await fetch(`/Students/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setStudents(students.filter(e => e.student_id !== _id));
        } else {
            console.error(`Failed to delete student with _id = ${_id}`);
        }
    };

    const loadStudents = async () => {
        const response = await fetch('/Students'); // calling rest API to obtain array of "students"
        const data = await response.json();
        setStudents(data);
    }

    useEffect( () => {
        loadStudents();
    }, []);

    return (
        <>
        <Helmet>
        <title>Students</title>
        </Helmet>
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
        <label>
            <br />
                Scholarship: yes
                <input
                type="radio"
                value="true"
                name="scholarship"
                onChange={e => setScholarship("true")} />
                no
                <input
                type="radio"
                value="false"
                name="scholarship"
                checked="true"
                onChange={e => setScholarship("false")} />
        </label>

        <ListStudents students={students} deleteStudent={deleteStudent}/>
        </>
    );
}



export default Students;