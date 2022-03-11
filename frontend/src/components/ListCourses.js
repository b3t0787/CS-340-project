import React from 'react';
import Course from './Course.js';

function ListCourses( {courses, deleteCourse, onEdit} ) {
    return (
        <table id="courses">
        <thead>
            <tr>
                <th>Title</th>
                <th>Department</th>
                <th>Unit hours</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {courses.map((course, i) => <Course course={course}
            deleteCourse={deleteCourse}
            onEdit={onEdit}
                key={i} />)}
        </tbody>
    </table>
    );
}

export default ListCourses;