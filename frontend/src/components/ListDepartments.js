import React from 'react';
import Department from './Department.js';

function ListDepartments( {departments, deleteDepartment, onEdit} ) {
    return (

        <table id="departments">
        <thead>
            <tr>
                <th>Department Name</th>
                <th>Edit</th>
                <th>Delete</th>

            </tr>
        </thead>
        <tbody>
            {departments.map((department, i) => <Department department={department}
                deleteDepartment={deleteDepartment}
                onEdit={onEdit}
                    key={i} />)}
        </tbody>
        </table>
    );
}

export default ListDepartments;