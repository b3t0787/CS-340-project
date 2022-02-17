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
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/course-registrations">Course Registrations Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
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

export default RecordGradePage;