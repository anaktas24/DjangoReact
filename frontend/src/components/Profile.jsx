import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get token from local storage (you should adapt this to your storage method)
        const token = localStorage.getItem('token');

        const response = await axios.get(`http://127.0.0.1:8000/api/profile/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Bio: {profile.bio}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default Profile;
