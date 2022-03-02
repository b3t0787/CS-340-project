import React from 'react';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function Course({ course, deleteCourse }) {

    const nav = useNavigate();

    return (
        <tr>
            <td>{course.title}</td>
            <td>{course.dept_name}</td>
            <td>{course.unit_hours}</td>
            <td><MdEdit onClick={ () => nav("/edit-course")}/></td>
            <td><MdDeleteForever onClick={ () => deleteCourse(course.course_id)}/></td>
        </tr>

    )
}

export default Course;