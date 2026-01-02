// src/components/Header.jsx
import React from "react";
import "../styles/components/header.css";

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          ☰
        </button>
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span className="search-icon">🔍</span>
        </div>
        <div className="user-menu">
          <span className="notification-icon">🔔</span>
          <div className="user-avatar">
            <span>👤</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
