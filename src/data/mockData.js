// src/data/mockData.js
export const dashboardStats = {
  totalCampaigns: 24,
  activeCampaigns: 8,
  totalSubscribers: 12453,
  openRate: "68%",
  clickRate: "12%",
  bounceRate: "2.3%",
};

export const recentCampaigns = [
  {
    id: 1,
    name: "Summer Sale 2025",
    status: "Sent",
    recipients: 2500,
    openRate: "72%",
    clickRate: "15%",
    date: "2025-12-25",
  },
  {
    id: 2,
    name: "New Product Launch",
    status: "Draft",
    recipients: 0,
    openRate: "0%",
    clickRate: "0%",
    date: "2025-12-20",
  },
  {
    id: 3,
    name: "Black Friday Deals",
    status: "Sent",
    recipients: 5200,
    openRate: "75%",
    clickRate: "18%",
    date: "2025-11-25",
  },
];

export const campaignPerformance = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 82],
};
