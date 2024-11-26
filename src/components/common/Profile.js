import React, { useEffect, useState } from 'react';
import './Profile.css'; // Optional: Import CSS for styling if required.

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data. Replace this with an actual API call.
    const fetchUser = async () => {
      // Example of a hardcoded user object
      const loggedInUser = {
        id: 1,
        name: 'Mahesh Shinde',
        email: 'maheshshinde9100@gmail.com',
        role: 'mentor', // Replace with 'admin', 'mentee', or other roles as needed.
      };
      setUser(loggedInUser);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button 
        className="logout-button" 
        onClick={() => {
          // Clear user session and redirect to login
          setUser(null); 
          window.location.href = '/login';
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
