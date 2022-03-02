import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit} from 'react-icons/md';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import ListDegrees from '../components/ListDegrees.js'


function Degrees() {

    const [degrees, setDegrees] = useState([]);

    const nav = useNavigate();

    const deleteDegree = async _id => {
        const response = await fetch(`/Degrees/${_id}`, {method: "DELETE" });
        if (response.status === 204) {
            setDegrees(degrees.filter(e => e.degree_id !== _id));
        } else {
            console.error(`Failed to delete course with _id = ${_id}`);
        }
    };

    const loadDegrees = async () => {
        const response = await fetch('/Degrees'); // calling rest API to obtain array of "degrees"
        const data = await response.json();
        setDegrees(data);
    }

    useEffect( () => {
        loadDegrees();
    }, []);

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
        <ListDegrees degrees={degrees} deleteDegree={deleteDegree}/>
        </>
    );
}



export default Degrees;