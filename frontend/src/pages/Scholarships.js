import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';

function Scholarships() {

    const nav = useNavigate();

    return (
        <>
        <Helmet>
        <title>Scholarships</title>
        </Helmet>
        <h1>Scholarships</h1>
        <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/add-scholarship">Add Scholarship</Link></li>
        </ul>
        <form>
            <label>
                Min Amount:
                <input type="text" name="min-amount"/>
            </label>
            <label>
                Max Amount:
                <input type="text" name="max-amount" />
                <button>Search</button>
            </label>
        </form>
        <table id="scholarships">
            <thead>
                <tr>
                    <th>Scholarship name</th>
                    <th>Amount</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Coca-Cola Monster Scholarship</td>
                <td>35000.00</td>
                <td><MdEdit onClick={ () => nav("/edit-scholarship")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            <tr>
                <td>All Monster Scholarship</td>
                <td>3500.00</td>
                <td><MdEdit onClick={ () => nav("/edit-scholarship")}/></td>
                <td><MdDeleteForever /></td>
            </tr>
            </tbody>
        </table>
        </>
    );
}



export default Scholarships;