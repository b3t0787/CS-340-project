import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddStudentPage = () => {

    const [degree_id, setDegree_id] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [dob, setDob] = useState('');

    const AddStudent = async () => {

        const newStudent = { degree_id: degree_id, first_name: first_name, last_name: last_name, 
            street: street, city: city, state: state, zip: zip, phone_number: phone_number, dob: dob };
        const response = await fetch('/add-student', {
            method: 'POST',
            body: JSON.stringify(newStudent),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the student");
        } else {
            alert(`Failed to add student, satus code = ${response.status}`);
        }
    };

    return (
        <div>
             <Helmet>
                <title>Add Student</title>
            </Helmet>
            <h1>Add Student</h1>
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
                        onChange={e => setFirst_name(e.target.value)}/>
                    </td>
                    <td>
                         <input
                         type="text" 
                         value={last_name}
                         onChange={e => setLast_name(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="text"
                        value={street}
                        onChange={e => setStreet(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="text"
                        value={state}
                        onChange={e => setState(e.target.value)}/>
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
                    <th>Degree id</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                        type="number" 
                        value={zip}
                        onChange={e => setZip(e.target.value)}/>
                    </td>
                    <td>
                         <input
                         type="tel" 
                         value={phone_number}
                         onChange={e => setPhone_number(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="date"
                        value={dob}
                        onChange={e => setDob(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="number"
                        value={degree_id}
                        onChange={e => setDegree_id(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </ table>
            <button onClick={AddStudent}>Add</button>
        </div>
    );


};

export default AddStudentPage;