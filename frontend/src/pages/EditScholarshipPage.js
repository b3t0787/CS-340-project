import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

const EditScholarshipPage = ({ scholarshipToEdit }) => {

    const [scholarship_name, editScholarshipName] = useState(scholarshipToEdit.name);
    const [scholarship_amount, editScholarshipAmount] = useState(scholarshipToEdit.amount);

    const nav = useNavigate();

    const EditScholarship = async () => {
        const response = await fetch(`${apiURL}/Scholarships/${scholarshipToEdit.scholarship_id}`, {
            method: "put",
            body: JSON.stringify({ name: scholarship_name, amount: scholarship_amount }),
            headers: { 'Content-type': 'application/json'}
        });
        if(response.status === 200) {
            alert("Successfully edited the scholarship!");
            nav("/Scholarships")
        } else {
            alert(`Failed to edit the scholarship, status code =${response.status}`);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Edit Scholarship</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Edit Scholarship</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Scholarships">Scholarships Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Scholarship Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                        type="text" 
                        size="35"
                        value={scholarship_name}
                        onChange={e => editScholarshipName(e.target.value)}/>
                    </td>
                    <td>
                         <input
                         type="text" 
                         value={scholarship_amount}
                         onChange={e => editScholarshipAmount(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={EditScholarship}>Edit</button>
        </div>
    );


};

export default EditScholarshipPage;