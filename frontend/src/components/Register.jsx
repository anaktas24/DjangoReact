import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password,

        };

        console.log('Submitting data:', data); // Log the data to verify its structure

       // Using axios for HTTP requests


        try {
            const response = await axios.post('/api/user/register/', userData);
            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }


    // Example function to get a user's profile

        try {
            const response = await axios.get(`/api/profile/${userId}/`);
            console.log('User profile:', response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }


    };

    return (
        <div className="main-title form-block">
            <div id="title">
                <h1>Register.</h1>
                <h2>Your fruity companion to Migration</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
            <div id="labels">
                Already registered? <span>Login</span>
                Password lost? <span>Reset</span>
                <span>Back</span>
                Not registered? <span>Create an account</span>
            </div>
        </div>
    );
}

export default Register;
