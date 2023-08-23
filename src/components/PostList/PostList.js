// PostList.js
import React from 'react';
import posts from '../../data';
import './PostList.css'

const PostList = () => {
    return (
        <div className="post-list">
            {posts.map(post => (
                <div className="post-item" key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <h2>{post.title}</h2>
                    <p>{post.content.substring(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
