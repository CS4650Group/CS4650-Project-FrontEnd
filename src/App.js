import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import BlogPage from './BlogPage';
import ProfilePage from './ProfilePage';
import "./App.css";


const App = () => {
  const [PageId, setPageId] = useState([]);
  const [UserId, setUserId] = useState([]);


  useEffect(() => {
    setPageId(11);
    setUserId(0);
  }, []);
  
  return (
    <Router>
  <div className="App">
    <div className='select'>
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>
  
      <Link to="/post">BlogPage</Link>

      <Link to="/profile">Profile</Link>
    </div>

    


    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<BlogPage pageID={PageId} />} />
      <Route path="/profile" element={<ProfilePage currentUserId={UserId} />} />
    </Routes>
  </div>
</Router>
  );
};

export default App;
