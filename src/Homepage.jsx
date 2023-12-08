import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUserId, setPageId }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getApi(); 
    getUserByID();
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

  const getUserByID = async () => {
    try {
      const userResponse = await fetch('https://emz7g9mmjj.execute-api.us-east-2.amazonaws.com/get_username');
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const userResponseData = await userResponse.json();
      const parsedUserData = JSON.parse(userResponseData.body);
  
      if (Array.isArray(parsedUserData)) {
        setUserList(parsedUserData);
      } else {
        console.error('User data is not in the expected format');
      }
    } catch (error) {
      console.error('Error fetching user list', error);
    }
  };
  

  // Sort blogPosts based on PostID in descending order
  const sortedBlogPosts = [...blogPosts].sort((a, b) => b.PostID - a.PostID);

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
    <div className="homepage">
      <div className="header">
        <div>
          <Link to="/" className="homepage-link">
            <h3 className="homepage-title">CloudScape</h3>
          </Link>
        </div>
      </div>
      {sortedBlogPosts.map((post) => (
        <div key={post.PostID} className="post" onClick={() => setPageId(post.PostID)}>
          <Link to={`/post`} className="post-link" key={post.PostID}>
            <div className="post-content">
              <div className="post-image">
                <img src={post.FeaturedImageURL} alt={""} />
              </div>
              <div className="post-info">
                <h1>{post.Title}</h1>
                <h2>Posted by @{getUsernameById(post.AuthorID)}</h2>
                <h2>{formatDate(post.CreatedAt)}</h2>
                <p>{post.Content}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};


export default Homepage;
