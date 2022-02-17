import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddCourseRegistrationPage = () => {


    return (
        <div>
            <Helmet>
                <title>Add Course Registration</title>
            </Helmet>
            <h1>Course Registration</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/course-registrations">Course Registrations Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Student id</th>
                    <th>Course id</th>
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

export default AddCourseRegistrationPage;