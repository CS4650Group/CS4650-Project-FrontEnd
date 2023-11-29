import React from 'react';
import "./App.css"

const Profile = ({ userData }) => {
  return (
    <div className="user">
      <h2>Profile:</h2>
      <h2>UserID: {userData.UserID}</h2>
      <h2>First Name: {userData.FirstName}</h2>
      <h2>Last Name: {userData.LastName}</h2>
      <h2>Username: {userData.Username}</h2>
      <h2>Email: {userData.Email}</h2>
      <h2>Creation: {userData.CreatedAt}</h2>
      <h2>Last Login: {userData.LastLogin}</h2>
      <h2>- - - - - - - - - - - - - - - - - - - -</h2>
    </div>
  );
};

export default Profile;
