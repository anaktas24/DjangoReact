import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
      setFormData({
          ...formData,
          [event.target.name]: event.target.value
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:8000/api/user/register/', formData, {
              headers: {
                  'Content-Type': 'application/json',
              }
          });
          if (response.status === 201) { // Check if registration was successful
              console.log('Registration successful', response.data);
              navigate('/login'); // Redirect to the login page after successful registration
          } else {
              console.error('Registration failed:', response.data); // This case may not be necessary as it might be handled by the catch block
          }
      } catch (error) {
          if (error.response) {
              console.error('Registration failed:', error.response.data);
              // Here we handle displaying the error to the user
              const errors = error.response.data;
              if (errors.email) {
                  alert(`Email error: ${errors.email.join(" ")}`); // Display email errors
              }
          } else if (error.request) {
              console.error('Registration failed: No response received', error.request);
          } else {
              console.error('Error', error.message);
          }
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
                    type="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
