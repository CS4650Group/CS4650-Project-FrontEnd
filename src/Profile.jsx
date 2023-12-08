import React from 'react';
import "./App.css"

const Profile = ({ userData }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="user">
      <h2>UserID: {userData.UserID}</h2>
      <h2>First Name: {userData.FirstName}</h2>
      <h2>Last Name: {userData.LastName}</h2>
      <h2>Username: {userData.Username}</h2>
      <h2>Email: {userData.Email}</h2>
      <h2>Account created: {formatDate(userData.CreatedAt)}</h2>
    </div>
  );
};

export default Profile;
