import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EditScholarshipPage = () => {


    return (
        <div>
            <Helmet>
                <title>Edit Scholarship</title>
            </Helmet>
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
                        type="text" />
                    </td>
                    <td>
                         <input
                         type="text" />
                    </td>
                    </tr>
            </tbody>
            </table>
            <button >Edit</button>
        </div>
    );


};

export default EditScholarshipPage;