import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';

function Course({ course, deleteCourse, onEdit }) {

    return (
        <tr>
            <td>{course.title}</td>
            <td>{course.dept_name}</td>
            <td>{course.unit_hours}</td>
            <td><MdEdit onClick={ () => onEdit(course)}/></td>
            <td><MdDeleteForever onClick={ () => deleteCourse(course.course_id)}/></td>
        </tr>

    )
}

export default Course;