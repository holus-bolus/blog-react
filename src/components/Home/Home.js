import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Link to="/post/1">Go to Post 1</Link>
        </div>
    );
};

export default Home;
