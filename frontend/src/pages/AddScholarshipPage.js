import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddScholarshipPage = () => {

    return (
        <div>
             <Helmet>
                <title>Add Scholarship</title>
            </Helmet>
            <h1>Add Scholarship</h1>
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/Scholarships">Scholarship Page</Link></p>
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
            <button >Add</button>
        </div>
    );


};

export default AddScholarshipPage;