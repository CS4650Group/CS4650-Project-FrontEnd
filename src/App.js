import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import BlogPage from './BlogPage';
import ProfilePage from './ProfilePage';
import CreatePost from './CreatePost';
import './App.css';

const App = () => {
  const [PageId, setPageId] = useState(11);
  const [UserId, setUserId] = useState(null);

  useEffect(() => {
    // Your initialization logic, if any
  }, []);

  const handleLogout = () => {
    setPageId(null)
    setUserId(null);
  };

  return (
    <Router>
      <div className="App">
        <div className='select'>
          <Link to="/">Home</Link>
          {UserId ? (
            <>
              <Link to="/post">BlogPage</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/create">Create</Link>
              <span onClick={handleLogout}>Logout</span>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>

        <Routes>

          <Route exact path="/" element={<Homepage currentUserId={UserId} setPageId={setPageId}/>} />
          <Route path="/login" element={<Login setUserId={setUserId}/>} />
          <Route path="/post" element={<BlogPage pageID={PageId} />} />
          <Route path="/profile" element={<ProfilePage currentUserId={UserId} />} />
          <Route path="/create" element={<CreatePost currentUserId={UserId} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
