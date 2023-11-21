import React, { useState, useEffect} from 'react';
import "./App.css";
import Profile from './Profile';
import user_icon from './person.png'

const Homepage = () => {
  const [userID, setUserID] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async (userId) => {
    const response = await fetch(`https://4650blog.azurewebsites.net/api/test_data?code=UrnRHfgAB2GyzDS3P1ghX5MLyV8vvPGuOBIkpAa1xnQ7AzFujFuhDA==`);
    const data = await response.json();

    if (Array.isArray(data)) {
      const newUserID = data.map(user => ({
        UserID: user.UserID,
        FirstName: user.FirstName,
        LastName: user.LastName,
        UserName: user.UserName,
        Email: user.Email,
        created_at: user.created_at,
        last_login: user.last_login
      }));

      setUserID(newUserID); 
    };
  };


  return (
    <div className="homepage">
      <h1>Home Screen</h1>
      <h1>Database Connection Test:</h1>
      <div>
      {userID.map((user, index) => (
        <Profile users={user} key={index} /> 
      ))}
      </div>
      
    </div>
  );
};

export default Homepage;
