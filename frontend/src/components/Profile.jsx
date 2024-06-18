// src/Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/profile/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                navigate('/login');
            }
            return response.json();
        })
        .then(data => setProfile(data))
        .catch(error => console.error('Error fetching profile:', error));
    }, [navigate]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Username: {profile.user}</p>
            <p>Email: {profile.user.email}</p>
            {/* Add other profile fields as needed */}
        </div>
    );
};

export default Profile;
