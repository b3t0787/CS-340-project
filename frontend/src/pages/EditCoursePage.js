import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EditCoursePage = () => {

    return (
        <div>
            <Helmet>
                <title>Edit Course</title>
            </Helmet>
            <h1>Edit Course</h1>
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/Courses">Courses Page</Link></p>
            <table>
                <thead>
                 <tr>
                    <th>Title</th>
                    <th>Department id</th>
                    <th>Unit Hours</th>

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
                        type="number"/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button >Edit</button>
        </div>
    );


};

export default EditCoursePage;