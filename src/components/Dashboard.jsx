// src/components/Dashboard.jsx
import React from "react";
import "../styles/components/dashboard.css";
import {
  dashboardStats,
  recentCampaigns,
  campaignPerformance,
} from "../data/mockData";

const StatCard = ({ icon, title, value, change, isPositive }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-details">
        <h3>{title}</h3>
        <div className="stat-value">{value}</div>
        {change && (
          <div
            className={`stat-change ${isPositive ? "positive" : "negative"}`}
          >
            {isPositive ? "↑" : "↓"} {change}
          </div>
        )}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <div className="date-range">
          <span>Last 30 days</span>
          <span>▼</span>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon="📧"
          title="Total Campaigns"
          value={dashboardStats.totalCampaigns}
          change="+12%"
          isPositive={true}
        />
        <StatCard
          icon="📊"
          title="Active Campaigns"
          value={dashboardStats.activeCampaigns}
        />
        <StatCard
          icon="👥"
          title="Total Subscribers"
          value={dashboardStats.totalSubscribers.toLocaleString()}
          change="+5.2%"
          isPositive={true}
        />
        <StatCard
          icon="📈"
          title="Avg. Open Rate"
          value={dashboardStats.openRate}
          change="+2.1%"
          isPositive={true}
        />
      </div>

      <div className="dashboard-row">
        <div className="chart-card">
          <div className="card-header">
            <h3>Campaign Performance</h3>
            <div className="chart-legend">
              <div className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: "#4a6cf7" }}
                ></span>
                <span>Open Rate</span>
              </div>
            </div>
          </div>
          <div className="chart-container">
            <BarChart data={campaignPerformance} />
          </div>
        </div>

        <div className="quick-stats">
          <h3>Quick Stats</h3>
          <div className="stat-item">
            <span className="stat-label">Bounce Rate</span>
            <span className="stat-value">{dashboardStats.bounceRate}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Click Rate</span>
            <span className="stat-value">{dashboardStats.clickRate}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Avg. Time to Open</span>
            <span className="stat-value">2.4h</span>
          </div>
        </div>
      </div>

      <div className="recent-campaigns">
        <div className="card-header">
          <h3>Recent Campaigns</h3>
          <button className="btn btn-primary">View All</button>
        </div>
        <CampaignsTable campaigns={recentCampaigns} />
      </div>
    </div>
  );
};

// Simple Bar Chart Component
const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.data);

  return (
    <div className="bar-chart">
      {data.data.map((value, index) => {
        const height = (value / maxValue) * 100;
        return (
          <div key={index} className="bar-container">
            <div
              className="bar"
              style={{ height: `${height}%` }}
              title={`${value}%`}
            ></div>
            <span className="bar-label">{data.labels[index]}</span>
          </div>
        );
      })}
    </div>
  );
};

const CampaignsTable = ({ campaigns }) => {
  return (
    <div className="table-responsive">
      <table className="campaigns-table">
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Status</th>
            <th>Recipients</th>
            <th>Open Rate</th>
            <th>Click Rate</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.name}</td>
              <td>
                <span
                  className={`status-badge ${campaign.status.toLowerCase()}`}
                >
                  {campaign.status}
                </span>
              </td>
              <td>{campaign.recipients.toLocaleString()}</td>
              <td>{campaign.openRate}</td>
              <td>{campaign.clickRate}</td>
              <td>{new Date(campaign.date).toLocaleDateString()}</td>
              <td>
                <button className="btn-icon" title="View">
                  👁️
                </button>
                <button className="btn-icon" title="Edit">
                  ✏️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
