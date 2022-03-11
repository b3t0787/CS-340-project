import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';

const AddScholarshipPage = () => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const nav = useNavigate();

    const AddScholarship = async () => {

        const newScholarship = { name: name, amount: amount };
        const response = await fetch('/add-scholarship', {
            method: 'POST',
            body: JSON.stringify(newScholarship),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the scholarship");
            nav("/Scholarships")
        } else {
            alert(`Failed to add scholarship, satus code = ${response.status}`);
        }
    };
    return (
        <div>
             <Helmet>
                <title>Add Scholarship</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Add Scholarship</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Scholarships">Scholarship Page</Link></li>
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
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    </td>
                    <td>
                    <input
                        type="number" 
                        value={amount}
                        onChange={e => setAmount(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddScholarship}>Add</button>
        </div>
    );


};

export default AddScholarshipPage;