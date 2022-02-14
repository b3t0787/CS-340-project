import React from 'react';
import { Link } from 'react-router-dom';
import mu from '../logos/MU.png'
import { Helmet } from 'react-helmet';

function HomePage() {

    return (
        <>
        <Helmet>
            <title>MU</title>
        </Helmet>
        <h1>Welcome to Monsters University</h1>
        <ul>
            <li><Link to="/Students">Students</Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><Link to="/Departments">Departments</Link></li>
            <li><Link to="/Degrees">Degrees</Link></li>
            <li><Link to="/Course-Registrations">Course Registrations</Link></li>
            <li><Link to="/Scholarships">Scholarships</Link></li>
        </ul>
        <img src={mu}></img>
        </>
    );
}


export default HomePage;