import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { SiAddthis } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';


function CourseRegistration({ courseRegistration, deleteCourseRegistration }) {

    const nav = useNavigate();

    return (
        <tr>
            <td>{courseRegistration.first_name} <br/>{courseRegistration.last_name}</td>
            <td>{courseRegistration.title}</td>
            <td>{courseRegistration.score}</td>
            <td>{courseRegistration.grade}</td>
            <td><SiAddthis onClick={ () => nav("/record-grade")} /></td>
            <td><MdDeleteForever onClick={ () => 
                deleteCourseRegistration(courseRegistration.student_id, courseRegistration.course_id)}/></td>
        </tr>

    )
}

export default CourseRegistration;

