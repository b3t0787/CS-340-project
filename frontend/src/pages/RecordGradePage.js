import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';
import apiURL from '../data/apiURL.js';

const RecordGradePage = ({ gradeToRecord}) => {

    const [score, editScore] = useState(gradeToRecord.score);

    const nav = useNavigate();

    const recordGrade = async () => {
        const response = await fetch(`${apiURL}/Course-Registrations/student_id/${gradeToRecord.student_id}/course_id/${gradeToRecord.course_id}`, {
            method: "put",
            body: JSON.stringify({ score: score }),
            headers: { 'Content-type': 'application/json'}
        });
        if(response.status === 200) {
            alert("Successfully recorded the grade!");
            nav("/Course-Registrations")
        } else {
            alert(`Failed to record the grade, status code =${response.status}`);
        }
    };


    return (
        <div>
            <Helmet>
                <title>Record Grade</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Record Grade</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/course-registrations">Course Registrations Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                        type="number" 
                        value={score}
                        onChange={e => editScore(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={recordGrade}>Record</button>
        </div>
    );
};

export default RecordGradePage;