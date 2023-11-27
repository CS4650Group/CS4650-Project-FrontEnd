import React from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css';

const BlogPage = ({ pageID }) => {
 // const { postId } = useParams(); // Get the postId from URL parameters

  return (
    <div className="Page">
      <h1>Blog Title</h1>
      <h1>Blog Id: {pageID}</h1>
      <h2>User</h2>
      <h3>Post</h3>
    </div>
  );
};

export default BlogPage;
