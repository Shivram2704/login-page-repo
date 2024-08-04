import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout functionality
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <nav className="nav-section">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/employee-list">Employee List</Link></li>
            <li><Link to="/hukum-gupta">Hukum Gupta</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Dashboard;
