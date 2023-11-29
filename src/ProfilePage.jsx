import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './Profile';

const ProfilePage = () => {
  const [users, setUsers] = useState([]); // Initialize users state

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const response = await fetch('https://0cuq5fy7wl.execute-api.us-east-2.amazonaws.com/dev');
      if (response.ok) {
        const responseData = await response.json();
        const dataFromBody = responseData.body; // Extract the body directly
  
        // Check if the body is already parsed JSON
        const updatedUsers = typeof dataFromBody === 'string' ? JSON.parse(dataFromBody) : dataFromBody;
  
        console.log('API data:', updatedUsers);
  
        setUsers(updatedUsers); // Update users state with fetched data
      } else {
        console.error('Fetch request failed:', response.status);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  

  return (
    <div className="ProfilePage">
      <h1>Profile</h1>
      <h1>Database Connection Test:</h1>
      <div>
        {users.map((user, index) => (
          <Profile userData={user} key={index} />
          // Assuming `Profile` component accepts `userData` prop
        ))}
      </div>
    </div>
  );
  
};

export default ProfilePage;
