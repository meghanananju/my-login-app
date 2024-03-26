import React, { useState, useEffect } from 'react';
import Logout from './logout';
const HomePage = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Fetch current time from server or browser
    const fetchCurrentTime = async () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    fetchCurrentTime();
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>
      <p>Current Time: {currentTime}</p>
      <Logout />
    </div>
  );
};

export default HomePage;
