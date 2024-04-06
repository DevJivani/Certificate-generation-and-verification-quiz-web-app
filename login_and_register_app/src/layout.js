// Layout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './layout.css';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout action here
        console.log("Logout clicked");
        localStorage.removeItem('user')

        // Redirect to login page after logout
        navigate("/login");
    };

    return (
        <div className="layout">
            <header>
                <h1>Quiz App</h1>
                <button><div className="logout-button" onClick={handleLogout}>Logout</div></button>
            </header>
            {children}
        </div>
    );
};

export default Layout;


