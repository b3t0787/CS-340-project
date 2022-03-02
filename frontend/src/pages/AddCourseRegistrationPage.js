import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddCourseRegistrationPage = () => {

    const [student_id, setStudent_id] = useState('');
    const [course_id, setCourse_id] = useState('');

    const AddCourseRegistration = async () => {

        const newCourseRegistration = { student_id: student_id, course_id: course_id };
        const response = await fetch('/add-course-registration', {
            method: 'POST',
            body: JSON.stringify(newCourseRegistration),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the course registration");
        } else {
            alert(`Failed to add course registration, satus code = ${response.status}`);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Add Course Registration</title>
            </Helmet>
            <h1>Course Registration</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/course-registrations">Course Registrations Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Student id</th>
                    <th>Course id</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <input
                        type="number" 
                        value={student_id}
                        onChange={e => setStudent_id(e.target.value)}/>
                    </td>
                    <td>
                    <input
                        type="number" 
                        value={course_id}
                        onChange={e => setCourse_id(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddCourseRegistration}>Add</button>
        </div>
    );
};

export default AddCourseRegistrationPage;