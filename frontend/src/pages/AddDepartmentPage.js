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
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/Departments">Departments Page</Link></p>
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