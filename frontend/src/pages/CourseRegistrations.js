import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ListCourseRegistrations from '../components/ListCourseRegistrations.js';
import topImage from '../logos/topImage.jpeg';

function CourseRegistrations({ setRecordGrade }) {

    const [student_id, setStudentId] = useState('');
    const [course_id, setCourseId] = useState('');
    const [minScore, setMinScore] = useState('');
    const [maxScore, setMaxScore] = useState('');
    const [courseRegistrations, setCourseRegistrations] = useState([]);
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const nav = useNavigate();

    const onEdit = async gradeToRecord => {
        setRecordGrade(gradeToRecord);
        nav("/record-grade");

    };
    // Search by Student or/and Course
    const searchStudentCourse = async() => {
        let stud = student_id;
        let cor = course_id;
        if (stud === '') {
            stud = '@@@'
        }
        if (cor === '') {
            cor = '@@@'
        }
        const response = await fetch(`/Course-Registrations/search-by-student-course/stud/${stud}/cor/${cor}`);
        const data = await response.json();
        setCourseRegistrations(data);
    }
    // Search by Score
    const searchScore = async() => {
        let min = minScore;
        let max = maxScore;
        if (min === '') {
            min = '@@@'
        }
        if (max === '') {
            max = '@@@'
        }
        const response = await fetch(`/Course-Registrations/search-by-score/min/${min}/max/${max}`);
        const data = await response.json();
        setCourseRegistrations(data);
    }

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
        loadCourseRegistrations();
    }, []);

    return (
        <>
        <Helmet>
            <title>Course Registrations</title>
        </Helmet>
        <img src={topImage}></img>
        <h1>Course Registrations</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-course-registration">Add Course Registration</Link></li>
        </ul>
        <label>Search by Student</label>
        <select onChange={e => setStudentId(e.target.value)}>
            <option></option>
           {students.map((student) => <option value={student.student_id}>{student.first_name}&nbsp;{student.last_name}</option>)}
        </select>
        <label>Search by Course</label>
        <select onChange={e => setCourseId(e.target.value)}>
            <option></option>
           {courses.map((course) => <option value={course.course_id}>{course.title}</option>)}
        </select>
        <button onClick={searchStudentCourse}>Search</button>
        <br/>
        <label>
            Min Score:
            <input type="number"
                value={minScore}
                onChange={e => setMinScore(e.target.value)}/>
        </label>
        <label>
            Max Score:
            <input type="number" 
                value={maxScore}
                onChange={e => setMaxScore(e.target.value)}/>
                <button onClick={searchScore}>Search</button>
        </label>
        <br/>
        <button onClick={loadCourseRegistrations}>Reset</button>
    
        <ListCourseRegistrations courseRegistrations={courseRegistrations} 
        deleteCourseRegistration={deleteCourseRegistration} onEdit={onEdit}/>
        </>
    );
}



export default CourseRegistrations;