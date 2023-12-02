import React, { useState, useEffect } from 'react';
import './Blog.css';

const BlogPage = ({ pageID }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
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

    getApi(); // Call the API on component mount
  }, []);

  return (
    <div className="Page">
      <h1>Blog Title</h1>
      <h1>Blog Id: {pageID}</h1>
      <div>
        {blogPosts.map((post) => (
          <div key={post.PostID}>
            <h2>Title: {post.Title}   AuthorID: {post.AuthorID}</h2>
            <p>Content: {post.Content}</p>
            
            {/* Display other relevant information */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
