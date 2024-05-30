
import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        age: '',
        email: '',
        phoneNumber: '',
        profilePicture: '',
        username: '',
        password: '',
        dreamDestination: '',
        phone: '',
    });

    

    const handleChange = (e) => {
        setFormData({
           ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/register', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        }; 
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                {/* Name Input Field*/}
                <button type='submit'>Register</button>
                /</form>
        /</div>
    );
};  

export default Register;