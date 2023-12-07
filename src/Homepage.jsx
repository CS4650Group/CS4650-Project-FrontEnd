import React, { useState, useEffect } from 'react';
import './App.css';
import BlogInstance from './BlogInstance';

const Homepage = ({ currentUserId }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getApi(); 
  }, []);

  const getApi = async () => {
    try {
      const response = await fetch('https://zlhxj661i8.execute-api.us-east-2.amazonaws.com/blog_posts');
      const responseData = await response.json();

      // Parse the JSON string inside the "body" property
      const parsedData = JSON.parse(responseData.body);
      setBlogPosts(parsedData); // Set the fetched blog posts to state
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  // Sort blogPosts based on PostID in descending order
  const sortedBlogPosts = [...blogPosts].sort((a, b) => b.PostID - a.PostID);

  return (
    <div className="homepage">
      <h3>CloudScape {currentUserId}</h3>
      <div>
        {sortedBlogPosts.map((post) => (
          <div key={post.PostID} className="post">
            <div className="post-content">
              <div className="post-image">
                <img src={post.FeaturedImageURL} alt={`Image for ${post.Title}`} />
              </div>
              <div className="post-info">
                <h1>{post.Title}</h1>
                <h2>Posted by @{post.AuthorID}</h2>
                <h2>Date: {post.CreatedAt}</h2>
                <p>{post.Content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
