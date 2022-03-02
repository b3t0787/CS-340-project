import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddDegreePage = () => {

    const [dept_id, setDept_id] = useState('');
    const [degree_name, setDegree_name] = useState('');

    const AddDegree = async () => {

        const newDegree = { dept_id: dept_id,  degree_name: degree_name };
        const response = await fetch('/add-degree', {
            method: 'POST',
            body: JSON.stringify(newDegree),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the course");
        } else {
            alert(`Failed to add course, satus code = ${response.status}`);
        }
    };

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
                        type="text" 
                        value={degree_name}
                        onChange={e => setDegree_name(e.target.value)}/>
                    </td>
                    <td>
                        <input
                        type="number" 
                        value={dept_id}
                        onChange={e => setDept_id(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddDegree}>Add</button>
        </div>
    );


};

export default AddDegreePage;