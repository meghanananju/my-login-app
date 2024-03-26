
import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [logoutMessage] = useState('');
  const username = localStorage.getItem('username');
  const handleLogout = () => {
    axios.post('http://localhost:5000/logout', { username })
      .then(response => {
        console.log(response.data.message); // Set the logout message state
        window.location.replace('/login'); // Redirect to the "/login" page
      })
      .catch(error => {
        console.error('Logout failed:', error); // Handle logout failure
      });
  };
  

  return (
    <div>
      {logoutMessage && <p>{logoutMessage}</p>} {/* Display logout message if available */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

/* 
import React from 'react';.logout());
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Logout = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    const username = localStorage.getItem('username');

    axios.post('http://localhost:5000/logout', { username })
      .then(()=> {
        localStorage.removeItem('token'); // Remove token from localStorage
        localStorage.removeItem('username'); // Remove username from localStorage
        navigate('/login'); // Navigate to login page after logout
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  };

  return (
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
 */