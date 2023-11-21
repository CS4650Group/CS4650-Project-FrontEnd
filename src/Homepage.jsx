import React from 'react';
import "./App.css";
import BlogInstance from './BlogInstance';
const Homepage = () => {
  return (
    <div className="homepage">
          <h1>Home Screen</h1>
      <div>
        <BlogInstance/>
      </div>
    </div>
    
  );
};

export default Homepage;
