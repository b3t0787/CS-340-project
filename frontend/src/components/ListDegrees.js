import React from 'react';
import Degree from './Degree.js';

function ListDegrees( {degrees, deleteDegree, onEdit} ) {
    return (
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
            {degrees.map((degree, i) => <Degree degree={degree}
                deleteDegree={deleteDegree}
                onEdit={onEdit}
                    key={i} />)}
        </tbody>
        </table>
    );
}

export default ListDegrees;





