import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      const response = await axios.post('http://127.0.0.1:8000/api/login/', credentials, {
        headers: { 'Content-Type': 'application/json' }
      });

      // Assuming the token is returned correctly
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store the token securely
        navigate('/profile'); // Redirect to the profile page or another route
      } else {
        throw new Error('Token not provided in response.'); // Handle cases where token is missing
      }
    } catch (error) {
      if (error.response) {
        // Handle HTTP errors received from the server
        setError(`Login failed: ${error.response.data.error || 'Please check your credentials.'}`);
      } else {
        // Handle other errors such as network issues
        setError('Unable to connect to the server. Please try again later.');
      }
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoFocus
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
