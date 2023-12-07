import React, { useState, useEffect } from 'react';
import './App.css';
import BlogInstance from './BlogInstance'; // Import the BlogInstance component

const Homepage = ( {currentUserId} ) => {
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
      <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#333' }}>
        CloudScape {currentUserId}
      </h1>
      <div className="blog-posts">
        {sortedBlogPosts.map((post) => (
          <BlogInstance
            key={post.PostID}
            PostID={post.PostID}
            Title={post.Title}
            AuthorID={post.AuthorID}
            Content={post.Content}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
