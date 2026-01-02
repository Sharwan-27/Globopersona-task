// src/components/CampaignsList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/campaigns.css";

// Mock data for campaigns
const mockCampaigns = [
  {
    id: 1,
    name: "Summer Sale 2025",
    status: "Sent",
    recipients: 2500,
    openRate: "72%",
    clickRate: "15%",
    date: "2025-12-25",
    type: "Promotional",
  },
  {
    id: 2,
    name: "New Product Launch",
    status: "Draft",
    recipients: 0,
    openRate: "0%",
    clickRate: "0%",
    date: "2025-12-20",
    type: "Announcement",
  },
  {
    id: 3,
    name: "Black Friday Deals",
    status: "Sent",
    recipients: 5200,
    openRate: "75%",
    clickRate: "18%",
    date: "2025-11-25",
    type: "Promotional",
  },
  {
    id: 4,
    name: "Weekly Newsletter #45",
    status: "Scheduled",
    recipients: 12453,
    openRate: "0%",
    clickRate: "0%",
    date: "2025-12-28",
    type: "Newsletter",
  },
];

const CampaignsList = ({ onAddCampaign }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredCampaigns = mockCampaigns
    .filter((campaign) => {
      const matchesSearch = campaign.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" ||
        campaign.status.toLowerCase() === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return "⇅";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <div className="campaigns-container">
      <div className="campaigns-header">
        <h2>Campaigns</h2>
        <button onClick={onAddCampaign} className="btn btn-primary">
          + Create Campaign
        </button>
      </div>

      <div className="campaigns-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-group">
          <label>Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="sent">Sent</option>
          </select>
        </div>
      </div>

      <div className="campaigns-table-container">
        <table className="campaigns-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Campaign Name {getSortIcon("name")}
              </th>
              <th onClick={() => handleSort("type")}>
                Type {getSortIcon("type")}
              </th>
              <th onClick={() => handleSort("status")}>
                Status {getSortIcon("status")}
              </th>
              <th
                onClick={() => handleSort("recipients")}
                className="text-right"
              >
                Recipients {getSortIcon("recipients")}
              </th>
              <th onClick={() => handleSort("openRate")} className="text-right">
                Open Rate {getSortIcon("openRate")}
              </th>
              <th onClick={() => handleSort("date")} className="text-right">
                Date {getSortIcon("date")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td>
                    <div className="campaign-name">
                      <span className="campaign-icon">📧</span>
                      {campaign.name}
                    </div>
                  </td>
                  <td>
                    <span className="campaign-type">{campaign.type}</span>
                  </td>
                  <td>
                    <span
                      className={`status-badge ${campaign.status.toLowerCase()}`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="text-right">
                    {campaign.recipients.toLocaleString()}
                  </td>
                  <td className="text-right">{campaign.openRate}</td>
                  <td className="text-right">
                    {new Date(campaign.date).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">
                        👁️
                      </button>
                      <button className="btn-icon" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-icon" title="Duplicate">
                        ⎘
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">
                  No campaigns found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignsList;
