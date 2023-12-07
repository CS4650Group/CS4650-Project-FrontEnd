import React, { useState, useEffect } from 'react';
import './Blog.css';

const BlogPage = ({ pageID }) => {
  const [blogPost, setBlogPost] = useState(null); // State for the single blog post

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch('https://zlhxj661i8.execute-api.us-east-2.amazonaws.com/blog_posts');
        const responseData = await response.json();

        // Parse the JSON string inside the "body" property
        const parsedData = JSON.parse(responseData.body);

        // Find the blog post that matches the pageID
        const selectedPost = parsedData.find(post => post.PostID === pageID);

        if (selectedPost) {
          setBlogPost(selectedPost); // Set the found blog post to state
        } else {
          console.error('Blog post not found for pageID:', pageID);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    getApi(); // Call the API on component mount
  }, [pageID]);

  return (
    <div>
      <div className="homepage">
        <h3>CloudScape</h3>
      </div>
      <div className="page">
        {blogPost ? (
          <div key={blogPost.PostID}>
            <div>
              <h1>{blogPost.Title}</h1>
              <h2>Post by @Author</h2>
              <p>{blogPost.Content}</p>
              <img src={blogPost.FeaturedImageURL} />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
