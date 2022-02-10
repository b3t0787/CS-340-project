import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddStudentPage = () => {


    return (
        <div>
             <Helmet>
                <title>Add Student</title>
            </Helmet>
            <h1>Add Student</h1>
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/Students">Students Page</Link></p>
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
                    <th>Degree</th>
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
                    </tr>
            </tbody>
            </ table>
            <button >Add</button>
        </div>
    );


};

export default AddStudentPage;