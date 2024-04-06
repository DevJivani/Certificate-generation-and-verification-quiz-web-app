import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand">Quiz App</span>
      <div className="navbar-buttons">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <button onClick={() => navigate('/login')} className="login-button">Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
