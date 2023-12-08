import React, { useState, useEffect } from 'react';
import './Blog.css';

const BlogPage = ({ pageID }) => {
  const [blogPost, setBlogPost] = useState(null); // State for the single blog post
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserByID();
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

  const getUserByID = async () => {
    try {
      const userResponse = await fetch('https://emz7g9mmjj.execute-api.us-east-2.amazonaws.com/get_username');
      const userResponseData = await userResponse.json();

      // Parse the JSON string inside the "body" property to an array of objects
      const parsedUserData = JSON.parse(userResponseData.body);
      setUserList(parsedUserData); // Set the fetched user list to state
    } catch (error) {
      console.error('Error fetching user list', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const getUsernameById = (userId) => {
    const user = userList.find((user) => user.UserID === userId);
    return user ? user.Username : 'Unknown User';
  };

  return (
    <div>
      <div className="page">
        {blogPost ? (
          <div key={blogPost.PostID}>
            <div>
              <h1>{blogPost.Title}</h1>
              <h2>Post by @{getUsernameById(blogPost.AuthorID)}</h2>
              <h3>Date: {formatDate(blogPost.CreatedAt)}</h3>
              <img src={blogPost.FeaturedImageURL} alt={""}/>
              <p>{blogPost.Content}</p>
              
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
