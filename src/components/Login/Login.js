import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        // Mock validation (replace this with real validation)
        if (username === 'user' && password === 'password') {
            // Simulate token storage (replace with real token handling)
            localStorage.setItem('token', 'mockAuthToken');
            onLogin(); // Update login status in parent component
            navigate('/'); // Redirect to home
        } else {
            setLoginError(true);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {loginError && <p style={{ color: 'red' }}>Invalid username or password</p>}
        </div>
    );
};

export default Login;
