import React from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/api/login/', {  // Ensure the correct URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.access);
            navigate('/profile');
        } else {
            const errorData = await response.json();
            setError(errorData.detail || 'Login failed');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
