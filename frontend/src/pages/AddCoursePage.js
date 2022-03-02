import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddCoursePage = () => {

    const [dept_id, setDept_id] = useState('');
    const [title, setTitle] = useState('');
    const [unit_hours, setUnit_hours] = useState('');

    const AddCourse = async () => {

        const newCourse = { dept_id: dept_id,  title: title, unit_hours: unit_hours };
        const response = await fetch('/add-course', {
            method: 'POST',
            body: JSON.stringify(newCourse),
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
            <title>Add Course</title>
        </Helmet>
            <h1>Add Course</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Courses">Courses Page</Link></li>
            </ul>
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
                        type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
                    </td>
                    <td>
                    <input
                        type="number" 
                        value={dept_id}
                        onChange={e => setDept_id(e.target.value)}/>
                    </td>
                    <td>
                    <input
                        type="number" 
                        value={unit_hours}
                        onChange={e => setUnit_hours(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddCourse}>Add</button>
        </div>
    );


};

export default AddCoursePage;