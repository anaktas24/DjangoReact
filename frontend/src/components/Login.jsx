import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Handling change for:", name, "value:", value);
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');  // Clear any previous errors

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/login/', credentials, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Response from server:", response.data);
      // Assuming the token is returned correctly
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store the token securely
        navigate('/profile'); // Redirect to the profile page or another route
      } else {
        throw new Error('Token not provided in response.'); // Handle cases where token is missing
      }
    } catch (error) {
      console.error("Error details:", error);  // Log the full error
      if (error.response) {
        setError(`Login failed: ${error.response.data.error || 'Please check your credentials.'}`);
      } else {
        setError('Unable to connect to the server. Please try again later.');
      }
    }
  };


  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>

          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            autoFocus
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className='btn btn-primary btn-block btn-large'>Login</button>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
