import React, { useState } from 'react';
import './Login.css';

import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const CreateUserApi = async () => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Username: username,
      Email: email,
      Password: password
    };
  
    try {
      const response = await fetch('https://55270xq6xa.execute-api.us-east-2.amazonaws.com/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: "body:" + JSON.stringify(data)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('User created successfully:', responseData);
        console.log(JSON.stringify(data))
        // Handle the successful response here
      } else {
        console.error('Failed to create user:', response.status);
        // Handle the error here
      }
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle any network or other errors here
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [action, setAction] = useState('Login');

  const isFormFilled =
    (action === 'Sign Up' && firstName && lastName && username && email && password) ||
    (action === 'Login' && email && password);

  const navigateToHomepage = () => {
    if (isFormFilled) {
      CreateUserApi();
      console.log('Navigating to homepage...');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === 'Login' ? null : (
          <div className='input'>
            <img src={user_icon} alt='' />
            <input
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
        )}

        {action === 'Login' ? null : (
          <div className='input'>
            <img src={user_icon} alt='' />
            <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        )}

        <div className='input'>
          <img src={user_icon} alt='' />
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className='input'>
          <img src={email_icon} alt='' />
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className='input'>
          <img src={password_icon} alt='' />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>

      <div className='submit-container'>
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            if (action === 'Login') {
              setAction('Sign Up');
            } else {
              navigateToHomepage();
            }
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            if (action === 'Sign Up') {
              setAction('Login');
            } else {
              navigateToHomepage();
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
