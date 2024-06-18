import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/api/profile/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                navigate('/login');
                return null;
            }
            return response.json();
        })
        .then(data => {
            setProfile(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching profile:', error);
            setError(error);
            setLoading(false);
        });
    }, [navigate]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    if (!profile) return null;

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default Profile;
