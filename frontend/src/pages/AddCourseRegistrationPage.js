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
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/course-registrations">Course Registrations Page</Link></p>
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