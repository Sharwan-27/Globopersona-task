// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CampaignsList from "./components/CampaignsList";
import CampaignForm from "./components/CampaignForm";
import "./styles/main.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`main-content ${!isSidebarOpen ? "expanded" : ""}`}>
          <Header onMenuClick={toggleSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/campaigns" element={<CampaignsList />} />
              <Route path="/campaigns/new" element={<CampaignForm />} />
              <Route path="/campaigns/:id/edit" element={<CampaignForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
