import React from 'react';
import "./Blog.css"

const BlogInstance = (blogpost) => {
    

    return(
        <div  className="post">
            <h1>{blogpost.Title}</h1>
            <h2>Posted by @Author</h2>
            <h2>{blogpost.CreatedAt}</h2>
            <p>{blogpost.Content}</p>
            <img src= {blogpost.FeaturedImageURL} alt={""} />
        </div>
    );

};
export default BlogInstance;