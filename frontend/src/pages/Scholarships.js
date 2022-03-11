import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListScholarships from '../components/ListScholarships.js'
import topImage from '../logos/topImage.jpeg';


function Scholarships({ setScholarshipToEdit }) {

    const [scholarships, setScholarships] = useState([]);
    const [minScore, setMinScore] = useState('');
    const [maxScore, setMaxScore] = useState('');

    const nav = useNavigate();

    const onEdit = async scholarshipToEdit => {
        setScholarshipToEdit(scholarshipToEdit);
        nav("/edit-scholarship");
    };

    // Search by Score
    const searchScore = async() => {
        let min = minScore;
        let max = maxScore;
        if (min === '') {
            min = '@@@'
        }
        if (max === '') {
            max = '@@@'
        }
        const response = await fetch(`/Scholarships/search-by-score/min/${min}/max/${max}`);
        const data = await response.json();
        setScholarships(data);
    }

    const deleteScholarship = async _id => {
        const response = await fetch(`/Scholarships/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setScholarships(scholarships.filter(e => e.scholarship_id !== _id));
        } else {
            console.error(`Failed to delete scholarship with _id = ${_id}`);
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
        <img src={topImage}></img>
        <h1>Scholarships</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-scholarship">Add Scholarship</Link></li>
        </ul>
        <label>
            Min Score:
            <input type="number"
                value={minScore}
                onChange={e => setMinScore(e.target.value)}/>
        </label>
        <label>
            Max Score:
            <input type="number" 
                value={maxScore}
                onChange={e => setMaxScore(e.target.value)}/>
                <button onClick={searchScore}>Search</button>
        </label>
        <br/>
        <button onClick={loadScholarships}>Reset</button>
        <ListScholarships scholarships={scholarships} deleteScholarship={deleteScholarship}
        onEdit={onEdit}/>
        </>
    );
}



export default Scholarships;