import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditDegreePage = () => {


    return (
        <div>
            <h1>Edit Degree</h1>
            <p>Return to <Link to="/">Home Page</Link></p>
            <p>Return to <Link to="/Degrees">Degrees Page</Link></p>
            <table>
                <thead>
                 <tr>
                    <th>Degree Name</th>
                    <th>Department Name</th>
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
            <button >Edit</button>
        </div>
    );


};

export default EditDegreePage;