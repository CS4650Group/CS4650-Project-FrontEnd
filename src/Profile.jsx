import React from 'react';
import "./App.css"
const Profile = ({ users }) => {
    return (
      <div className="users">
      <h2>Profile: </h2>
        <h1>UserID: {users.UserID}</h1>
        <h1>{users.FirstName}</h1>
        <h1>{users.LastName}</h1>
        <h1>{users.UserName}</h1>
        <h1>{users.Email}</h1>
        <h1>{users.created_at}</h1>
        <h1>{users.last_login}</h1>
      </div>
    );
  };
export default Profile;