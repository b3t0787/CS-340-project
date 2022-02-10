import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RecordGradePage = () => {


    return (
        <div>
            <Helmet>
                <title>Record Grade</title>
            </Helmet>
            <h1>Record Grade</h1>
            <p>A grade can be added here once a student has completed a course</p>
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/course-registrations">Course Registrations Page</Link></p>
            <table>
                <thead>
                 <tr>
                    <th>Student</th>
                    <th>Course</th>
                    <th>Score</th>
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
                    </tr>
            </tbody>
            </table>
            <button >Add</button>
        </div>
    );
};

export default RecordGradePage;