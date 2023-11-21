import React, { useState } from 'react';
import "./Login.css";

import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const[action,setAction] = useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action} </div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>
            {action==='Login'?<div></div>:<div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' 
                    placeholder='Name'
                    value={name}
                    onChange={handleNameChange}   
                    />
                </div>}

            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' 
                placeholder='Email Address'
                value={email}
                onChange={handleEmailChange}
                />
            </div>

            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password' 

                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                />
            </div>
        </div>

        <div className='submit-container'>
            <div className={action==='Login'?'submit gray':"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==='Sign Up'?'submit gray':"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

        
    </div>
  );
};

export default Login;