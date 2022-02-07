import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCourseRegistrationPage = () => {


    return (
        <div>
            <h1>Couse Registration</h1>
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/course-registrations">Course Registrations Page</Link></p>
            <table>
                <thead>
                 <tr>
                    <th>Student</th>
                    <th>Course</th>
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