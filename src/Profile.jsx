import React from 'react';
import "./App.css"

const Profile = ({ userData }) => {

const date = new Date(userData.CreatedAt);
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const formattedDate = `${day}-${month}-${year}`;
  return (
    <div className="user">
      <h2>UserID: {userData.UserID}</h2>
      <h2>First Name: {userData.FirstName}</h2>
      <h2>Last Name: {userData.LastName}</h2>
      <h2>Username: {userData.Username}</h2>
      <h2>Email: {userData.Email}</h2>
      <h2>Account created at: {formattedDate}</h2>
    </div>
  );
};

export default Profile;
