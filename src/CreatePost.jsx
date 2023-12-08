import React, { useState } from 'react';
import './App.css';

const CreatePost = ({ currentUserId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [postCreated, setPostCreated] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setCategory(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      Title: title,
      Content: content,
      AuthorID: currentUserId,
      Category: category,
      FeaturedImageURL: imageURL
    };
  
    try {
      const response = await fetch('https://rpq05dskri.execute-api.us-east-2.amazonaws.com/create_blogposts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }else{
        setTitle("");
        setContent("");
        setImageURL("");
        setPostCreated(true);
      }
  
      // Handle success response
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error scenarios
    }
  };
  
  const isDisabled = !title.trim() || !content.trim();

  return (
    <div>
      <div className="CreatePost">
        <h1>Create Post</h1>
        <div>

          <input type="text" value={title} placeholder='Title' onChange={handleTitleChange} />
        </div>
        <div>
          <input type="text" value={imageURL} placeholder='Image URL' onChange={handleImageURLChange} />
        </div>
        <div>
          <textarea value={content} placeholder='Post' onChange={handleContentChange} />
        </div>
        <button disabled={isDisabled} onClick={handleSubmit}>Submit</button>

        <div>
            {postCreated && <p>Post created successfully!</p>}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;