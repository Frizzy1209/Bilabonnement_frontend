import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Damage.css';

function DeleteDamage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`https://bilwebapp.azurewebsites.net/damages/${id}`) 
            .then(() => {
                navigate('/damages'); 
            })
            .catch(error => console.error('Error deleting damage:', error));
    };

    const handleCancel = () => {
        navigate('/damages'); 
    };

    return (
        <div className="delete-damage-container">
            <h2>Delete Damage</h2>
            <p>Are you sure you want to delete this damage?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button className="cancel-button" onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteDamage;
