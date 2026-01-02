// src/components/Sidebar.jsx
import React from "react";
import "../styles/components/sidebar.css";

const Sidebar = ({ isOpen, onNavClick, activeView }) => {
  const navItems = [
    { id: "dashboard", icon: "📊", label: "Dashboard" },
    { id: "campaigns", icon: "📧", label: "Campaigns" },
    { id: "contacts", icon: "👥", label: "Contacts" },
    { id: "analytics", icon: "📈", label: "Analytics" },
    { id: "templates", icon: "📑", label: "Templates" },
    { id: "settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>Globopersona</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeView === item.id ? "active" : ""}`}
              onClick={() => onNavClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
