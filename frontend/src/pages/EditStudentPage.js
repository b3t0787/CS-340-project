import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

const EditStudentPage = ({ studentToEdit }) => {

    const [first_name, editFirstName] = useState(studentToEdit.first_name);
    const [last_name, editLastName] = useState(studentToEdit.last_name);
    const [street, editStreet] = useState(studentToEdit.street);
    const [city, editCity] = useState(studentToEdit.city);
    const [state, editState] = useState(studentToEdit.state);
    const [zip, editZip] = useState(studentToEdit.zip);
    const [phone_number, editPN] = useState(studentToEdit.phone_number);
    const [dob, editDOB] = useState(moment.utc(studentToEdit.dob).format('YYYY-MM-DD'));
    const [degree_id, editDegreeId] = useState(studentToEdit.degree_id);
    const [scholarship_id, editScholarshipId] = useState(studentToEdit.scholarship_id);
    const [degrees, setDegrees] = useState([]);
    const [scholarships, setScholarships] = useState([]);

    const nav = useNavigate();

    const EditStudent = async () => {
        const response = await fetch(`${apiURL}/Students/${studentToEdit.student_id}`, {
            method: "put",
            body: JSON.stringify({ first_name: first_name, last_name: last_name, street: street,
            city: city, state: state, zip: zip, phone_number: phone_number, dob: moment.utc(dob).format('YYYY/MM/DD'), 
            degree_id: degree_id, scholarship_id: scholarship_id }),
            headers: { 'Content-type': 'application/json'}
        });
        if(response.status === 200) {
            alert("Successfully edited the student!");
            nav("/Students");
        } else {
            alert(`Failed to edit the student, status code =${response.status}`);
        }
    };

    const loadScholarships = async () => {
        const response = await fetch(`${apiURL}/Scholarships`); // calling rest API to obtain array of "scholarships"
        const data = await response.json();
        setScholarships(data);
    };

    const loadDegrees = async () => {
        const response = await fetch(`${apiURL}/Degrees`); // calling rest API to obtain array of "degrees"
        const data = await response.json();
        setDegrees(data);
    };

    const handleDegreeChange = (e) => {
        editDegreeId(e.target.value)
    };

    const handleScholarshipChange = (e) => {
        editScholarshipId(e.target.value)
    };
    
    // queries to obtain Scholarships and Degrees
    useEffect( () => {
        loadScholarships();
        loadDegrees();
    }, []);

    
    return (
        <div>
            <Helmet>
                <title>Edit Student</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Edit Student</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Students">Students Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>First Name</th>
                    <th>Last name</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                        type="text" 
                        value={first_name}
                        onChange={e => editFirstName(e.target.value)}/>
                    </td>
                    <td>
                         <input
                         type="text" 
                         value={last_name}
                         onChange={e => editLastName(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="text"
                        value={street}
                        onChange={e => editStreet(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="text"
                        value={city}
                        onChange={e => editCity(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="text"
                        value={state}
                        onChange={e => editState(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            < table>
                <thead> 
                    <tr>
                    <th>Zip</th>
                    <th>Phone Number</th>
                    <th>Date of Birth</th>
                    <th>Degree</th>
                    <th>Scholarship</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                        type="number" 
                        value={zip}
                        onChange={e => editZip(e.target.value)}/>
                    </td>
                    <td>
                         <input
                         type="tel" 
                         value={phone_number}
                         onChange={e => editPN(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="date"
                        value={dob}
                        onChange={e => editDOB(e.target.value)}/>
                    </td>
                    <td>
                        <select onChange={handleDegreeChange}>
                        <option>{studentToEdit.degree_name}</option> 
                        {degrees.map((degree) => <option value={degree.degree_id}>{degree.degree_name}</option>)}
                        </select>
                    </td>
                    <td>
                        <select onChange={handleScholarshipChange}> 
                        <option>{studentToEdit.name}</option>
                        {scholarships.map((scholarship) => <option value={scholarship.scholarship_id}>{scholarship.name}</option>)}
                        </select>
                    </td>
                    </tr>
            </tbody>
            </ table>
            <button onClick={EditStudent}>Edit</button>
        </div>
    );


};

export default EditStudentPage;