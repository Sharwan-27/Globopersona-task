// src/components/CampaignForm.jsx
import React, { useState } from "react";
import "../styles/components/campaign-form.css";

const CampaignForm = ({ onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    fromName: "Globopersona",
    fromEmail: "noreply@globopersona.com",
    replyTo: "support@globopersona.com",
    template: "",
    list: "",
    scheduleType: "immediately",
    scheduledDate: new Date().toISOString().split("T")[0],
    scheduledTime: "12:00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      console.log("Form submitted:", formData);
      alert("Campaign created successfully!");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h3>Campaign Details</h3>
            <div className="form-group">
              <label>Campaign Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="E.g., Summer Sale 2025"
                required
              />
            </div>
            <div className="form-group">
              <label>Email Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter email subject"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>From Name</label>
                <input
                  type="text"
                  name="fromName"
                  value={formData.fromName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>From Email</label>
                <input
                  type="email"
                  name="fromEmail"
                  value={formData.fromEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Reply To</label>
              <input
                type="email"
                name="replyTo"
                value={formData.replyTo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h3>Content</h3>
            <div className="form-group">
              <label>Template</label>
              <select
                name="template"
                value={formData.template}
                onChange={handleChange}
                required
              >
                <option value="">Select a template</option>
                <option value="newsletter">Newsletter</option>
                <option value="promotional">Promotional</option>
                <option value="announcement">Announcement</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email Content</label>
              <div className="email-editor">
                <div className="email-toolbar">
                  <button type="button" title="Bold">
                    B
                  </button>
                  <button type="button" title="Italic">
                    I
                  </button>
                  <button type="button" title="Link">
                    🔗
                  </button>
                  <button type="button" title="Image">
                    🖼️
                  </button>
                  <button type="button" title="Undo">
                    ↩️
                  </button>
                  <button type="button" title="Redo">
                    ↪️
                  </button>
                </div>
                <div className="email-content" contentEditable>
                  <h1>Your Email Heading</h1>
                  <p>Start writing your email content here...</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h3>Recipients & Schedule</h3>
            <div className="form-group">
              <label>Mailing List</label>
              <select
                name="list"
                value={formData.list}
                onChange={handleChange}
                required
              >
                <option value="">Select a list</option>
                <option value="all">All Subscribers</option>
                <option value="premium">Premium Users</option>
                <option value="free">Free Users</option>
              </select>
            </div>
            <div className="form-group">
              <label>Schedule</label>
              <div className="schedule-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="scheduleType"
                    value="immediately"
                    checked={formData.scheduleType === "immediately"}
                    onChange={handleChange}
                  />
                  <span>Send immediately</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="scheduleType"
                    value="schedule"
                    checked={formData.scheduleType === "schedule"}
                    onChange={handleChange}
                  />
                  <span>Schedule for later</span>
                </label>
              </div>
            </div>
            {formData.scheduleType === "schedule" && (
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="scheduledDate"
                    value={formData.scheduledDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input
                    type="time"
                    name="scheduledTime"
                    value={formData.scheduledTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="campaign-form-container">
      <div className="form-header">
        <h2>{step === 1 ? "Create New Campaign" : `Step ${step} of 3`}</h2>
        <div className="step-indicator">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`step ${step === num ? "active" : ""} ${
                step > num ? "completed" : ""
              }`}
              onClick={() => step > num && setStep(num)}
            >
              {step > num ? "✓" : num}
            </div>
          ))}
          <div className="step-line"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        <div className="form-actions">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <div className="right-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {step === 3 ? "Create Campaign" : "Continue"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;
