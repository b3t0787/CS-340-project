import React from 'react';
import CourseRegistration from './CourseRegistration.js';

function ListCourseRegistrations( {courseRegistrations, deleteCourseRegistration, onEdit} ) {
    return (
        <table id="course registrations">
        <thead>
            <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Record Grade</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {courseRegistrations.map((courseRegistration, i) => <CourseRegistration courseRegistration={courseRegistration}
            deleteCourseRegistration={deleteCourseRegistration}
            onEdit={onEdit}
                key={i} />)}
        </tbody>
    </table>
    );
}

export default ListCourseRegistrations;