import React from 'react';
import "./App.css"
const Profile = ({ users }) => {
    return (
      <div className="users">
      <h2>Profile: </h2>
        <h2>UserID: {users.UserID}</h2>
        <h2>First Name: {users.FirstName}</h2>
        <h2>Last Name: {users.LastName}</h2>
        <h2>Username: {users.Username}</h2>
        <h2>Email: {users.Email}</h2>
        <h2>Creation: {users.CreatedAt}</h2>
        <h2>Last Login: {users.LastLogin}</h2>
        <h2>- - - - - - - - - - - - - - - - - - - -</h2>
      </div>
    );
  };
export default Profile;