import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';

function Degrees() {

    const nav = useNavigate()

    return (
        <>
        <Helmet>
            <title>Degrees</title>
        </Helmet>
        <h1>Degrees</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-degree">Add Degree</Link></li>
        </ul>
        <form>
            <label>
                Department Name:
                <input type="text" name="department-name" />
                <button>Search</button>
            </label>
        </form>
        <table id="degrees">
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>BS Scream</td>
                <td>Scream</td>
                <td><MdEdit onClick={ () => nav("/edit-degree")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>BS Scaring</td>
                <td>Scaring</td>
                <td><MdEdit onClick={ () => nav("/edit-degree")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Degrees;