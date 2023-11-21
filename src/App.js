import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import BlogPage from './BlogPage';
import "./App.css";


const App = () => {
  return (
    <Router>
  <div className="App">
    <div className='select'>
      <Link to="/">Home</Link>
      <h1></h1> 
      <Link to="/login">Login</Link>
      <h1></h1>
      <Link to="/post">BlogPage</Link>
    </div>
    
    

    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<BlogPage />} />
    </Routes>
  </div>
</Router>
  );
};

export default App;
