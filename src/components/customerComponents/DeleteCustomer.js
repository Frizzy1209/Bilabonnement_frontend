import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Customer.css'

function DeleteCustomer() {
    const { username } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`https://bilwebapp.azurewebsites.net/customers/${username}`) 
            .then(() => {
                navigate('/customers'); 
            })
            .catch(error => console.error('Error deleting customer:', error));
    };

    const handleCancel = () => {
        navigate('/customers'); 
    };

    return (
        <div className="delete-customer">
            <h2>Delete Customer</h2>
            <p>Are you sure you want to delete this customer?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button className="cancel-button" onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteCustomer;
