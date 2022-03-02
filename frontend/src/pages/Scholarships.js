import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListScholarships from '../components/ListScholarships.js'


function Scholarships() {

    const [scholarships, setScholarships] = useState([]);

    const nav = useNavigate();

    const deleteScholarship = async _id => {
        const response = await fetch(`/Scholarships/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setScholarships(scholarships.filter(e => e.scholarship_id !== _id));
        } else {
            console.error(`Failed to delete course with _id = ${_id}`);
        }
    };

    const loadScholarships = async () => {
        const response = await fetch('/Scholarships'); // calling rest API to obtain array of "scholarships"
        const data = await response.json();
        setScholarships(data);
    }

    useEffect( () => {
        loadScholarships();
    }, []);

    return (
        <>
        <Helmet>
        <title>Scholarships</title>
        </Helmet>
        <h1>Scholarships</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-scholarship">Add Scholarship</Link></li>
        </ul>
        <form>
            <label>
                Min Amount:
                <input type="text" name="min-amount"/>
            </label>
            <label>
                Max Amount:
                <input type="text" name="max-amount" />
                <button>Search</button>
            </label>
        </form>
        <ListScholarships scholarships={scholarships} deleteScholarship={deleteScholarship}/>
        </>
    );
}



export default Scholarships;