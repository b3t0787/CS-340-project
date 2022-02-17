import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddDegreePage = () => {


    return (
        <div>
            <Helmet>
                <title>Add Degree</title>
            </Helmet>
            <h1>Add Degree</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Degrees">Degrees Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Degree Name</th>
                    <th>Department id</th>
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

export default AddDegreePage;