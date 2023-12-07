import React from 'react';
import "./Blog.css"

const BlogInstance = (blogpost) => {
    return(
        <div  className="post">
            <h1>{blogpost.Title}</h1>
            <h2>Posted by @Author</h2>
            <p>{blogpost.Content}</p>
            <img src= {blogpost.FeaturedImageURL} />
        </div>
    );

};
export default BlogInstance;