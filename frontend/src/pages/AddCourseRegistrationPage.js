import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';

const AddCourseRegistrationPage = () => {

    const [student_id, setStudentId] = useState('');
    const [course_id, setCourseId] = useState('');
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const nav = useNavigate()

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
            nav("/Course-Registrations")
        } else {
            alert(`Failed to add course registration, satus code = ${response.status}`);
        }
    };

    const loadStudents = async () => {
        const response = await fetch('/Students'); // calling rest API to obtain array of "students"
        const data = await response.json();
        setStudents(data);
    };

    const loadCourses = async () => {
        const response = await fetch('/Courses'); // calling rest API to obtain array of "courses"
        const data = await response.json();
        setCourses(data);
    };

    useEffect( () => {
        loadStudents();
        loadCourses();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Add Course Registration</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Course Registration</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/course-registrations">Course Registrations Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Student</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <select onChange={e => setStudentId(e.target.value)}>
                    <option></option>
                    {students.map((student) => <option value={student.student_id}>{student.first_name}&nbsp;{student.last_name}</option>)}
                    </select>
                    </td>
                    <td>
                    <select onChange={e => setCourseId(e.target.value)}>
                        <option></option>
                        {courses.map((course) => <option value={course.course_id}>{course.title}</option>)}
                    </select>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={AddCourseRegistration}>Add</button>
        </div>
    );
};

export default AddCourseRegistrationPage;