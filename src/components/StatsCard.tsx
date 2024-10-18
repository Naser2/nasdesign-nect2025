import React from "react";

// Define the props structure for the card
interface StatsCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode; // Accepts an SVG or Icon as a prop
  percentage: number;
  description: string;
}

// Reusable StatsCard component
const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, percentage, description }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{title}</h3>
        {icon} {/* Display the passed icon */}
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{percentage}% from last week</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default StatsCard;
