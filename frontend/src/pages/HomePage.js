import React from 'react';
import { Link } from 'react-router-dom';
import mu from '../logos/MU.png'
import topImage from '../logos/topImage.jpeg';
import { Helmet } from 'react-helmet';

function HomePage() {

    return (
        <>
        <Helmet>
            <title>MU</title>
        </Helmet>
        <img src={topImage}></img>
        <h1>Welcome to Monsters University</h1>
        <ul>
            <li><Link to="/Students">Students</Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><Link to="/Departments">Departments</Link></li>
            <li><Link to="/Degrees">Degrees</Link></li>
            <li><Link to="/Course-Registrations">Course Registrations</Link></li>
            <li><Link to="/Scholarships">Scholarships</Link></li>
        </ul>
        <img width="80" height="80" align="left" src={mu}></img>
        <p align="left">Welcome to Monsters University, one of the great institutions of learning in the world.</p>
        <p align="left">While we have built a campus known for its diversity, academic disciplines and excellence, <br/>
        MU is also an institution that lives by its intellectual curiosity, as we foster a willingness to <br/>
        challenge what is blindly accepted, and seek what is quantitatively true. We are a unique group <br/>
        of educators and students who, by the rigors of exhaustive focus and effort, demand more from ourselves. <br/>
        Because excellence is a word that is not awarded by inclusion into this fabled institution, it's a word that <br/>
        must be earned, protected, and treasured.</p>
        </>
    );
}


export default HomePage;