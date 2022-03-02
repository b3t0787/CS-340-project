import React from 'react';
import Scholarship from './Scholarship.js';


function ListScholarships( {scholarships, deleteScholarship} ) {
    return (
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
        {scholarships.map((scholarship, i) => <Scholarship scholarship={scholarship}
            deleteScholarship={deleteScholarship}
                key={i} />)}
        </tbody>
    </table>
    );
}

export default ListScholarships;