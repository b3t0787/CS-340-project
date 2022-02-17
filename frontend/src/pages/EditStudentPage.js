import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EditStudentPage = () => {


    return (
        <div>
            <Helmet>
                <title>Edit Student</title>
            </Helmet>
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
                        type="text" />
                    </td>
                    <td>
                         <input
                         type="text" />
                    </td>
                    <td>
                        <input
                        type="text"/>
                    </td>
                    <td>
                        <input
                        type="text"/>
                    </td>
                    <td>
                        <input
                        type="text"/>
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
                    <th>Scholarship id</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                        type="number" />
                    </td>
                    <td>
                         <input
                         type="tel" />
                    </td>
                    <td>
                        <input
                        type="text"/>
                    </td>
                    <td>
                        <input
                        type="text"/>
                    </td>
                    <td>
                        <input
                        type="number" />
                    </td>
                    </tr>
            </tbody>
            </ table>
            <button >Edit</button>
        </div>
    );


};

export default EditStudentPage;