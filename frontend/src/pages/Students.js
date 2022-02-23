import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListStudents from '../components/ListStudents.js';

function Students() {
    const [students, setStudents] = useState([]);

    const nav = useNavigate();

    const deleteStudent = async _id => {
        const response = await fetch(`/Students/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setStudents(students.filter(e => e.student_id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}`);
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
        <form>
            <label>
                First Name:
                <input type="text" name="first-name" />
            </label>
            <label>
                Last Name:
                <input type="text" name="last-name" />
                <button>Search</button>
            </label>
        </form>
        <form>
            <label>
                Scholarship:
                <input type="text" name="scholarship" />
                <button>Search</button>
            </label>
        </form>
        <ListStudents students={students} deleteStudent={deleteStudent}/>
        </>
    );
}



export default Students;