import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';
import ListCourseRegistrations from '../components/ListCourseRegistrations.js';

function CourseRegistrations() {

    const [courseRegistrations, setCourseRegistrations] = useState([]);

    const nav = useNavigate();

    const deleteCourseRegistration = async (student_id, course_id) => {
        const response = await fetch(`/Course-Registrations/student_id/${student_id}/course_id/${course_id}`, 
        {method: "DELETE" });
        if (response.status === 204) {
            setCourseRegistrations(courseRegistrations.filter(e => e.student_id !== student_id || e.course_id !== course_id ));
        } else {
            console.error(`Failed to delete course registration with student_id = ${student_id} and 
            course_id = ${course_id}`);
        }
    };

    const loadCourseRegistrations = async () => {
        const response = await fetch('/Course-Registrations'); // calling rest API to obtain array of "course registrations"
        const data = await response.json();
        setCourseRegistrations(data);
    }

    useEffect( () => {
        loadCourseRegistrations();
    }, []);

    return (
        <>
        <Helmet>
            <title>Course Registrations</title>
        </Helmet>
        <h1>Course Registrations</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-course-registration">Add Course Registration</Link></li>
        </ul>
        <form>
            <label>
                Student id:
                <input type="text" name="student-id" />
            </label>
            <label>
                Cousre id:
                <input type="text" name="course-id" />
                <button>Search</button>
            </label>
        </form>
        <form>
            <label>
                Min Score:
                <input type="text" name="min-score"/>
            </label>
            <label>
                Max Score:
                <input type="text" name="max-score" />
                <button>Search</button>
            </label>
        </form>
        <ListCourseRegistrations courseRegistrations={courseRegistrations} 
        deleteCourseRegistration={deleteCourseRegistration}/>
        </>
    );
}



export default CourseRegistrations;