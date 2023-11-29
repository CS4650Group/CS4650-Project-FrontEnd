import React, { useState, useEffect } from 'react';
import './App.css';

const Homepage = () => {
  const [userID, setUserID] = useState([]);

  useEffect(() => {
    setUserID(1);
  }, []);


  return (
    <div className="homepage">
      <h1>Home Screen</h1>
      <h2>{userID}</h2>
    </div>
  );
};

export default Homepage;
