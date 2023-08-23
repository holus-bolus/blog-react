import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = () => {
    return (
        <div>
            <h2>Post</h2>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default Post;
