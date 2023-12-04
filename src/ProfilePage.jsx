import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './Profile';

const ProfilePage = ( {currentUserId} ) => {
  const [users, setUsers] = useState([]); // Initialize users state
  const [targetUserId, setTargetId] = useState([]); // Replace 'desired_user_id' with the actual ID you want to display

  useEffect(() => {
    setTargetId(currentUserId);
    getApi();
  }, [currentUserId]);

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
  
  const filteredUser = users.filter(user => user.UserID === targetUserId);

  return (
    <div>
      <div className='homepage'> <h3>CloudScape</h3> </div>
      <div className="ProfilePage">
        <h1>Profile {currentUserId}</h1>
        <div>
          {filteredUser.map((user, index) => (
            <Profile userData={user} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
