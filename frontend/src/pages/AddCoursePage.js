import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCoursePage = () => {


    return (
        <div>
            <h1>Add Course</h1>
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/Courses">Courses Page</Link></p>
            <table>
                <thead>
                 <tr>
                    <th>Title</th>
                    <th>Department</th>
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
            <button >Add</button>
        </div>
    );


};

export default AddCoursePage;