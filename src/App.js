import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import HomeComponent from './components/Home/Home';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';

const Home = () => {
    return <HomeComponent />;
};

const Post = () => {
    return <PostList />;
};

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {isLoggedIn && (
                            <>
                                <li>
                                    <Link to="/post/1">Post List</Link>
                                </li>
                                <li>
                                    <Link to="/logout" onClick={handleLogout}>Logout</Link>
                                </li>
                            </>
                        )}
                        {!isLoggedIn && (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:postId" element={<Post />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
