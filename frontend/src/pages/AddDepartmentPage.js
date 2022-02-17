import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddDepartmentPage = () => {


    return (
        <div>
             <Helmet>
                <title>Add Department</title>
            </Helmet>
            <h1>Add Department</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Departments">Departments Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Department Name</th>
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

export default AddDepartmentPage;