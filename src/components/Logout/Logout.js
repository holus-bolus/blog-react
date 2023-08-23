import React from 'react';
import './Logout.css'
const Logout = () => {
    const handleLogout = () => {
        // Clear the authentication token from state or local storage
        localStorage.removeItem('token');
        // Perform additional cleanup, like redirecting to the login page
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
