import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <>
        <h1>Welcome to Monsters University</h1>
        <p>More will be added</p> 
        <ul>
            <li><Link to="Students">Students</Link></li>
            <li><Link to="Courses">Courses</Link></li>
            <li><Link to="Departments">Departments</Link></li>
            <li><Link to="Degrees">Degrees</Link></li>
            <li><Link to="Course-Registrations">Course Registrations</Link></li>
        </ul>
        </>
    );
}


export default HomePage;