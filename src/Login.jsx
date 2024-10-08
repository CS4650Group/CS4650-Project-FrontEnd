import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';

const Login = ({setUserId}) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState([null]);
  
  useEffect(() => {
    getUsers();
  }, []);




  const CreateUserApi = async () => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Username: username,
      Email: email,
      PasswordHash: password
    };
  
    try {
      const response = await fetch('https://55270xq6xa.execute-api.us-east-2.amazonaws.com/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('User created successfully:', responseData);
        setErrorMessage(null); // Clear any error message
        navigate('/'); // Navigate to the homepage after successful user creation
      } else {
        console.error('Failed to create user:', response.status);
        setErrorMessage("Failed to create user");
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const getUsers = async () => {
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
    (action === 'Login' && username && password);


    const navigateToHomepageLogin = async () => {
      if (isFormFilled) {
            const filteredUser = users.find(
              user => user.Username === username && user.PasswordHash === password
            );
            if (filteredUser) {
              const userId = filteredUser.UserID;
              setUserId(userId);
              console.log('User:', {users})
              console.log('Navigating to homepage...');
              setErrorMessage(null);
              navigate('/');
          }else{
            setErrorMessage("Username or password is incorrect");
          }
        }else{
          console.log("Form is not filled")
          setErrorMessage("Please fill out all fields");
        }
      };

  return (
  <div>
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
          {action === 'Login' ? null: (
          <div className='input'>
            <img src={email_icon} alt='' />
            <input
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          )}
        

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
              CreateUserApi();

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
              console.log("work");
              navigateToHomepageLogin();
            }
          }}
        >
          Login
        </div>
      </div>
      <div className="error-message">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  </div>
  );
};

export default Login;
