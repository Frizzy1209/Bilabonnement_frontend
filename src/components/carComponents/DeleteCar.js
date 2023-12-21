import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Car.css'

function DeleteCar() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`https://bilwebapp.azurewebsites.net/cars/${id}`) 
            .then(() => {
                navigate('/cars'); 
            })
            .catch(error => console.error('Error deleting car:', error));
    };

    const handleCancel = () => {
        navigate('/cars'); 

    return (
        <div className="delete-car-container">
            <h2>Delete Car</h2>
            <p>Are you sure you want to delete this car?</p>
            <button id="complete-delete" onClick={handleDelete}>Yes, Delete</button>
            <button id="cancel-delete" onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteCar;
