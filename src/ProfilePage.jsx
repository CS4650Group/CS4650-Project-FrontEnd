import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './Profile';

const ProfilePage = ({currentUserId}) => {
  const [userID, setUserID] = useState([]);

  useEffect(() => {
    getApi(currentUserId);
  }, [currentUserId]);

  const getApi = async (currentUserId) => {
    try {
      const response = await fetch('https://4650blog.azurewebsites.net/api/test_data?code=test');
      if (response.ok) {
        const data = await response.json();
        console.log('API data:', data);
          const newUserID = data.map((user) => ({
            UserID: currentUserId,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Username: user.Username,
            Email: user.Email,
            CreatedAt: user.CreatedAt,
            LastLogin: user.LastLogin,
          }));
          setUserID(newUserID);

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
        {userID.map((user, index) => (
          <Profile users={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
