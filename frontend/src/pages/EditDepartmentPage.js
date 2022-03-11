import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import topImage from '../logos/topImage.jpeg';

const EditDepartmentPage = ({ departmentToEdit }) => {

    const [department_name, editDepartmentName] = useState(departmentToEdit.dept_name);

    const nav = useNavigate();

    const EditDepartment = async () => {
        const response = await fetch(`/Departments/${departmentToEdit.dept_id}`, {
            method: "put",
            body: JSON.stringify({ department_name: department_name }),
            headers: { 'Content-type': 'application/json'}
        });
        if(response.status === 200) {
            alert("Successfully edited the department!");
            nav("/Departments")
        } else {
            alert(`Failed to edit the department, status code =${response.status}`);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Edit Department</title>
            </Helmet>
            <img src={topImage}></img>
            <h1>Edit Department</h1>
            <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Departments">Departments Page</Link></li>
            </ul>
            <table>
                <thead>
                 <tr>
                    <th>Department Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                        type="text" 
                        value={department_name}
                        onChange={e => editDepartmentName(e.target.value)}/>
                    </td>
                    </tr>
            </tbody>
            </table>
            <button onClick={EditDepartment}>Edit</button>
        </div>
    );


};

export default EditDepartmentPage;